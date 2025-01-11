"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default function Brands() {
    const [brands, setBrands] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBrands() {
            try {
                const data = await getData("brands");
                setBrands(data);
            } catch (err) {
                console.error("Error fetching brands:", err);
                setError("Failed to load brands. Please try again later.");
            }
        }

        fetchBrands();
    }, []);

    const columns = ["title","createdAt","updatedAt"];

    return (
        <div>
            {/* Header */}
            <FixedHeader title="Brands" newLink="/dashboard/inventory/brands/new" />

            {error ? (
                <div className="my-4 p-8 text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <div className="my-4 p-8">
                    <DataTable data={brands} columns={columns} resourceTitle="brands" />
                </div>
            )}
        </div>
    );
}
