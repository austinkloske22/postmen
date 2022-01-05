"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
var Common;
(function (Common) {
    let Endpoint;
    (function (Endpoint) {
        Endpoint["Rates"] = "/rates";
        Endpoint["ShipperAccounts"] = "/shipper-accounts";
    })(Endpoint = Common.Endpoint || (Common.Endpoint = {}));
    ;
    let ChargeType;
    (function (ChargeType) {
        ChargeType["Base"] = "base";
        ChargeType["Weight"] = "additional_handling_surcharge_-_weight";
        ChargeType["Fuel"] = "fuel";
    })(ChargeType = Common.ChargeType || (Common.ChargeType = {}));
})(Common = exports.Common || (exports.Common = {}));
;
