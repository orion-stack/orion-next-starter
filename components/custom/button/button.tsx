import { Button as ShadcnButton } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import styles from "./button.module.scss";

export const Button = ({ className, ...props }: ButtonProps) => {
  const combinedClassName =
    `${styles["custom-button"]} ${className || ""}`.trim();

  return <ShadcnButton className={combinedClassName} {...props} />;
};
