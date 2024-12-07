import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {transferStockQty,givingWarehouseId,receivingWarehouseId,notes}=await request.json();
        const adjustment={transferStockQty,givingWarehouseId,receivingWarehouseId,notes};
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