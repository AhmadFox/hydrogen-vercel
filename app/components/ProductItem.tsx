import {Link } from 'react-router';
import {Money} from '@shopify/hydrogen';
import type {
  ProductItemFragment,
  CollectionItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';
import { SmartImage } from './SmartImage';
import { TransitionLink } from './TransitionLink';

export function ProductItem({
  product,
  loading,
}: {
  product:
    | CollectionItemFragment
    | ProductItemFragment
    | RecommendedProductFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;

  return (
    <Link
      className="product-item"
      key={product.id}
      to={variantUrl}
      viewTransition
      prefetch="intent"
      style={{ viewTransitionName: `product-${product.id}` }}
    >
      <SmartImage
          image={image ?? undefined}
          placeholder="placeholder_product.png"
          width={319}
          height={319}
          aspectRatio='1/1'
          alt={image?.altText || `Product ${product.title} feature image`}
          className="rounded-md mb-2 aspect-square"
          style={{ viewTransitionName: `product-${product.id}` }}
        />
      <div>{product.title}</div>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
    </Link>
  );
}
