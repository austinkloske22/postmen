import { Address } from "./Address";
import { ReturnToAddress } from "./ReturnToAddress";
import { Parcel } from "./Parcel";
export interface Shipment {
    ship_from: Address;
    ship_to: Address;
    parcels: Parcel[];
    return: ReturnToAddress;
    delivery_instructions: string;
}
