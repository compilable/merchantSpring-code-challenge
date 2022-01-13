import React, { useState } from "react"
import { User } from "./User"
import { OverdueOrder } from "../OverdueOrderTable/OverdueOrder"
const API_ENDPOINT = "http://localhost:8080/"


const AppLogic = () => {

  const [user, setUser] = useState<User | null>(null);
  const [overdueOrders, _setOverdueOrders] = useState<Array<OverdueOrder>>([]);

  const setOverdueOrders = (overdueOrders: Array<OverdueOrder>) => {
    overdueOrders.map((overdueOrder) => {
      return (overdueOrder.country = overdueOrder.country.toLowerCase().substring(0, 2))
    });
    _setOverdueOrders(overdueOrders)
  };

  const logError = (error:any)=>{
    console.error(`unable to load the data from the server, please check the connection to : ${API_ENDPOINT}`)
  }

  const makeServiceCall = (endpoint:string)=>{
    fetch(API_ENDPOINT + endpoint)
    .then((results) => results.json())
    .then((data) => {
      if(endpoint==="user"){
        setUser(data)
      }else if(endpoint==="overdueOrders"){
        setOverdueOrders(data)
      }
      
    }, (error) => {
      if (error) {
        logError(error)
      }
    });
  }

  React.useEffect(() => {
    makeServiceCall("user")
    makeServiceCall("overdueOrders")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return { user, overdueOrders, setOverdueOrders, setUser }

}

export default AppLogic