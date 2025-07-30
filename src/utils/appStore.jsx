import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import userReducer from "./userSlice";

const appStore = configureStore({ reducer: { user: userReducer } });

export default appStore;
