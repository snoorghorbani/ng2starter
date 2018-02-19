import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  "Time": {
    type: Number,
    index: "2d"
  },
  "TimeId": {
    type: Number
  },
  "Endpoint": {
    type: String,
    required: true
  },
  "Source": {
    type: Schema.Types.ObjectId,
    ref: "Source"
  },
  "Data": Object,
  "Events": {
    default: [],
    "type": [
      {
        "Type": {
          type: String, required: true, enum: {
            values: ["threshold", "error"],
            message: "enum validator failed for path `{PATH}` with value `{VALUE}`"
          }
        },
        "Info": {}
      }
    ]
  }
}, {
    timestamps: true,
  });

/**
 * pre save dat middleware.
 */
dataSchema.pre("save", function save(next) {
  const data = this;
  next();
});

const Data = mongoose.model("Data", dataSchema);

export { Data };
