import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./POS.css";
import { OrderContext } from "../../../context/OrderContext";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { FoodContext } from "../../../context/FoodContext";
import { FiEdit2 } from "react-icons/fi";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import { images, sounds } from "../../../assets";
import {
  SideBar_Links,
  Loading,
  Settings_Button,
  BillPDF,
  Toaster,
  toast,
  KOT_Modal,
  callApi,
  SideBar,
  SettingsSelect,
  SettingsInput,
  POS_Menu_Card,
} from "../../../components/index";
import ZeroOrder from "./ZeroOrder";
import { GiHamburgerMenu } from "react-icons/gi";
import playSoundEffect2 from "../../../utils/SoundEffect2";
import playSoundEffect from "../../../utils/SoundEffect";
const POS = () => {
  const [veg, setVeg] = useState("All");
  const [orderType, setOrderType] = useState("Dine_In");
  const [customerComment, setCustomerComment] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const kotRef = useRef();
  const billRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => kotRef.current,
  });

  const handleBillPrint = useReactToPrint({
    content: () => billRef.current,
  });

  const { foodCategories, foodMenu, fetchFoodCategories, fetchFoodMenu } =
    useContext(FoodContext);

  const tableDetails = JSON.parse(localStorage.getItem("tabledata"));

  const {
    orderDetails,
    handleOrderDetails,
    deleteOrderItem,
    increaseQty,
    decreaseQty,
    addDiscount,
    addItemComment,
  } = useContext(OrderContext);

  useEffect(() => {
    AOS.init();
    fetchFoodCategories();
    fetchFoodMenu();
  }, []);

  const handleVeg = (e) => {
    setVeg(e.target.value);
  };

  const filterData = useCallback(() => {
    let filteredItems = foodMenu?.foodMenu;
    if (veg !== "All") {
      filteredItems = filteredItems.filter(
        (item) => item.isVeg === (veg === "Veg")
      );
    }

    if (filterInput) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(filterInput.toLocaleLowerCase())
      );
    }

    if (categoryFilter !== "All") {
      filteredItems = filteredItems.filter(
        (item) => item.food_category?.name === categoryFilter
      );
    }
    setFilteredData(filteredItems);
  }, [foodMenu, veg, filterInput, categoryFilter]);

  useEffect(() => {
    filterData();
  }, [filterData]);
 

  const handleAddFoodMenu = (item) => {
    handleOrderDetails(item);
    playSoundEffect2();
  };

  const handleFilterInput = (e) => {
    setFilterInput(e.target.value);
  };

  const orderObj = {
    table:
      orderType === "Take_Away" || orderType === "Delivery"
        ? null
        : tableDetails._id,
    persons: "3",
    waiter: "Test waiter",
    total_order_price: orderDetails.reduce((accumulator, object) => {
      const discountedPrice =
        object.Dine_price - (object.Dine_price * object.discount) / 100;

      return accumulator + discountedPrice * object.quantity;
    }, 0),

    kot_number: 103,
    items: orderDetails.map((item) => ({
      food_item: item._id,
      quantity: item.quantity,
      customer_comment: item.customer_comment,
    })),
    customer_comment_for_all_food: undefined,
  };

  const placeOrder = async () => {
    if (orderDetails.length >= 1) {
      try {
        let res = await callApi("POST", "/setting/order/new", orderObj);

        toast.success("order placed successfully");
      } catch (error) {
        console.error(error);
        toast.error("Failed to order");
      }
    }
  };
  console.log("orderDetails", orderDetails);

  return (
    <>
      <div className="d-flex">
        {/* <SideBar /> */}
        <div className="pos_container w-100">
          <div className=" NavMainDiv d-flex align-items-center   py-2">
            <div>
              <button
                className="btn  hamburger   "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div>
              <h5 className="title mb-0 headerName w-100">Outlet Name</h5>
            </div>
            <Link style={{ textDecoration: "none" }} to="/panel/tables">
              <div>
                <Settings_Button>New Order</Settings_Button>
              </div>
            </Link>
          </div>
          <div className="row mx-1  d-flex justify-content-between">
            {/* Left div */}
            <div className="col-sm-12 left d-flex flex-column justify-content-between col-md-12 col-lg-6 order-sm-2 order-md-2 order-lg-1">
              <div>
                {/* TOP BUTTONS */}

                <div
                  className="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  tabIndex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div className="offcanvas-body p-0">
                    <div className="d-flex w-100">
                      <SideBar />
                      <SideBar_Links />
                    </div>
                  </div>
                </div>

                <div className="mb-2 row mt-2">
                  <div className="col-4">
                    <Settings_Button
                      onClick={() => setOrderType("Table")}
                      className="w-100 topBtns"
                      btnTxt="Table No"
                    />
                  </div>
                  <div className="col-4">
                    <Settings_Button
                      onClick={() => setOrderType("Take_Away")}
                      className="w-100 topBtns"
                      btnTxt="Take Away"
                    />
                  </div>
                  <div className="col-4">
                    <Settings_Button
                      onClick={() => setOrderType("Delivery")}
                      className="w-100 topBtns"
                      btnTxt="Delivery"
                    />
                  </div>
                </div>

                {/* SELECT ROW */}
                <div className="row">
                  {/* SELECT TAGS */}
                  <div className="col-11">
                    <div className="row">
                      <div className="mb-2 col-6">
                        <SettingsSelect
                          label={false}
                          placeholder={<span>Select Waiter</span>}
                        />
                      </div>
                      <div className="mb-2 col-6">
                        <SettingsSelect
                          label={false}
                          placeholder={<span>Select Customer</span>}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-1 d-flex justify-content-center align-items-center">
                    <button className="btn btn-light">+</button>
                  </div>
                </div>

                {/* ORDER TABLE */}
                <div className="row my-2 orderTableDiv">
                  {orderDetails.length === 0 && <ZeroOrder />}

                  {orderDetails.length !== 0 && (
                    <table className="orderTable">
                      <thead className="">
                        <tr>
                          <th></th>
                          <th>Item</th>
                          <th>Price</th>
                          <th className="text-center">Qty</th>
                          <th>Discount</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {orderDetails.map((row, index) => (
                          <tr key={row._id}>
                            <td>
                              <button
                                data-bs-toggle="modal"
                                data-bs-target={`#staticBackdrop-${index}`}
                                style={{ border: 0, background: "none" }}
                              >
                                <FiEdit2 />
                              </button>

                              {/* COMMENT MODAL */}
                              <div
                                className="modal fade"
                                id={`staticBackdrop-${index}`}
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby={`staticBackdropLabel-${index}`}
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1
                                        className="modal-title fs-5"
                                        id={`staticBackdropLabel-${index}`}
                                      >
                                        {row.name}
                                      </h1>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>
                                    <div className="modal-body">
                                      <SettingsInput
                                        inputId="customer_comment"
                                        labelFor="customer_comment"
                                        labelText="Add Preparation Note"
                                        name="customer_comment"
                                        type="text"
                                        value={row.customer_comment}
                                        onChange={(e) =>
                                          // setCustomerComment(e.target.value)
                                          (row.customer_comment =
                                            e.target.value)
                                        }
                                      />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        onClick={() => {
                                          addItemComment(
                                            row,
                                            row.customer_comment
                                          );
                                        }}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              {/* <i className="bi bi-pencil"></i> {row.name} */}
                              {row.name}
                            </td>
                            {/* <td>{row.name}</td> */}
                            <td>{row.Dine_price}</td>
                            <td className="text-center">
                              <button
                                className="qtyBtn"
                                onClick={() => decreaseQty(row)}
                                disabled={row.quantity === 1}
                              >
                                <img src={images.minus} alt="" />
                              </button>
                              <span>{row.quantity}</span>
                              <button
                                className="qtyBtn"
                                onClick={() => increaseQty(row)}
                              >
                                <img src={images.plus} alt="" />
                              </button>
                            </td>
                            <td>
                              <label htmlFor="discount"></label>
                              <input
                                id="discount"
                                placeholder="%"
                                className=" discountField text-center"
                                type="number"
                                step="0.01"
                                onChange={(e) =>
                                  addDiscount(
                                    row,
                                    e.target.value >= 100 ? 100 : e.target.value
                                  )
                                }
                              />
                            </td>

                            <td>{row.total.toFixed(2)}</td>
                            <td>
                              <img
                                onClick={() => deleteOrderItem(row)}
                                src={images.deleteItem}
                                alt=""
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              <div>
                <div className="p-2 d-flex justify-content-between align-items-center">
                  <button className="border border-0 p-2">Split Bill</button>
                  <p className="text-end m-0">
                    Total: {orderObj.total_order_price.toFixed(2)}
                  </p>
                </div>

                <div className="bg-light">
                  <div className="w-100 d-flex justify-content-between">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Cash
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Card
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Due
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Other
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Part
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" w-100 d-flex justify-content-evenly">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      It's Paid
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Loyalty
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Send Feedback SMS
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-between bottomBtnsDiv  py-2">
                  {/* <button type="button" className="w-100 saveBtns">
                    Save
                  </button> */}
                  <Settings_Button type="button" btnTxt="Save" />

                  <BillPDF ref={billRef} />

                  <Settings_Button
                    type="button"
                    onClick={() => {
                      handleBillPrint();
                      playSoundEffect();
                    }}
                    btnTxt="Save & Print"
                  />

                  <Settings_Button type="button" btnTxt="Save & eBill" />

                  <Settings_Button type="button" btnTxt="KOT" />

                  <KOT_Modal ref={kotRef} />

                  <Settings_Button
                    onClick={() => {
                      handlePrint();
                      placeOrder();
                    }}
                    type="button"
                    disabled={orderDetails.length <= 0}
                    btnTxt="KOT & Print"
                  />
                </div>
              </div>
            </div>

            {/* Right side div */}
            <div className="col-sm-12 col-md-12 col-lg-6 right order-sm-1 order-md-1 order-lg-1">
              <div className="mb-2 row mt-2 searchFilterDiv">
                <input
                  type="text"
                  className="mx-2 searchFilter form-control"
                  onChange={handleFilterInput}
                  placeholder="Search..."
                />
              </div>

              {/* RADIO GROUP */}
              <div className="my-2">
                <div className="form-check form-check-inline cursor-pointer">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="vegFilter"
                    id="inlineRadio1"
                    value="All"
                    checked={veg === "All"}
                    onChange={handleVeg}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    All
                  </label>
                </div>
                <div className="form-check form-check-inline cursor-pointer">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="vegFilter"
                    id="inlineRadio2"
                    value="Veg"
                    checked={veg === "Veg"}
                    onChange={handleVeg}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Veg
                  </label>
                </div>
                <div className="form-check form-check-inline cursor-pointer">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="vegFilter"
                    id="inlineRadio3"
                    value="Non-Veg"
                    checked={veg === "Non-Veg"}
                    onChange={handleVeg}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Non-Veg
                  </label>
                </div>
              </div>

              <div className="row g-1 rightMenuDiv">
                {/* CATEGORIES DIV */}

                <div className="col-2 d-flex flex-column categoryBtnDiv">
                  <button
                    type="button"
                    className="btn categoryBtn w-100"
                    onClick={() => setCategoryFilter("All")}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    All
                  </button>

                  {foodCategories?.foodCategory?.map((item, index) => (
                    <button
                      data-aos="zoom-out-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="1000"
                      key={index}
                      className="btn categoryBtn w-100"
                      onClick={() => setCategoryFilter(item?.name)}
                    >
                      <p title={item?.name} className="text-truncate p-0 m-0">
                        {item?.name}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="col-10">
                  <div className="row g-0 menuDiv">
                    {filteredData?.length == 0 ? (
                      <div>
                        <p
                          style={{
                            textAlign: "center",
                            color: "gray",
                            marginTop: "40px",
                          }}
                        >
                          Not Available!
                        </p>
                      </div>
                    ) : null}
                    {filteredData?.map((elem, index) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-4 col-xl-3 "
                        data-aos="flip-down"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="1000"
                        key={index}
                      >
                        <POS_Menu_Card
                          onClick={() => handleAddFoodMenu(elem)}
                          name={elem?.name}
                          price={elem?.Dine_price}
                          veg={elem?.isVeg}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default POS;
