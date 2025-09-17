// Hooks / Node modules / Styles
import { Layout, Content, ContentArea } from "elseware-ui";

// Reducers / Actions

// Utils / Functions

// Components
import GenericLayout from "./GenericLayout";

// Sub-Components

// Data / Images / Icons

function FocusedLayout({ children }) {
  return (
    <GenericLayout>
      <Layout>
        {/* Content */}
        <Content styles="flex justify-center items-center h-screen">
          <div>{children}</div>
        </Content>
      </Layout>
    </GenericLayout>
  );
}

export default FocusedLayout;
