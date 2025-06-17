import type {ProductVariantFragment} from 'storefrontapi.generated';
import {Image} from '@shopify/hydrogen';
import { SmartImage } from './SmartImage';

export function ProductImage({
  image,
  title,
}: {
  image: ProductVariantFragment['image'];
  title: string;
}) {
  if (!image) {
    return <div className="product-image" />;
  }
  return (
    <div className="product-image">
      <SmartImage
        image={image ?? undefined}
        placeholder="placeholder_product.png"
        width={350}
        height={350}
        aspectRatio='1/1'
        alt={image?.altText || `Product ${title} feature image`}
        className="rounded-md mb-2 aspect-square"
      />
    </div>
  );
}
