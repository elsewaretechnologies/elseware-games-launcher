// Hooks / Node modules / Styles
import { Layout, Content, ContentArea } from "elseware-ui";

// Reducers / Actions

// Utils / Functions

// Components
import GenericLayout from "./GenericLayout";
import Sidebar from "../components/Sidebar";

// Sub-Components

// Data / Images / Icons

function DefaultLayout({ children }) {
  return (
    <GenericLayout>
      <Layout>
        <div className="flex h-screen text-white">
          <Sidebar />

          {/* Content */}
          <Content>
            <ContentArea styles="p-10">{children}</ContentArea>
          </Content>
        </div>
      </Layout>
    </GenericLayout>
  );
}

export default DefaultLayout;
