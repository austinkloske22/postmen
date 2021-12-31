import { Postmen } from "./Common";
import { Dimension } from "./Dimension";
import { Item } from "./Item";
import { Weight } from "./Weight";

export interface Parcel  {
    box_type: Postmen.BoxType,
    dimension: Dimension,
    items: Item[],
    description: string,
    weight: Weight
};