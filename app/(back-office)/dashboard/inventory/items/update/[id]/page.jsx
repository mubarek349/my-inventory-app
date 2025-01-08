import React from "react";
import { getData } from "@/lib/getData";
import NewItem from "@/components/dashboard/NewItem";

export default async function Update({  params }) {
  // Ensure params is destructured properly
  const { id } = await params;
  const data = await getData(`items/${id}`);
  if (!id) {
    return (
      <div>
        <h2>Update Form</h2>
        <p className="text-red-500">Category ID is missing or invalid.</p>
      </div>
    );
  }
  return <NewItem initialData={data} isUpdate={true}/>;
}
