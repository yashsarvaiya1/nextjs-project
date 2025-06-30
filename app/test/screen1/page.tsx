export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full snap-y snap-mandatory overflow-auto scroll-smooth">
      <div className="min-h-full flex flex-col space-y-2 bg-red-100 snap-start text-3xl">
        {/* navbar */}
        <div className="flex items-center justify-between h-20 m-5 bg-red-400 p-5">
          <div className="text-4xl">Brand</div>
          <div className="flex space-x-5">
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
          </div>
          <div className="text-2xl">Profile</div>
        </div>

        <div className="bg-pink-300 m-5 h-full flex space-x-3">
          <div className="flex-1/5 bg-amber-300">yash</div>
          <div className="flex-4/5 bg-green-400">yash</div>
        </div>
      </div>
      <div className="min-h-full bg-cyan-300 snap-start flex items-center justify-center text-3xl">
        <div className="relative w-64 h-40 bg-gray-200 rounded-md p-4">
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </div>
          <h2 className="text-xl font-bold">Card Title</h2>
          <p className="text-gray-600">This is some card content.</p>
        </div>
      </div>
      <div className="min-h-full bg-cyan-300 snap-start flex items-center justify-center text-3xl">
        <div className="relative bg-green-100 p-10 w-64 h-32">
          <div className="absolute bottom-0 left-0 bg-black text-white px-2 py-1 text-sm rounded-tr">
            Footer Label
          </div>
        </div>
      </div>
      <div className="min-h-full bg-cyan-300 snap-start flex items-center justify-center text-3xl">
        <div className="w-72 h-96 bg-white rounded-xl shadow-lg overflow-hidden relative group perspective-1000">
          {/* Top half */}
          <div className="absolute top-0 left-0 w-full h-1/2 z-10 group-hover/card-top:rotate-x-6 transition-transform duration-300 origin-bottom group/card-top">
            <div className="h-full flex items-center justify-center bg-blue-200">
              <p className="text-lg font-semibold">Top Hover Zone</p>
            </div>
          </div>

          {/* Bottom half */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 group-hover/card-bottom:-rotate-x-6 transition-transform duration-300 origin-top group/card-bottom">
            <div className="h-full flex items-center justify-center bg-blue-400">
              <p className="text-lg font-semibold">Bottom Hover Zone</p>
            </div>
          </div>

          {/* Full background fallback */}
          <div className="absolute inset-0 bg-gray-100 z-0"></div>
        </div>
      </div>
      <div className="min-h-full bg-cyan-300 snap-start flex flex-col space-y-10 items-center justify-center text-3xl">
        <div className="w-64 h-40 bg-indigo-100 rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-bold">Hover Me</h2>
          <p className="text-sm text-gray-600">Zoom effect with shadow</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded transition duration-300 hover:translate-x-2 hover:bg-blue-700">
          Slide Right
        </button>
        <div className="w-20 h-20 bg-green-300 flex items-center justify-center rounded-full transition-transform duration-300 hover:rotate-45 hover:bg-red-400">
          🔄
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg transition active:scale-95">
          Press Me
        </button>
        <div className="transition bg-blue-300 ease-in-out duration-700 delay-200 hover:skew-y-4 hover:bg-red-100">
          Smooth Delayed Move
        </div>
      </div>
    </div>
  );
}
