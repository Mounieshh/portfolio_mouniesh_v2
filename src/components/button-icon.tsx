import { JSX } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { UrlObject } from "url";

type Variant = "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
type Size = "default" | "sm" | "lg" | "icon";

type ButtonProps = {
  label?: string;
  icon?: JSX.Element;
  variant?: Variant;
  size?: Size;
  href?: string | UrlObject;
};

export const ButtonC = ({ label, icon, variant, size, href }: ButtonProps) => {
  const content = (
    <Button variant={variant} size={size} className="border-black rounded-md shadow-[2px_2px_0_0_#200]">
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </div>
    </Button>
  );

  return href ? <Link href={href} target="_blank">{content}</Link> : content;
};
