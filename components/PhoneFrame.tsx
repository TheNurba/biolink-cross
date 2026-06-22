import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/19] w-full overflow-hidden rounded-[2.2rem] border-[6px] border-black/80 bg-black shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="no-scrollbar h-full w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
