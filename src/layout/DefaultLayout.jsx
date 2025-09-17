// Hooks / Node modules / Styles
import { Layout, Content, ContentArea } from "elseware-ui";

// Reducers / Actions

// Utils / Functions

// Components
import GenericLayout from "./GenericLayout";
import CustomSidebar from "../components/custom-sidebar/CustomSidebar";
import CustomHeader from "../components/custom-header/CustomHeader";

// Sub-Components

// Data / Images / Icons

function DefaultLayout({ children }) {
  return (
    <GenericLayout>
      <Layout>
        <div className="flex flex-row">
          <CustomSidebar />

          {/* Content */}
          <Content>
            <CustomHeader />
            <ContentArea>
              <div className="pl-[300px] pt-[70px] pb-[100px]">{children}</div>
            </ContentArea>
          </Content>
        </div>
      </Layout>
    </GenericLayout>
  );
}

export default DefaultLayout;
