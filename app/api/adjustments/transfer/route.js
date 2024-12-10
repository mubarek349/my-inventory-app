import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {transferStockQty,warehouseId,notes,referenceNumber}=await request.json();
        const adjustment=await db.transferStockWarehouse.create({data:{transferStockQty,warehouseId,notes,referenceNumber},},);
        console.log(adjustment);
        return NextResponse.json(adjustment);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create a Adjustment"
            },
            {
                status:500
            });
    }
    
}