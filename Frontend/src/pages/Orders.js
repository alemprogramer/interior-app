import React, { useContext, useEffect } from 'react';

function Orders() {
  const { loader, updateLoader } = useContext(Loaders);

  useEffect(() => {
    setTimeout(() => {
      updateLoader(false);
    }, 500);

    return () => {
      second;
    };
  }, []);

  return <div>Orders</div>;
}

export default Orders;
