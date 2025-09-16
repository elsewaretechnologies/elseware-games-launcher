// Hooks / Node modules / Styles
import { FormResponse, Info } from "elseware-ui";

// Reducers / Actions
import { useGetAllProductsQuery } from "../../../app/slices/api/product/productApiSlice";

// Utils / Functions

// Components

// Sub-Components
import ProductCard from "./ProductCard";
import ProductCardRow from "./ProductCardRow";

// Data / Images / Icons

function LatestProducts() {
  const { data, isLoading, isSuccess, isError, error } = useGetAllProductsQuery("productsList");

  return (
    <ProductCardRow isLoading={isLoading} title="Latest Products">
      {isLoading &&
        [0, 1, 2].map((sample, index) => {
          return <ProductCard key={index} isLoading={isLoading} />;
        })}

      {isSuccess && data.ids.length > 0
        ? data.ids.map((productId, index) => <ProductCard key={index} productId={productId} />)
        : isSuccess && <Info>No data to show</Info>}

      {isError && <FormResponse text={error?.data?.message || error?.message} variant="danger" />}
    </ProductCardRow>
  );
}

export default LatestProducts;
