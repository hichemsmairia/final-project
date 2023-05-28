import { createAsyncThunk, createSlice,createAction  } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: {},
  userToken: null,
  error: null,
  msg: "",
  success: false,
};

export const signup = createAsyncThunk("signup", async (body) => {
  const res = await axios.post("http://localhost:5000/auth/register", body);
  return res.data;
});

export const signin = createAsyncThunk("signin", async (body) => {
  const res = await axios.post("http://localhost:5000/auth/login", body);
  return res.data;
});

export const logout = createAction("logout");


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, { payload: { error, msg } }) => {
        if (error) {
          return {
            ...initialState, 
            error,
          
          };
        } else {
          return {
             ...initialState,
            msg : msg,
            success: true,
            error: null,
          };
        }
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = "le backend est bloqué";
      })
      .addCase(signin.fulfilled, (state, { payload: { error, msg, token, user } }) => {
        if (error) {
          state.error = error;
        } else {
          state.error = null;
          state.success = true;
          state.msg = msg;
          state.userInfo = user;
          state.userToken = token;
          localStorage.setItem("token", token);
          localStorage.setItem("userInfo", JSON.stringify(user));
        }
      })
      .addCase(signin.rejected, (state, action) => {
        state.error = "erreur";
      })
       .addCase(logout, (state) => {
        localStorage.clear()
        return initialState;
      });
  },
});

export default authSlice.reducer;