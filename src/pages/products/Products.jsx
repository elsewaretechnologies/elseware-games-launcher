// Hooks / Node modules / Styles

// Reducers / Actions

// Utils / Functions

// Components
import DefaultLayout from "../../layout/DefaultLayout";
import TitleBar from "../../components/TitleBar";

// Sub-Components
import LatestProducts from "./_com/LatestProducts";

// Data / Images / Icons

export default function Products() {
  return (
    <DefaultLayout>
      <TitleBar level={2} />
      <LatestProducts />
    </DefaultLayout>
  );
}
