// Hooks / Node modules / Styles
import { Outlet, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import usePersist from "../../utils/hooks/authentication/usePersist";
import { useRefreshMutation } from "../../app/slices/api/authApiSlice";

// Reducers / Actions
import { selectCurrentToken } from "../../app/slices/authSlice";

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons
import { AiOutlineLoading } from "react-icons/ai";

const env = import.meta.env.VITE_NODE_ENV;

function PersistLogin() {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRun = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] = useRefreshMutation();

  // CHANGE THIS AT THE PRODUCTION LEVEL
  let forceRun = true;

  useEffect(() => {
    if (effectRun.current === true || env !== "development" || forceRun) {
      const verifyRefreshToken = async () => {
        console.log("Verifying refresh token");

        try {
          await refresh();

          setTrueSuccess(true);
        } catch (error) {
          console.log(error);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => (effectRun.current = true);
  }, []);

  let content;

  if (!persist) {
    // persist: no
    console.log("No persist");
    content = <Outlet />;
  } else if (isLoading) {
    // persist: yes, token: no
    console.log("Loading");
    content = <AiOutlineLoading className="animate-spin" />;
  } else if (isError) {
    // persist: yes, token: no
    console.log("Error");
    content = (
      <div className="text-red-500">
        {`${error?.data?.message} - `}
        <Link to="/login">Please login again</Link>
      </div>
    );
  } else if (isSuccess && trueSuccess) {
    // persist: yes, token: yes
    console.log("Success");
    content = <Outlet />;
  } else if (token && isUninitialized) {
    // persist: yes, token: yes
    console.log("Token and Uninitialized");
    console.log(isUninitialized);
    content = <Outlet />;
  }

  return content;
}

export default PersistLogin;
