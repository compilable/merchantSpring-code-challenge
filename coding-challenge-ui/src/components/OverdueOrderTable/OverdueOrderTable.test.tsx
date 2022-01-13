import OverdueOrderTable from './OverdueOrderTable';
import React from 'react';
import { render } from '@testing-library/react';

import faker from "faker"
faker.seed(0)

let overdueOrderData:any


test('check overdue table has loaded', () => {
  const { getByText } = render(<OverdueOrderTable overdueOrderList={overdueOrderData} />);
  const headerText = getByText("Overdue Orders");
  expect(headerText).toBeInTheDocument();
});

test('check overdue data has loaded', () => {
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
  const tableWithData = render(<OverdueOrderTable overdueOrderList={overdueOrderData} />);
  const table = tableWithData.getByRole('columnheader')
  //expect(table).toContain('table')
});


// https://stackoverflow.com/questions/45315679/jest-run-async-function-once-before-all-tests