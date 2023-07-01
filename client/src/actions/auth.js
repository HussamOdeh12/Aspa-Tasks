import * as api from "../api/index.js";

//-------------------------------------------------------------------
//--- Sign In Action ---

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------
//--- Sign Up Action ---

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
