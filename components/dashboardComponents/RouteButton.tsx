"use client";
import { useRouter } from "next/navigation";
import { RouteItem } from "@/models/route";

interface Props {
  route: RouteItem;
}

export default function RouteButton({ route }: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(route.path)}
      className="text-2xl font-mono "
    >
      <div className="h-40 w-64 bg-white border-2 border-black shadow-2xl flex items-center justify-center transition duration-150 hover:scale-105">
        {route.name}
      </div>
    </button>
  );
}
