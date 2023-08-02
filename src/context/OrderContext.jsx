import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export const OrderContext_Provider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [table, setTable] = useState(0);

  const handleOrderDetails = (details) => {
    const existingItemIndex = orderDetails.findIndex(
      (orderItem) => orderItem._id === details._id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...orderDetails];
      updatedCartItems[existingItemIndex].quantity += 1;

      updatedCartItems[existingItemIndex].total =
        updatedCartItems[existingItemIndex].Dine_price *
        updatedCartItems[existingItemIndex].quantity;

      setOrderDetails(updatedCartItems);
    } else {
      setOrderDetails([
        ...orderDetails,
        {
          ...details,
          quantity: 1,
          discount: 0,
          total: details.Dine_price,
          customer_comment: "",
        },
      ]);
    }
  };

  const clearOrder = () => {
    setOrderDetails([]);
  };

  // ... (previous code)

  const increaseQty = (details) => {
    const existingItemIndex = orderDetails.findIndex(
      (orderItem) => orderItem._id === details._id
    );
    const updatedCartItems = [...orderDetails];
    updatedCartItems[existingItemIndex].quantity += 1;

    // Recalculate the total price after increasing the quantity
    const updatedTotalPrice = updatedCartItems.reduce(
      (accumulator, object) =>
        accumulator +
        (object.Dine_price - (object.Dine_price * object.discount) / 100) *
          object.quantity,
      0
    );

    updatedCartItems[existingItemIndex].total =
      updatedCartItems[existingItemIndex].Dine_price *
      updatedCartItems[existingItemIndex].quantity;

    setOrderDetails(updatedCartItems);
  };

  const decreaseQty = (details) => {
    const existingItemIndex = orderDetails.findIndex(
      (orderItem) => orderItem._id === details._id
    );
    const updatedCartItems = [...orderDetails];
    updatedCartItems[existingItemIndex].quantity -= 1;

    // Recalculate the total price after decreasing the quantity
    const updatedTotalPrice = updatedCartItems.reduce(
      (accumulator, object) =>
        accumulator +
        (object.Dine_price - (object.Dine_price * object.discount) / 100) *
          object.quantity,
      0
    );

    updatedCartItems[existingItemIndex].total =
      updatedCartItems[existingItemIndex].Dine_price *
      updatedCartItems[existingItemIndex].quantity;

    setOrderDetails(updatedCartItems);
    console.log("updatedTotalPrice", updatedTotalPrice);
  };

 

  // const addDiscount = (details, disc) => {
  //   const existingItemIndex = orderDetails.findIndex(
  //     (orderItem) => orderItem._id === details._id
  //   );
  //   const updatedCartItems = [...orderDetails];
  //   updatedCartItems[existingItemIndex].discount = disc;
  //   updatedCartItems[existingItemIndex].total =
  //     updatedCartItems[existingItemIndex].total -
  //     (disc / 100) * updatedCartItems[existingItemIndex].Dine_price;
  //   console.log("updatedCartItems", updatedCartItems);
  //   setOrderDetails(updatedCartItems);
  // };


  const addDiscount = (details, disc) => {
    const existingItemIndex = orderDetails.findIndex(
      (orderItem) => orderItem._id === details._id
    );
    const updatedCartItems = [...orderDetails];
  
    // Calculate the discounted price for the item
    const discountedPrice =
      details.Dine_price - (details.Dine_price * disc) / 100;
  
    updatedCartItems[existingItemIndex].discount = disc;
    updatedCartItems[existingItemIndex].total =
      discountedPrice * updatedCartItems[existingItemIndex].quantity;
  
    setOrderDetails(updatedCartItems);
  };
  



  const playSoundEffect = () => {
    const scriptURL = new URL(import.meta.url);
    const soundURL = new URL("../assets/stop-13692.mp3", scriptURL).toString();
    const audio = new Audio(soundURL);
    audio.play();
  };
  const deleteOrderItem = (row) => {
    setOrderDetails(orderDetails.filter((item) => item._id !== row._id));
    playSoundEffect();
  };

  const handleTable = (table) => {
    setTable(table);
  };

  const addItemComment = (details, comment) => {
    const existingItemIndex = orderDetails.findIndex(
      (orderItem) => orderItem._id === details._id
    );
    const updatedCartItems = [...orderDetails];
    updatedCartItems[existingItemIndex].customer_comment = comment;
    setOrderDetails(updatedCartItems);
  };

  const handleExistingOrder = (order) => {
    setOrderDetails(order);
  };

  useEffect(() => {
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  }, [orderDetails]);

  useEffect(() => {
    localStorage.setItem("table", table);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orderDetails,
        table,
        handleOrderDetails,
        deleteOrderItem,
        increaseQty,
        decreaseQty,
        addDiscount,
        handleTable,
        addItemComment,
        handleExistingOrder,
        clearOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
