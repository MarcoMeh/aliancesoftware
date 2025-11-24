import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  lqip?: string; // optional tiny placeholder data URL
};

export default function OptimizedImage({ src, alt, className, lqip, ...rest }: Props) {
  // derive a .webp variant for browsers that support it (works if file exists)
  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <picture className="block">
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        style={lqip ? { backgroundImage: `url(${lqip})`, backgroundSize: 'cover' } : undefined}
        {...rest}
      />
    </picture>
  );
}
