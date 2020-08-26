import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Order.css';
import moment from 'moment'

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
       { !orders.length && 'No Orders Made.'}
        { orders.map((order, index) => <div className="orders">
            <div className="order-title">Order Placed: {moment(order.date).format("MMM Do YYYY")}</div>
            <div>
                
                { order?.items?.length > 0 && order?.items?.map(({ src, title, body, price }) => {
                        return <div className="order" style={{ display: 'flex' }}>
                            <img src={ src } style={{ width: 150, height: 150, marginRight: 16, marginBottom: 8, borderRadius: 10  }}/>
                            <div>
                                <div style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</div>
                                <div style={{ maxWidth: 400 }}>{`${body}`}</div>
                                <div style={{ fontWeight: 'bold' }}>Price: ${price}</div>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>)

       }
    </div>
}
export default Order