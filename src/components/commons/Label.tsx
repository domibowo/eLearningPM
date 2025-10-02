"use client";

import * as React from "react";
import { cn } from "../../utils/utils";
import { Label } from "radix-ui";

const LabelRoot = Label.Root
function RadixLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelRoot>) {
  return (
    <LabelRoot
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { RadixLabel };
