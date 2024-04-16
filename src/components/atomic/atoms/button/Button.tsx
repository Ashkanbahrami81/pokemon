import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, LegacyRef, forwardRef } from "react";

// Customized button variations
const buttonVariants = cva(`px-3 py-2 rounded-xl transition-all duration-300`, {
  variants: {
    variant: {
      primary: "bg-green-500 active:bg-green-400 hover:bg-green-400",
      danger: "bg-red-500",
      alert: "bg-yellow-500",
    },
    size: {
      small: "py-2 px-4",
      large: "text-xl py-3 px-6",
    },
  },
  defaultVariants: {
    size: "small",
    variant: "primary",
  },
});

// It is our ButtonProps interafce it extends ButtonHTMLAttributes of HTMLButtonElement interface
// Also extends from class-variance-authority lastly we passed our forwarded Reference type
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: LegacyRef<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = forwardRef(
  ({ size, variant, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonVariants({ className, variant, size }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
