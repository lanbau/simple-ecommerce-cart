import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Order.css';
import getOrders from '../selectors/orderSelector';
import convertDate from '../utils/convertDate'
// TODO moment js doesn't work for Jest
const Order = () => {
    const orders = useSelector(getOrders)

    return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
       { !orders.length && 'No Orders Made.'}
        { orders.map((order, index) => <div className="orders" key={order.id}>
            <div className="order-title">Order Placed: {convertDate(order.date)} </div>
            <div>
                
                { order?.items?.length > 0 && order?.items?.map(({ userId, src, title, body, price }) => {
                        return <div className="order" style={{ display: 'flex' }} key={userId}>
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