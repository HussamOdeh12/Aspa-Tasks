import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Toast Container imported in ApplyCards file.

//-------------------------------------------------------------------
//--- post notify ---

export const successNotify = () => {
  toast.success("Card successfully modified", {
    position: "top-left",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

//-------------------------------------------------------------------
//--- clear form notify ---

export const clearNotify = () => {
  toast.warn("Form is cleared", {
    position: "top-left",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

//-------------------------------------------------------------------
//--- edit card notify ---

export const editNotify = () => {
  toast.info("Check the form now !!", {
    position: "top-left",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

//-------------------------------------------------------------------
//--- delete card notify ---

export const deleteNotify = () => {
  toast.error("Card successfully deleted", {
    position: "top-left",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
