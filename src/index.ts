// Type definitions for Postmen API
// Project: https://docs.postmen.com
// Definitions by: Austin Kloske <https://github.com/austinkloske22>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Common } from "./definitions/Common";
import { Address } from "./definitions/Address";
import { BaseResponse } from "./definitions/BaseResponse";
import { Billing } from "./definitions/Billing";
import { CalculateRatesResponse } from "./definitions/CalculateRatesResponse"; 
import { Customs } from "./definitions/Customs"; 
import { DetailedCharge } from "./definitions/DetailedCharge";
import { Dimension } from "./definitions/Dimension"; 
import { Invoice } from "./definitions/Invoice"; 
import { Item } from "./definitions/Item"; 
import { LabelRequest } from "./definitions/LabelRequest"; 
import { Money } from "./definitions/Money"; 
import { Parcel } from "./definitions/Parcel"; 
import { Rate } from "./definitions/Rate"; 
import { RateType } from "./definitions/RateType"; 
import { Reference } from "./definitions/Reference"; 
import { ReturnToAddress } from "./definitions/ReturnToAddress"; 
import { ServiceOption } from "./definitions/ServiceOption"; 
import { ServiceOptionDeliveryConfirmation } from "./definitions/ServiceOptionDeliveryConfirmation"; 
import { ServiceOptionInsurance } from "./definitions/ServiceOptionInsurance"; 
import { Shipment } from "./definitions/Shipment"; 
import { ShipperAccount } from "./definitions/ShipperAccount"; 
import { ShipperAccountsResponse } from "./definitions/ShipperAccountsResponse"; 
import { Weight } from "./definitions/Weight"; 

export interface Postmen {
    Address: Address
    BaseResponse: BaseResponse,
    Billing: Billing,
    CalculateRatesResponse: CalculateRatesResponse,
    Customs: Customs,
    DetailedCharge: DetailedCharge,
    Dimension: Dimension,
    Invoice: Invoice,
    Item: Item,
    LabelRequest: LabelRequest,
    Money: Money,
    Parcel: Parcel,
    Rate: Rate,
    RateType: RateType,
    Reference: Reference,
    ReturnToAddress: ReturnToAddress,
    ServiceOption: ServiceOption,
    ServiceOptionDeliveryConfirmation : ServiceOptionDeliveryConfirmation,
    ServiceOptionInsurance: ServiceOptionInsurance,
    Shipment: Shipment,
    ShipperAccount: ShipperAccount,
    ShipperAccountsResponse: ShipperAccountsResponse,
    Weight: Weight
}