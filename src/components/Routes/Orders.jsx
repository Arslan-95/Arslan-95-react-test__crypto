import axios from 'axios';
import React from 'react';
import { OrdersTable } from '../index';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('http://localhost:3005/orders')
      .then((response) => {
        setOrders(response.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setOrders([]);
        setLoaded(true);
      });
  }, []);

  return <OrdersTable loaded={loaded} data={orders} />;
}

export default Orders;
