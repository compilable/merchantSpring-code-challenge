import { OverdueOrder } from "./OverdueOrder"
import moment from "moment"
const csv = require("fast-csv")

const DATA_FILE_LOCATION=`${process.cwd()}/data/`
const ORDERS_CSV_FILE ="orders.csv"
const STORES_CSV_FILE ="stores.csv"
const CUSTOM_DATE_FORMAT="DD/MM/YYYY"

// TODO: map the store details using a type
async function loadStores() {

  const stores = new Map<number, any>()

  return new Promise<Map<number, any>>(function (resolve, rej) {
    csv.parseFile(DATA_FILE_LOCATION+STORES_CSV_FILE)
      .on("data", function (line: string) {
        if (parseInt(line[0]) > 0) {
          stores.set(parseInt(line[0]), { marketplace: line[1], country: line[2], shopName: line[3] })
        }
      })
      .on("end", function () {
        resolve(stores);
      });
  })
}

async function loadOverdueOrders(store: Map<number, any>) {
  // filtr the orders based on :  shipment_status = Pending
  // map the order to store details
  // calculate shipping delay

  const overdueOrders = new Array<OverdueOrder>()

  if(store && store.size >0){
    return new Promise<Array<OverdueOrder>>(function (resolve, rej) {
      csv.parseFile(DATA_FILE_LOCATION+ORDERS_CSV_FILE)
        .on("data", function (data: string) {
          if (parseInt(data[0]) > 0) {
            // Id,storeId,orderId,latest_ship_date,shipment_status,destination,items,orderValue
            if (data[4] == 'Pending') {
              const storeDetails = store.get(parseInt(data[1]))
              overdueOrders.push(
                {
                  id: data[0],
                  marketPlace: storeDetails.marketplace,
                  orderId: data[2],
                  country: storeDetails.country,
                  shopName: storeDetails.shopName,
                  items: parseInt(data[6]),
                  orderValue: data[7],
                  destination: data[5],
                  daysOverdue: findOverdueDays(data[3])
                }
              )
            }
          }
        })
        .on("end", function () {
          resolve(overdueOrders);
        });
    })
  }
  console.log("WAR: No store details were found, unable to load the orders.")
  return overdueOrders  
}

export async function getOverdueOrders(req: any, res: any) {
  const storeMap = await loadStores()
  console.log(`INFO: Total of ${storeMap.size} stores loaded from the datasource.`)
  const overdueOrders = await loadOverdueOrders(storeMap)
  console.log(`INFO: Total of ${overdueOrders.length} overdue orders sent.`)
  res.json(overdueOrders);
}

// TODO: Move to a util calss
function findOverdueDays(latestShipDate:string): number {
  return Math.abs(moment(new Date(),CUSTOM_DATE_FORMAT).diff(moment(latestShipDate,CUSTOM_DATE_FORMAT),"days"))
}

