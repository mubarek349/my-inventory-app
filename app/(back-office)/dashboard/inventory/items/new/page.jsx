import NewItem from "@/components/dashboard/NewItem";
import React from "react";

export default async function Page() {
  const data = {};
  return <NewItem initialData={data} isUpdate={false}/>;
}
