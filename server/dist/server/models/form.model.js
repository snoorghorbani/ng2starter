"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
    name: { type: String },
    form: {},
    events: {
        accept: {
            show: { type: Boolean, default: true },
            text: { type: String, default: "ثبت" }
        },
        cancel: {
            show: { type: Boolean, default: true },
            text: { type: String, default: "انصراف" }
        }
    }
}, { timestamps: true });
const Form = mongoose.model("Form", formSchema);
exports.Form = Form;
//# sourceMappingURL=form.model.js.map