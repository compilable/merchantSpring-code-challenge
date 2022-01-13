import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { Container } from "@material-ui/core";
import {OverdueOrder} from "./OverdueOrder"

import OverdueOrderTableStyles from "./OverdueOrderTableStyles"

const columns: Array<Column<OverdueOrder>> = [
  {
    title: 'MARKETPLACE', align:'justify', field: 'marketPlace', render: rowData => {
      return(<>
        <img alt={rowData.country} src={`https://flagcdn.com/w20/${rowData.country}.png`} style={{ width: 20 }} /> <span>{rowData.marketPlace}</span>
      </>)
    }
  },
  { title: "STORE",align:'justify', field: "shopName" },
  { title: "ORDER ID",align:'justify', field: "orderId" },
  { title: "ORDER VALUE",align:'justify', field: "orderValue" , type:"currency" },
  { title: "ITEMS", align:'justify',field: "items" },
  { title: "DESTINATION", align:'justify',field: "destination" },
  { title: "DAYS OVERDUE", align:'center',field: "daysOverdue", render: rowData => (<span style={{color:'red'}}>{rowData.daysOverdue}</span>) }
];

interface Props{
  heading:string,
  orders: Array<OverdueOrder>
}

const OverdueOrderTable: React.FC<Props> = ({orders,heading})=> {
  const {tableIcons, tableOptions,tableStyles}= OverdueOrderTableStyles()
  return (
    <Container style={tableStyles}>
      <MaterialTable
        title={heading}
        columns={columns}
        data={orders}
        icons={tableIcons}
        options={tableOptions()} />
    </Container>
  );
}

export default OverdueOrderTable