import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

const sourceSchema = new mongoose.Schema({
  Endpoint: { type: String, unique: true },
  Interval: { type: Number, default: 60 * 1000 },
  IsActive: { type: Boolean, default: false },
  Thresholds: [
    {
      Name: { type: String },
      Formula: { type: String },
      Message: { type: String },
      Type: { type: String, enum: ["goal", "critical"], default: "critical" },
      ComputedFormula: { type: String }
    }
  ]
}, { timestamps: true });

/**
 * pre save source middleware.
 */
sourceSchema.pre("save", function save(next) {
  const source: any = this;
  if (!source.Thresholds) source.Thresholds = [];
  next();
});

const Source = mongoose.model("Source", sourceSchema);

export { Source };

