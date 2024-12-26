"use client";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";
import DeleteBtn from "./DeleteBtn";

export default function DataTable({ data = [], columns = [],resourceTitle="" }) {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {data.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((columnName, i) => (
                  <th scope="col" key={i} className="px-6 py-3">
                    {columnName}
                  </th>
                ))}
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, j) => (
                <tr
                  key={j}
                  className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 dark:border-gray-700"
                >
                  {columns.map((columnName, i) => (
                    <td key={i} className="px-6 py-4">
                      {item[columnName] || "-"}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <Link
                      href={`/dashboard/inventory/${resourceTitle}/update/${item.id}`}
                      className="flex items-center space-x-1 font-medium text-blue-600 dark:text-blue-500"
                    >
                      <Pencil className="w-4 h-4" />
                      <span>Edit</span>
                    </Link>
                    <DeleteBtn id={item.id} endpoint={resourceTitle}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
            No data available.
          </div>
        )}
      </div>
    </div>
  );
}
