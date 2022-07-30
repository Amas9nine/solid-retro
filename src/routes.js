import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const isAuth = useSelector((state) => state.user.id);
  return isAuth ? <Component /> : <Navigate to="/login" />;
};

export const PublicRoute = ({ Component }) => {
  const isAuth = useSelector((state) => state.user.id);
  return isAuth ? <Navigate to="/" /> : <Component />;
};
