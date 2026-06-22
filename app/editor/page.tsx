import { Suspense } from "react";
import EditorClient from "./EditorClient";

export default function EditorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-white/50">
          Жүктөлүүдө…
        </div>
      }
    >
      <EditorClient />
    </Suspense>
  );
}
