import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage";

import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

function App() {
  var dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={<PrivateRoute element={ContactsPage} redirectTo="/login" />}
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
