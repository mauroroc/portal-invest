import { Button, Modal } from "react-bootstrap";

export function ModalConfirm({ show, onHide, onConfirm, 
                               title='Confirma esse operação?', 
                               content='Essa ação não possui volta', 
                               cancelLabel='Cancelar', 
                               confirmLabel='Confirmar' }) {
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            {cancelLabel}
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
