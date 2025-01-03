import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

type ButtonVariant = "custom" | "default";
const Button = ({
  children,
  variant = "default",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    variant?: ButtonVariant;
  }) => {
  const styles = (variant: ButtonVariant) => {
    switch (variant) {
      case "custom":
        return `bg-black rounded-md text-white font-medium group flex w-full items-center justify-center py-3 gap-3 overflow-hidden relative`;
      default:
        return `bg-black`;
    }
  };
  return (
    <button className={styles(variant)} {...rest}>
      <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto h-full w-[0px] rounded-md bg-gray-400 text-white transition-all duration-500 ease-in-out group-hover:w-full" />
      <span className="group-hover:text-gray-100 z-20 mx-auto transition-all duration-500 ease-in-out">
        {children}
      </span>
    </button>
  );
};

export default Button;
