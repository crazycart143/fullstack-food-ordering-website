import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("w-full max-w-screen-xl", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
