"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default function Warehouse() {
    const [warehouses, setWarehouses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchWarehouses() {
            try {
                const data = await getData("warehouse");
                setWarehouses(data);
            } catch (err) {
                console.error("Error fetching Warehouses:", err);
                setError("Failed to load Warehouses. Please try again later.");
            }
        }

        fetchWarehouses();
    }, []);

   const columns=["title","location","warehouseType"];
    

    return (
        <div>
            {/* Header */}
            <FixedHeader title="Warehouses" newLink="/dashboard/inventory/warehouse/new" />

            {error ? (
                <div className="my-4 p-8 text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <div className="my-4 p-8">
                    <DataTable data={warehouses} columns={columns} resourceTitle="warehouse" />
                </div>
            )}
        </div>
    );
}