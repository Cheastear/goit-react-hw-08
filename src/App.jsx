import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage";

import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

import { refresh } from "./redux/auth/operations";
import { fetchContacts } from "./redux/contacts/operations";

function App() {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
    dispatch(fetchContacts());
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={<PrivateRoute element={ContactsPage} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute element={RegistrationPage} />}
        />
        <Route path="login" element={<RestrictedRoute element={LoginPage} />} />
      </Route>
    </Routes>
  );
}

export default App;
