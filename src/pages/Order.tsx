import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Book.css';
interface ItemInterface {
    body: string;
    id: number;
    price: number;
    src: string;
    title: string;
    userId: number;
}

interface OrderInterface {
    date: string;
    items: ItemInterface[];
}

interface RootState {
    orders: OrderInterface[]
}
const Order = () => {
    const { orders } = useSelector((state: RootState) => state)

    return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
       
        { orders.map((order, index) => <div>Order {index} {order?.items?.length}</div>)

       }
    </div>
}
export default Order