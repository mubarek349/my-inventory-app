import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        // {addStockQty,warehouseId,notes,referenceNumber}
        const data =await request.json();
        // const adjustment=await db.addStockWarehouse.create({data});
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