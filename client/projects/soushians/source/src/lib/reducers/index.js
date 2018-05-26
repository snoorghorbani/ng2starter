"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var configList = require("./config-list.reducer");
exports.ConfigReducers = {
    'list': configList.Reducer
};
//#region selectors
exports.selectConfigState = store_1.createFeatureSelector("config");
//#endregion
exports.getConfigList = store_1.createSelector(exports.selectConfigState, function (state) { return state.list; });
exports.getConfigListData = store_1.createSelector(exports.getConfigList, configList.getConfigListData);
//# sourceMappingURL=index.js.map