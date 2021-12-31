import { Shipment } from "./Shipment";
import { Reference } from "./Reference";
import { Common } from "./Common";
import { ServiceOption } from "./ServiceOption";
import { Invoice } from "./Invoice";
import { Billing } from "./Billing";
import { Customs } from "./Customs";
export interface LabelRequest {
    service_type: string;
    shipper_accounts: Reference;
    shipment: Shipment;
    async: boolean;
    return_shipment: boolean;
    paper_size: Common.PaperSize;
    file_type: Common.MediaType;
    ship_date: string;
    service_options: ServiceOption;
    is_document: boolean;
    invoice: Invoice;
    references: string[];
    billing: Billing;
    customs: Customs;
    order_number: string;
    order_id: string;
}
