"use client";
import { useEffect, useState } from "react";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default function Items() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            try {
                const data = await getData("items");
                setItems(data);
            } catch (err) {
                console.error("Error fetching items:", err);
                setError("Failed to load items. Please try again later.");
            }
        }

        fetchItems();
    }, []);

    const columns = ["imageUrl","title", "sellingPrice"];

    return (
        <div>
            {/* Header */}
            <FixedHeader title="Items" newLink="/dashboard/inventory/items/new" />

            {error ? (
                <div className="my-4 p-8 text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <div className="my-4 p-8">
                    <DataTable data={items} columns={columns} resourceTitle="items" />
                </div>
            )}
        </div>
    );
}
