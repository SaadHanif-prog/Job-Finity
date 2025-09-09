// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import {
 // Navigate,
 Outlet,
 // useLocation
} from "react-router-dom";

const AuthGuard = () => {
 // const { token } = useSelector((state: RootState) => state.auth);
 // const { pathname } = useLocation();

 // if (!token) {
 //  return (
 //   <Navigate
 //    to={`/login${pathname !== "/" || (pathname as string) !== "/login" ? "/?callbackUrl=" + pathname : ""}`}
 //    replace
 //   />
 //  );
 // }

 return <Outlet />;
};

export default AuthGuard;
