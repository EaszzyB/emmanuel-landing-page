
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageBlockSlice>;


/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <PrismicNextImage
      field={slice.primary.image}
      imgixParams={{w: 600}} />
  );
};

export default Image;