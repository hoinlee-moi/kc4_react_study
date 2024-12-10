import { Route, Routes } from "react-router";
import App from "./App";
import { Signin } from "./pages/Signin";
import { Todos } from "./pages/Todos";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/todo" element={<Todos />}></Route>
    </Routes>
  );
};
