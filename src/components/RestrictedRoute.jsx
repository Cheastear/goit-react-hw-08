import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ element: Component, redirectTo = "/", ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component {...rest} />;
};

RestrictedRoute.propTypes = {
  element: PropTypes.func,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
