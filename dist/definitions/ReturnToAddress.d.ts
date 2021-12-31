import { Address } from "./Address";
export interface ReturnToAddress extends Omit<Address, 'eori_number'> {
}
