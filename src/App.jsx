import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import PersistLogin from "./components/auth/PersistLogin";
import RequireAuth from "./components/auth/RequireAuth";

import { ROUTE_TYPE, ROLES } from "./data/enums";

import { routes } from "./data/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {routes.map((route, index) => {
          if (route.type === ROUTE_TYPE.Public) {
            return (
              route.element && (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          }
        })}

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          {routes.map((route, index) => {
            if (route.type === ROUTE_TYPE.Protected) {
              return (
                route.element && (
                  <Route
                    key={index}
                    element={
                      <RequireAuth
                        allowedRoles={
                          route.allowedRoles
                            ? route.allowedRoles // if roles specified, apply the role based routing
                            : [...Object.values(ROLES)] // else, enable route for all roles
                        }
                      />
                    }
                  >
                    <Route
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      element={<route.element />}
                    />
                  </Route>
                )
              );
            }
          })}
        </Route>

        {/* Any Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
