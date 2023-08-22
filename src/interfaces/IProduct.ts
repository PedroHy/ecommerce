import ICategory from "./ICategory";

export default interface IProduct {
    _id: string,
    pictures: [File],
    name: string,
    installment: string,
    price: Number,
    category:ICategory,
    description: string

}