"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
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
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.Data = Data;
//# sourceMappingURL=data.model.js.map