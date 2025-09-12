// Hooks / Node modules / Styles
import { useNavigate } from "react-router-dom";
import { Button } from "elseware-ui";
import useAuth from "../../utils/hooks/authentication/useAuth";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components
import LoggedUserSection from "./_com/LoggerUserSection";

// Data / Images / Icons

function CustomHeader() {
  const navigate = useNavigate();

  // Authentication Related
  const { id } = useAuth();

  return (
    <div
      className="right-0 fixed z-10 px-3 py-3 bg-primary-500 border-b border-b-secondary-800/60"
      style={{ width: "calc(100vw - 300px)" }}
    >
      <div className="flex flex-row items-center justify-between text-gray-500">
        <div>Support</div>
        <div>
          {!id ? (
            <Button
              text="Login"
              variant="success"
              shape="softRoundedSquare"
              onClick={() => navigate("/login")}
            />
          ) : (
            <LoggedUserSection />
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomHeader;
