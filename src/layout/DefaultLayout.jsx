// Hooks / Node modules / Styles
import { Layout, Content, ContentArea } from "elseware-ui";

// Reducers / Actions

// Utils / Functions

// Components
import GenericLayout from "./GenericLayout";
import Sidebar from "../components/Sidebar";
import CustomHeader from "../components/custom-header/CustomHeader";

// Sub-Components

// Data / Images / Icons

function DefaultLayout({ children }) {
  return (
    <GenericLayout>
      <Layout>
        <div className="flex flex-row">
          <Sidebar />

          {/* Content */}
          <Content>
            <CustomHeader />
            <ContentArea>
              <div className="pl-[310px] pt-[80px]">{children}</div>
            </ContentArea>
          </Content>
        </div>
      </Layout>
    </GenericLayout>
  );
}

export default DefaultLayout;
