import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const DeliveryModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const DeliveryData = [
    {
      img: "https://www.shutterstock.com/image-illustration/3d-illustration-delivery-partner-riding-600w-2131453921.jpg",
      name: "new",
    },
    {
      img: "https://www.shutterstock.com/image-illustration/3d-illustration-delivery-partner-riding-600w-2131453921.jpg",
      name: "new",
    },
    {
      img: "https://www.shutterstock.com/image-illustration/3d-illustration-delivery-partner-riding-600w-2131453921.jpg",
      name: "new",
    },
    {
      img: "https://www.shutterstock.com/image-illustration/3d-illustration-delivery-partner-riding-600w-2131453921.jpg",
      name: "new",
    },
  ];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-3">
            {DeliveryData?.map((item, index) => (
              <div
                style={{ cursor: "pointer", border: "1px dotted gray" }}
                key={index}
              >
                <img
                  src={item.img}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeliveryModal;
