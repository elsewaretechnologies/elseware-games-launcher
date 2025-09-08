// Hooks / Node modules / Styles
import { ThemeProvider } from "elseware-ui";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons

function GenericLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div>{children}</div>
    </ThemeProvider>
  );
}

export default GenericLayout;
