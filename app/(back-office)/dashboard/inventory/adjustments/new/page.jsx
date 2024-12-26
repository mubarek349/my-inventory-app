"use client";
import { useEffect, useState } from "react";
import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";

export default function NewAdjustments() {
  const [items, setItems] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsData, warehousesData] = await Promise.all([
          getData("items"),
          getData("warehouse"),
        ]);
        setItems(itemsData);
        setWarehouses(warehousesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AdjustmentForm items={items} warehouses={warehouses} />;
}
