import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/" /> : <Component {...rest} />;
};

RestrictedRoute.propTypes = {
  element: PropTypes.func,
};

export default RestrictedRoute;
