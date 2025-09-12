// Hooks / Node modules / Styles
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../../utils/hooks/authentication/useAuth";

// Reducers / Actions
import { setCredentials } from "../../app/slices/authSlice";

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons
const authURL = import.meta.env.VITE_CLIENT_AUTH;

function RequireAuth({ allowedRoles }) {
  const dispatch = useDispatch();

  // Extract token from URL query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const accessToken = queryParams.get("accessToken");

  if (accessToken) {
    // Save token to localStorage
    dispatch(setCredentials({ accessToken }));

    // Optionally, you can also remove the token from the URL to avoid exposing it
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  const { roles } = useAuth();

  // Check if the user has the necessary roles to access the route
  const isAuthorized = roles.some((role) => allowedRoles.includes(role));

  // Full current page URL (used for redirect_uri)
  const currentUrl = window.location.href;
  const loginURL = `${authURL}/login?redirect_uri=${encodeURIComponent(
    currentUrl
  )}`;

  useEffect(() => {
    if (!isAuthorized) {
      // If not authorized, redirect to external auth page
      window.location.replace(loginURL);
    }
  }, [isAuthorized, loginURL]);

  // If the user is authorized, render the requested route
  return isAuthorized ? <Outlet /> : null;
}

export default RequireAuth;
