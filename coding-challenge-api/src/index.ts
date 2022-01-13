import express, { Request, Response } from "express";

import cors from "cors";
import { getUser } from "./user";
import {getOverdueOrders} from "./sales"

const app = express();
const port = 8080;

app.use(cors());
app.get("/user", getUser);

app.get("/overdueOrders", getOverdueOrders);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

module.exports = app;