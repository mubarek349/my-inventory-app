"use client";
import { useEffect, useState } from "react";
import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";

export default function NewAdjustments() {
  const [items, setItems] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsData, warehousesData,suppliersData] = await Promise.all([
          getData("items"),
          getData("warehouse"),
          getData("suppliers"),
        ]);
        setItems(itemsData);
        setWarehouses(warehousesData);
        setSuppliers(suppliersData);
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

  return <AdjustmentForm items={items} warehouses={warehouses} suppliers={suppliers} />;
}
