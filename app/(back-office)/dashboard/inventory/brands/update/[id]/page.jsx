import React from "react";
import NewBrand from "../../new/page";
import { getData } from "@/lib/getData";


export default async function Update({  params }) {
  // Ensure params is destructured properly
  const { id } = await params;
  const data = await getData(`brands/${id}`);
  if (!id) {
    return (
      <div>
        <h2>Update Form</h2>
        <p className="text-red-500">Brand ID is missing or invalid.</p>
      </div>
    );
  }

  return <NewBrand isUpdate={true} initialData={data}/>;
}
