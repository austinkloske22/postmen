"use strict";
// Type definitions for Postmen API
// Project: https://docs.postmen.com
// Definitions by: Austin Kloske <https://github.com/austinkloske22>
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./definitions/Address"), exports);
__exportStar(require("./definitions/BaseResponse"), exports);
__exportStar(require("./definitions/Billing"), exports);
__exportStar(require("./definitions/CalculateRatesResponse"), exports);
__exportStar(require("./definitions/CalculateRatesRequest"), exports);
__exportStar(require("./definitions/Customs"), exports);
__exportStar(require("./definitions/DetailedCharge"), exports);
__exportStar(require("./definitions/Dimension"), exports);
__exportStar(require("./definitions/Invoice"), exports);
__exportStar(require("./definitions/Item"), exports);
__exportStar(require("./definitions/LabelRequest"), exports);
__exportStar(require("./definitions/Money"), exports);
__exportStar(require("./definitions/Parcel"), exports);
__exportStar(require("./definitions/Rate"), exports);
__exportStar(require("./definitions/RateType"), exports);
__exportStar(require("./definitions/Reference"), exports);
__exportStar(require("./definitions/ReturnToAddress"), exports);
__exportStar(require("./definitions/ServiceOption"), exports);
__exportStar(require("./definitions/ServiceOptionDeliveryConfirmation"), exports);
__exportStar(require("./definitions/ServiceOptionInsurance"), exports);
__exportStar(require("./definitions/Shipment"), exports);
__exportStar(require("./definitions/ShipperAccount"), exports);
__exportStar(require("./definitions/ShipperAccountsResponse"), exports);
__exportStar(require("./definitions/Weight"), exports);
__exportStar(require("./definitions/Common"), exports);
