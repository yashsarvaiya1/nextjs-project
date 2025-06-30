"use client";
import { useQuery } from "@tanstack/react-query";
import { getCatFact } from "@/services/catservice/catservice";

export default function CatComponent() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat-fact"],
    queryFn: getCatFact,
  });

  return (
    <div className="p-6 rounded shadow bg-white w-full max-w-md">
      <div className="text-lg font-semibold mb-2">Cat Fact</div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading fact</p>}

      {data && (
        <>
          <p className="mb-4">{data.fact}</p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Refresh
          </button>
        </>
      )}
    </div>
  );
}
