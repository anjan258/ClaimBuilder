import { CatalogItem } from './catalog-item';


export class Claim {
    UserId: number;
    PurchaseOrderNumber: number;
    InvoiceNumbers: number[];
    CompanyName: string;
    StreetAddress1: string;
    StreetAddress2: string;
    City: string;
    StateProvince: string;
    PostalCode: string;
    Country: string;
    InvoiceDate: Date;
    ContactPerson: string;
    Phone: string;
    EndUserInvoiceTotalAmount: number;
    DistributorIds: number[];
    CatalogItem: CatalogItem;
}
