import OverdueOrderTable from './OverdueOrderTable';
import { render } from '@testing-library/react';
import toJSON from "enzyme-to-json"
import faker from "faker"
import { shallow } from 'enzyme';
faker.seed(0)

let overdueOrderData:any

describe('test Overdue Orders table loaded with data', () => {
  overdueOrderData = ([...new Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    marketPlace: `https://flagcdn.com/w20/${faker.address.countryCode().toLowerCase()}.png`,
    country: faker.address.countryCode(),
    shopName:faker.company.companyName(),
    orderId: faker.vehicle.vrm(),
    orderValue:faker.commerce.price(),
    items:Math.floor((Math.random() * 50) + 1),
    destination: faker.address.cityName(),
    daysOverdue: (Math.floor((Math.random() * 10) + 1))
  })))

  let tableWithData:any
  beforeEach(() => {
    tableWithData  = render(<OverdueOrderTable heading="Overdue Orders" orders={overdueOrderData} />);

    console.debug(tableWithData)
  });
  it('table has loaded', () => {
    expect(tableWithData.getAllByText("Overdue Orders"))
  });
});

test("has the table data loaded", () => {
  overdueOrderData = [
    {
      "country": "LI",
      "daysOverdue": 5,
      "destination": "Carmichael",
      "id": "a73cf3be-453f-4870-b326-b5a73429cdb1",
      "items": 4,
      "marketPlace": "https://flagcdn.com/w20/nr.png",
      "orderId": "SS34OVE",
      "orderValue": "205.00",
      "shopName": "Cole Inc",
    },
    {
      "country": "SS",
      "daysOverdue": 2,
      "destination": "Summerville",
      "id": "2715bf0c-bb1e-431b-8b90-f3443a1108e0",
      "items": 42,
      "marketPlace": "https://flagcdn.com/w20/no.png",
      "orderId": "PE05MPZ",
      "orderValue": "788.00",
      "shopName": "Wyman, Grady and Prosacco",
    }
  ]
  const wrapper = shallow(<OverdueOrderTable heading="Overdue Orders" orders={overdueOrderData} />);
  expect(toJSON(wrapper)).toMatchSnapshot()
});