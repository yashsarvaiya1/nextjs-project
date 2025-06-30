import { User2Icon } from "lucide-react";
import { routeMap } from "@/models/route";
import RouteButton from "@/components/dashboardComponents/RouteButton";

export default function DashBoard() {
  return (
    <div className="h-screen w-full bg-gray-300 ">
      <div className="h-screen w-full flex flex-col">
        <div className="flex-1/12 bg-cyan-200 flex items-center justify-between p-5">
          <div className="text-4xl font-black">Brand</div>
          <div className="flex space-x-5">
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
          </div>
          <div className=" rounded-full border-2 border-black p-2">
            <User2Icon className="w-8 h-8" />
          </div>
        </div>
        <div className="flex-10/12 bg-red-200 flex">
          <div className="bg-red-50 flex-1/6 flex flex-col">
            {/* title */}
            <div className="flex-shrink bg-red-400 p-5 w-full">
              Sidebar Title
            </div>
            {/* items */}
            <div className="flex-grow bg-green-400">
              <div>item1</div>
              <div>item1</div>
              <div>item1</div>
              <div>item1</div>
              <div>item1</div>
            </div>
          </div>
          <div className="bg-green-50 flex-5/6">
            {routeMap.map((item) => (
              <RouteButton key={item.path} route={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
