"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default function Units() {
    const [units, setUnits] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUnits() {
            try {
                const data = await getData("units");
                setUnits(data);
            } catch (err) {
                console.error("Error fetching Units:", err);
                setError("Failed to load Units. Please try again later.");
            }
        }

        fetchUnits();
    }, []);

    const columns = ["title", "abbreviation"];

    return (
        <div>
            {/* Header */}
            <FixedHeader title="Units" newLink="/dashboard/inventory/units/new" />

            {error ? (
                <div className="my-4 p-8 text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <div className="my-4 p-8">
                    <DataTable data={units} columns={columns} resourceTitle="units" />
                </div>
            )}
        </div>
    );
}
