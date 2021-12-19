import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// const PrivateRoute = ({ children, ...rest }) => {
//   const { user, isLoading } = useAuth();
//   if (isLoading) {
//   }
//   return (
//     <Routes>
//       <Route
//         {...rest}
//         render={({ location }) =>
//           user?.email ? (
//             children
//           ) : (
//             <Navigate
//               to={{
//                 pathname: "/login",
//                 state: { from: location },
//               }}
//             />
//           )
//         }
//       />
//     </Routes>
//   );
// };

// export default PrivateRoute;
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  // const isAuthenticated = true;

  if (user.email) {
    return children;
  }

  return ({ location }) =>
    user?.email ? (
      children
    ) : (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
};

export default PrivateRoute;
