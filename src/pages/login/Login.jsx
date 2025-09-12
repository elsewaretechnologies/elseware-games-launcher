// Hooks / Node modules / Styles
import {
  Flex,
  Form,
  FormResponse,
  Input,
  Button,
  useIsMobile,
} from "elseware-ui";
import { NavLink, useLocation } from "react-router-dom";
import * as Yup from "yup";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

// Reducers / Actions
import { useLoginMutation, useGoogleLoginMutation } from "../../app/slices/api/authApiSlice";
import { setCredentials } from "../../app/slices/authSlice";

// Utils / Functions
import { buildURL, getRedirectURL } from "../../utils/helpers/url";

// Components
import FocusedLayout from "../../layout/FocusedLayout";

// Sub-Components
import FormHeader from "../../components/form/FormHeader";
import FormWrapper from "../../components/form/FormWrapper";

// Data / Images / Icons

function Login() {
  const isMobile = useIsMobile();

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const location = useLocation(); // Get location
  const messages = location.state?.messages || []; // Get optional messages

  const redirectUri = getRedirectURL();

  const [login, { isLoading }] = useLoginMutation();
  const [googleLogin] = useGoogleLoginMutation();

  // Initial values
  const initialValues = {
    email: "",
    password: "",
  };

  // Validation Schema
  const loginValidation = Yup.object({
    email: Yup.string().required("Username or Email is required").max(100),
    password: Yup.string().required("Password is required"),
  });

  // Submit form
  const onSubmit = async (values) => {
    try {
      setError("");
      const { accessToken } = await login(values).unwrap();

      dispatch(setCredentials({ accessToken }));

      // Redirect to the `redirect_uri` after successful login
      window.location.href = `${redirectUri}?accessToken=${accessToken}`;
    } catch (error) {
      setError(error?.data?.message || error.error);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const { email, name, sub: googleId, picture: avatar } = decoded;

    const values = { email, name, googleId, avatar };

    try {
      setError("");
      const { accessToken } = await googleLogin(values).unwrap();

      dispatch(setCredentials({ accessToken }));

      // Redirect to the `redirect_uri` after successful login
      window.location.href = `${redirectUri}?accessToken=${accessToken}`;
    } catch (error) {
      setError(error?.data?.message || error.error);
    }
  };

  return (
    <FocusedLayout>
      <div className="flex flex-col items-center justify-center gap-3">
        {/* Top */}
        <FormWrapper>
          <FormHeader />

          <div className="w-full">
            <Form
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={loginValidation}
              onSubmit={onSubmit}
            >
              {/* Render each message from the list */}
              {messages.length > 0 && (
                <div className="pb-4 flex flex-col gap-3">
                  {messages.map((msg, index) => (
                    <FormResponse key={index} text={msg} variant="warning" />
                  ))}
                </div>
              )}

              <div className="pb-4">
                <FormResponse text={error} variant="danger" />
              </div>

              <Flex.FlexCol gap={3}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email or Username"
                />
                <Input type="password" name="password" placeholder="Password" />

                <NavLink to={buildURL("forgot-password")}>
                  <div
                    className={classNames({
                      "text-sm font-semibold text-secondary-700/80 hover:text-secondary-700 eg-theme-transition": true,
                    })}
                  >
                    Forgot Password?
                  </div>
                </NavLink>

                <Button
                  type="submit"
                  text="OK"
                  variant="success"
                  shape="roundedSquare"
                  size="lg"
                  styles="mt-5"
                  loading={isLoading}
                />
              </Flex.FlexCol>
            </Form>
          </div>
        </FormWrapper>

        <FormWrapper>
          <div className="flex items-center w-full gap-3 pb-5">
            <div className="flex-1 h-px bg-gray-500" />
            <span className="text-sm text-gray-500 whitespace-nowrap">
              or sign in with
            </span>
            <div className="flex-1 h-px bg-gray-500" />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Google login failed")}
            />
          </div>
        </FormWrapper>

        {/* Bottom */}
        <FormWrapper>
          <Flex.FlexRow gap={3}>
            <p className="text-gray-300">Don't have an account? </p>
            <NavLink to={buildURL("signup")}>
              <span className="text-secondary-700/80 hover:text-secondary-700 eg-theme-transition font-semibold cursor-pointer">
                Signup
              </span>
            </NavLink>
          </Flex.FlexRow>
        </FormWrapper>
      </div>
    </FocusedLayout>
  );
}

export default Login;
