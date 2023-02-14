import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [option, setOption] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToast = {
      id: Math.random(),
      variant: option,
      message
    }
    setToasts((toasts) => [...toasts, newToast]);
    setOption(VARIANT_OPTIONS[0]);
    setMessage('');
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} />
      <form onSubmit={handleSubmit} >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => {
                const id = `variant-${variant}`;
                return (
                  <label htmlFor={id} key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={variant}
                      onChange={(event) => setOption(event.target.value)}
                      checked={variant === option}
                    />
                    {variant}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>

      </form>

    </div>
  );
}

export default ToastPlayground;
