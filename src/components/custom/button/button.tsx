import { Button as ShadcnButton } from "@/components/ui/button";
import styles from "./button.module.scss";

type ButtonProps = React.ComponentProps<typeof ShadcnButton>;

export const Button = ({ className, ...props }: ButtonProps) => {
  const combinedClassName =
    `${styles["custom-button"]} ${className || ""}`.trim();

  return <ShadcnButton className={combinedClassName} {...props} />;
};
