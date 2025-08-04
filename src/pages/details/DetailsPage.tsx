import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4">{details.name}</h1>
      <div>
        <h3 className="text-lg font-bold my-4">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{details.description}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold my-4">License</h3>
        <div className="p-3 bg-gray-200 rounded">{details.license}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold my-4">Author</h3>
        <div className="p-3 bg-gray-200 rounded">{details.author?.name}</div>
      </div>
    </div>
  );
}
