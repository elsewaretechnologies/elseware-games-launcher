// Hooks / Node modules / Styles
import { Flex } from "elseware-ui";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components
import TitleBar from "../../../components/TitleBar";

// Data / Images / Icons

function ProductCardRow({ title, children }) {
  return (
    <div>
      <div className="my-3">
        <TitleBar
          level={3}
          overrideTitle="Latest Products"
          styles="text-secondary-800 border-l-secondary-800"
        />
        <Flex.FlexRow gap={10} styles="flex-wrap py-3">
          {children}
        </Flex.FlexRow>
      </div>
    </div>
  );
}

export default ProductCardRow;
