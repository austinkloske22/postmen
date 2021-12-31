import { Common } from "./Common";

export interface Address  {
    country: Common.Country,
    contact_name: string,
    phone: string,
    fax: string,
    email: string,
    company_name: string,
    // company_url: string,
    street1: string,
    street2: string,
    street3: string,
    city: string,
    state: string,
    postal_code: string,
    type: Common.AddressType,
    tax_id: string,
    eori_number?: string
};