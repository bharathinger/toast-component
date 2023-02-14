import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  if (toasts.length === 0) return;
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map(({ id, variant, message }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <VisuallyHidden >
              {variant}
            </VisuallyHidden>
            <Toast variant={variant} id={id}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
