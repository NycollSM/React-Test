import React from 'react';

 const Modal = ({ hideModal}) => (
  <div className="modal">
    <section className="modal-main">
      <div className="info-modal">
        <h3>Tarea creada</h3>
      </div>
    </section>
     <button className="btn-close-modal" onClick={hideModal}>close</button>
  </div>
);
export default Modal;