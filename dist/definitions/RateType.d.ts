import { DetailedCharge } from "./DetailedCharge";
import { Money } from "./Money";
import { ShipperAccountInformation } from "./ShipperAccountInformation";
import { Weight } from "./Weight";
export interface RateType {
    shipper_account: ShipperAccountInformation;
    service_type: string;
    service_name: string;
    charge_weight: Weight;
    total_charge: Money;
    pickup_deadline: string;
    booking_cut_off: string;
    delivery_date: string;
    transit_time: number;
    detailed_charges: DetailedCharge[];
    info_message: string;
    error_message: string;
}
