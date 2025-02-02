import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        " font-bold font-display text-slate-700",
        size === "xl" && "text-2xl md:text-7xl",
        size === "lg" && "text-2xl md:text-5xl",
        size === "md" && "text-xl md:text-4xl",
        size === "sm" && "text-xl md:text-3xl"
      )}
    >
      {children}
    </Comp>
  );
}
