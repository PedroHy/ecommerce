import { IListItem } from "./IListItem";

export interface ICart {
    _id: string,
    owner: string,
    subtotal: Number,
    products: IListItem
}