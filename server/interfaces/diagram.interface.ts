import * as mongoose from "mongoose";

export type DiagramModel = mongoose.Document & {
  Name: string,
  Box: {
    Cols: number,
    Rows: number,
    Order: number
  },
  Source: {
    Route: string,
    Data: object,
  },
  Chart: {
    Type: "Pie" | "linear" | "Scatter" | "Bar"
  }
};