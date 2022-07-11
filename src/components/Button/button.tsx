import styles from "./button.module.css";
import cn from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary";
  label: string;
  href?: string;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  label,
  href,
  children,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    [styles["-button--primary"]]: variant === "primary",
    [styles["-button--secondary"]]: variant === "secondary",
  };

  return (
    <a
      href={href}
      type="button"
      className={cn(styles["-button"], variantClasses)}
      {...props}
    >
      {label}
      {children}
    </a>
  );
};
