import { Asset, AssetLink } from 'contentful';
import Image from 'next/image';

export type ImageType = Asset<undefined, string> | { sys: AssetLink };

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function parseContentfulContentImage(asset: ImageType): ImageProps | null {
  if (!('fields' in asset)) {
    return null;
  }

  return {
    src: `https:${asset.fields.file?.url}` || '',
    alt: asset.fields.description || '',
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  };
}

type ContentImageProps = {
  image: ImageType;
};

export function ContentImage({ image }: ContentImageProps) {
  const imageProps = parseContentfulContentImage(image);

  if (!imageProps) {
    return null;
  }

  const { src, alt, width, height } = imageProps;

  return (
    <Image
      className='object-cover w-full h-56'
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
