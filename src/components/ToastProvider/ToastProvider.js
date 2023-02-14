import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);
  const resetToasts = React.useCallback(() => {
    setToasts([]);
  }, [])
  return (
    <ToastContext.Provider value={{ toasts, setToasts, resetToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
