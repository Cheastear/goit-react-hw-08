import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.func,
};

export default PrivateRoute;
