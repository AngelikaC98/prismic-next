import { JSX } from "react";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="lg">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl font-normal leading-6.5 font-body text-slate-600 mb-4  max-w-md">
      {children}
    </p>
  ),
};
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <div className="bg-stone-100 p-6">
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="py-4">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <div className="py-6 w-62">
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
            </div>
            <div className="text-xl max-w-md text-gray-600 font-display text-right">
              {slice.primary.author}
            </div>
          </div>

          <PrismicNextImage
            field={slice.primary.image}
            className="drop-shadow-xl max-w-full rounded-lg"
          />
        </div>
      </Bounded>
    </div>
  );
};

export default Hero;
