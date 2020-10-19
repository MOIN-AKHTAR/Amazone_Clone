import React,{useEffect,useState} from 'react';
import {useContextValue} from './StateProvider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Order from './Order'
import {db} from './fireBase';

export default function Orders() {
    const [{user}] =useContextValue();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
      if(user){
        db.collection("users").
        doc(user?.uid).
        collection("orders").
        orderBy("created","desc").
        onSnapshot(snapShot=>{
          setOrders(snapShot.docs.map(doc=>({
              id:doc.id,
              data:doc.data()
          })))
        });
        setLoading(false)
      }else{
          setOrders([]);
          setLoading(false);
      }
  }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            {loading?<div className="orders_loading">
                  <CircularProgress
                    thickness={7}
                    className="orders_loader"
                  />
                </div>:
            <div className="order_container">
                {orders?.map((order)=><Order order={order} key={order.id}/>)}
            </div>
            }
        </div>
    )
}
