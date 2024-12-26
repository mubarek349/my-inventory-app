"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const data = await getData("categories");
                setCategories(data);
            } catch (err) {
                console.error("Error fetching categories:", err);
                setError("Failed to load categories. Please try again later.");
            }
        }

        fetchCategories();
    }, []);

    const columns = ["title", "description"];

    return (
        <div>
            {/* Header */}
            <FixedHeader title="Categories" newLink="/dashboard/inventory/categories/new" />

            {/* Table or Error Message */}
            <div className="my-4 p-8">
                {error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <DataTable data={categories} columns={columns} resourceTitle="categories" />
                )}
            </div>
        </div>
    );
}
