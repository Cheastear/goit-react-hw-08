import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ element: Component, redirectTo = "/", ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Component {...rest} /> : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  element: PropTypes.func,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
