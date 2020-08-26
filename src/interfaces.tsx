export interface BookInterface { 
    body: string;
    id: number;
    price: number;
    src: string;
    title: string;
    userId: number;
}

export interface ItemInterface {
    body: string;
    id: number;
    price: number;
    src: string;
    title: string;
    userId: number;
}

export interface OrderInterface {
    id: string;
    date: string;
    items: ItemInterface[];
}