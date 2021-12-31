import { Shipment } from "./Shipment";
import { ServiceOptionDeliveryConfirmation } from "./ServiceOptionDeliveryConfirmation";
import { ServiceOptionInsurance} from "./ServiceOptionInsurance";
import { Reference } from "./Reference";

export interface CalculateRatesRequest  {
    shipment: Shipment,
    async: boolean,
    is_document: boolean,
    service_options: ServiceOptionDeliveryConfirmation|ServiceOptionInsurance[],
    shipper_accounts: Reference[],
    ship_date: string
};