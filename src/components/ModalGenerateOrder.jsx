import { Modal } from "react-bootstrap";
import FormGenerateOrder from "./FormGenerateOrder";

const ModalGenerateOrder = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Generar orden de compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <FormGenerateOrder />
      </Modal.Body>
    </Modal>
  );
};

export default ModalGenerateOrder;
