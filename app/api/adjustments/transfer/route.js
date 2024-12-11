import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const data=await request.json();
        //const adjustment=await db.transferStockWarehouse.create({data:{transferStockQty,warehouseId,notes,referenceNumber},},);
        console.log(data);
        return NextResponse.json(data);
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