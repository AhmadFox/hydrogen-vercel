import { useEffect, useRef, useState } from 'react';
import { Image } from '@shopify/hydrogen';
import type { Image as ShopifyImage } from '@shopify/hydrogen/storefront-api-types';

interface SmartImageProps {
	image?: {
		url?: string | null;
		altText?: string | null;
	} & Partial<ShopifyImage>;
	width?: number;
	height?: number;
	aspectRatio?: string;
	sizes?: string;
	className?: string;
	style?: React.CSSProperties;
	alt?: string;
	placeholder?: string;
}

export function SmartImage({
	image,
	width,
	height,
	aspectRatio = '1/1',
	sizes = `(max-width: 768px) 100vw, ${width}px`,
	className,
	style,
	alt,
	placeholder,
}: SmartImageProps) {

	const [loaded, setLoaded] = useState(false);
	const imgRef = useRef<HTMLImageElement | null>(null);

	const finalImage = image?.url
    ? image
    : {
        url: placeholder,
        altText: 'Image placeholder',
        width,
        height,
    };

	const imageUrl = finalImage.url ?? placeholder;
	const isCDN = imageUrl?.startsWith('http') || imageUrl?.startsWith('//');
	const placeholderUrl = isCDN
		? `${imageUrl}?width=20&height=20&quality=10&blur=50`
		: imageUrl;


	useEffect(() => {
		const img = imgRef.current;
		if (img && img.complete) {
			setLoaded(true);
		} else {
			img?.addEventListener('load', () => setLoaded(true));
		}
	}, []);

	return (
		<div
			style={{
				position: 'relative',
				overflow: 'hidden',
				backgroundColor: '#f3f3f3',
				...style,
			}}
			className={className}
		>
			{/* Placeholder blurred image */}
			{/* <img
				src={placeholderUrl}
				alt=""
				aria-hidden
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					filter: 'blur(10px)',
					position: 'absolute',
					top: 0,
					left: 0,
					transition: 'opacity 0.3s ease-in-out',
					opacity: loaded ? 0 : 1,
					zIndex: 1, // ← تأكد إن placeholder خلف الصورة الأصلية
				}}
			/> */}

			{/* Actual Hydrogen Image */}
			<Image
				ref={imgRef}
				alt={alt || finalImage.altText || ''}
				data={{
					...finalImage,
					width,
					height,
				}}
				width={width}
				height={height}
				sizes={sizes}
				aspectRatio={aspectRatio}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
					top: 0,
					left: 0,
					transition: 'opacity 0.3s ease-in-out',
					opacity: loaded ? 1 : 0,
					zIndex: 2, // ← تأكد إنها فوق الـ placeholder
				}}
			/>

		</div>
	);
}
