// Hooks / Node modules / Styles

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components
import AppUser from "./_com/AppUser";

// Data / Images / Icons

function CustomHeader() {
  return (
    <div
      className="right-0 fixed z-10 px-3 py-3 bg-primary-500 border-b border-b-secondary-800/60"
      style={{ width: "calc(100vw - 300px)" }}
    >
      <div className="flex flex-row items-center justify-between">
        <div>
          <div>Support</div>
        </div>
        <AppUser />
      </div>
    </div>
  );
}

export default CustomHeader;
