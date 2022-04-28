import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { EditProfile } from "../pages/EditProfile";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/signin" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/editprofile" element={<EditProfile />} />
  </Routes>
);
