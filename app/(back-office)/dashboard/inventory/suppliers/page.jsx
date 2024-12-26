"use client";

import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import { useEffect, useState } from "react";

export default function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSuppliers() {
            try {
                const data = await getData("suppliers");
                setSuppliers(data);
            } catch (err) {
                console.error("Error fetching Suppliers:", err);
                setError("Failed to load Suppliers. Please try again later.");
            }
        }
        fetchSuppliers();
    }, []);

    const columns = ["title", "phone", "email"];
       
    return (
            <div>
                {/* Header */}
                <FixedHeader title="Suppliers" newLink="/dashboard/inventory/suppliers/new" />
                
                {error ? (
                    <div className="my-4 p-8 text-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                ):(
                    <div className="my-4 p-8">
                        <DataTable data={suppliers} columns={columns} resourceTitle="suppliers" />
                   </div>
                )}  
            </div>
        );
    
}
