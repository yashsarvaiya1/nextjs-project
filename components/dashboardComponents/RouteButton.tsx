"use client"
import { useRouter } from "next/navigation";
import { RouteItem } from "@/models/route";

interface Props{
    route: RouteItem
}

export default function RouteButton({route} : Props) {
    const router = useRouter()
    return (
        <button onClick={()=>router.push(route.path)} className="px-4 py-2 m-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            {route.name}
        </button>
    );
}