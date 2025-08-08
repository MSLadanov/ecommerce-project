import { IProduct } from "@/types/Products";
import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import { useCart } from "@hooks/useCart";
import { Button } from "@components/ui/Button";
import { FaDollarSign, FaHeartBroken, FaShoppingCart, FaTrash } from "react-icons/fa";
import { AddToCartButton } from "@components/AddToCartButton";
import { useWishlist } from "@hooks/useWishlist";
import { MdOutlineCancel } from "react-icons/md";
import { useOrderedProducts } from "@hooks/useOrderedProducts";
import "./style.scss";

interface ICartItem {
  product: IProduct;
  cartItemType: 'current-cart' | 'wishlist-cart' | 'current-order' | 'order-history'
}

export const CartItem: React.FC<ICartItem> = ({
  product,
  cartItemType
}): ReactElement => {
  const { removeAllProductsById, addToCart } = useCart((state) => state);
  const { removeFromWishlist } = useWishlist((state) => state);
  const { cancelOrderedProduct } = useOrderedProducts((state) => state)
  return (
    <Flex className="cart-item" justifyContent="space-between">
      <Flex className="cart-item__info" alignItems="align-center">
        <Flex className="cart-item__image">
          <a href={`/product?id=${product.id}`}>
            <img src={product.thumbnail} />
          </a>
        </Flex>
        <Flex className={"cart-item__description" + ' ' + cartItemType} flexDirection="column">
          <h1>{product.title}</h1>
          <Flex className="cart-item__price">
            <h3>
              {product.price} <FaDollarSign />
            </h3>
            <h4>
              {Math.round(
                product.price / (1 - product.discountPercentage / 100)
              )}{" "}
              <FaDollarSign />
            </h4>
          </Flex>
        </Flex>
      </Flex>
      {cartItemType === 'current-cart' && (
        <div className="cart-item__controls">
          <AddToCartButton productData={product}>
            <Button
              styleGuide="ozon"
              disabled={product.availabilityStatus === "Out of Stock"}
              onClickAction={() => addToCart(product)}
            >
              <FaShoppingCart />
              {product.availabilityStatus}
            </Button>
          </AddToCartButton>
          <Button
            onClickAction={() => removeAllProductsById(product)}
            styleGuide="wb"
          >
            <FaTrash />
          </Button>
        </div>
      )}
      {cartItemType === 'wishlist-cart' && (
        <div className="cart-item__controls">
          <Button
            onClickAction={() => removeFromWishlist(product.id)}
            styleGuide="wb"
          >
            <FaHeartBroken size="1.5rem" color="white" />
          </Button>
        </div>
      )}
      {cartItemType === 'current-order' && (
        <div className="cart-item__controls">
          <Button
            onClickAction={() => cancelOrderedProduct(product.id)}
            styleGuide="wb"
          >
            <MdOutlineCancel size="1.5rem" color="white" />
          </Button>
        </div>
      )}
    </Flex>
  );
};
