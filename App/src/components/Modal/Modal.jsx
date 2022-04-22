import ReactDOM from "react-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.css";
import { modalVrWrapper, modalInnerVariants } from "./modalanimation";

function Modal({ children, state, ...rest }) {
  return ReactDOM.createPortal(
    state && <ModalInner {...rest}>{children}</ModalInner>,
    document.getElementById("modal-root")
  );
}

export default Modal;

function ModalInner({ children, onClose }) {
  const escHandler = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.document.addEventListener("keydown", escHandler);

    return () => {
      window.document.removeEventListener("keydown", escHandler);
    };
  }, []);

  return (
    <motion.div
      variants={modalVrWrapper}
      initial="start"
      animate="show"
      className={styles.wrapper}
    >
      <motion.div
        variants={modalInnerVariants}
        initial="start"
        animate="show"
        className={styles.inner}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
