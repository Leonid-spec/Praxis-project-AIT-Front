import React from "react";
import styles from "./confirmationDialog.module.css";

interface ConfirmationDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.confirmation}>
      <button onClick={onConfirm} className={styles.yesButton}>Yes</button>
      <button onClick={onCancel} className={styles.noButton}>No</button>
    </div>
  );
};

export default ConfirmationDialog;