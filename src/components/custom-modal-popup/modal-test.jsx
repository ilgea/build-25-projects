// Burası parent component olacak.
// butonu buraka koyacağız. buradan modal açılacak.
// modal'ı burada import edeceğiz demektir.

import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

// Bu projede fpnksiyon kısmı küçük, ama css kısmı büyük olacak.
// hem css'e hem de nasıl içerik eklendiğine bakılacak

const ModalTest = () => {
  // state'leri buradan yönetmek için, state'leri burada tanımlayıp modal'a props olarak göndeririz.

  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          body={<div>Customized body</div>}
          footer={<h2>Customized footer</h2>}
        />
      )}
    </div>
  );
};

export default ModalTest;
