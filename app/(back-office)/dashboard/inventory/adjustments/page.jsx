"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default function Adjustments() {
    const [addAdjustments, setAddAdjustments] = useState([]);
    const [transferAdjustments, setTransferAdjustments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAdjustments() {
            try {
                const [addData, transferData] = await Promise.all([
                    getData("adjustments/add"),
                    getData("adjustments/transfer"),
                ]);

                setAddAdjustments(addData);
                setTransferAdjustments(transferData);
            } catch (err) {
                console.error("Error fetching adjustments data:", err);
                setError("Failed to load adjustments. Please try again later.");
            }
        }

        fetchAdjustments();
    }, []);

    const addColumns = ["referenceNumber", "addStockQty"];
    const transferColumns = ["referenceNumber", "transferStockQty"];

    return (
        <div>
            {/* Header */}
            <FixedHeader title="Adjustments" newLink="/dashboard/inventory/adjustments/new" />

            {error ? (
                <div className="my-4 p-8 text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <>
                    {/* Stock Increment Adjustments Table */}
                    <div className="my-4 p-8">
                        <h2 className="py-4 text-xl font-semibold">Stock Increment Adjustments</h2>
                        <DataTable data={addAdjustments} columns={addColumns} resourceTitle="adjustments/add" />
                    </div>

                    {/* Stock Transfer Adjustments Table */}
                    <div className="my-4 p-8">
                        <h2 className="py-4 text-xl font-semibold">Stock Transfer Adjustments</h2>
                        <DataTable data={transferAdjustments} columns={transferColumns} resourceTitle="adjustments/transfer" />
                    </div>
                </>
            )}
        </div>
    );
}
