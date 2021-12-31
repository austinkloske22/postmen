import { Common } from "./Common";
import { Money } from "./Money";
import { Weight } from "./Weight";

export interface Item  {
    description: string,
    quantity: number,
    price: Money,
    item_id: string,
    origin_country: Common.Country,
    weight: Weight,
    sku: string,
    hs_code: string
};