// Hooks / Node modules / Styles
import {
  Skeleton,
  PriceTag,
  Card,
  StarRating,
  useIsMobile,
} from "elseware-ui";
import classNames from "classnames";
import { Link } from "react-router-dom";

// Reducers / Actions
import { useGetAllProductsQuery } from "../../../app/slices/api/product/productApiSlice";

// Utils / Functions

// Components
import CloudinaryImage from "../../../components/CloudinaryImage";

// Sub-Components

// Data / Images / Icons

const truncateTitle = (title) => {
  if (title.length > 20) {
    return title.substring(0, 20) + "...";
  }
  return title;
};

function ProductCard({ isLoading, productId, currencyCode = "USD" }) {
  const isMobile = useIsMobile();

  const { product } = useGetAllProductsQuery("productsList", {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId],
    }),
  });

  if (isLoading) {
    return (
      <Skeleton
        styles={classNames({
          "h-[350px] w-[250px]": !isMobile,
          "h-[200px] w-full": isMobile,
        })}
      />
    );
  }

  if (product) {
    return (
      <Link to={`/products/${product.slug}`}>
        <Card
          styles={classNames({
            "grid h-fit eg-theme-card": true,
            "grid-cols-1 w-[250px]": !isMobile,
            "grid-cols-5 w-full": isMobile,
          })}
        >
          <div className="overflow-hidden col-span-2">
            <CloudinaryImage
              publicId={product.thumbnail}
              alt="image"
              styles="object-cover hover:scale-[1.02] transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-2 w-full px-3 pt-2 pb-3 ">
                <div className="text-xl text-gray-400 font-semibold">
                  {truncateTitle(product.title)}
                </div>
                {product.price && (
                  <PriceTag
                    discount={product.sale > 0 ? product.sale : null}
                    price={product.price}
                    code={currencyCode}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col items-end w-full bg-dark-700 p-2">
              <StarRating rating={product.averageRating} styles="text-[15px]" />
            </div>
          </div>
        </Card>
      </Link>
    );
  }
}

export default ProductCard;
