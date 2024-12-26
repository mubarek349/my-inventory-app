import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
       const {
            referenceNumber,
            itemId,
            addStockQty,
            warehouseId,
            notes
          } = await request.json();
        const adjustment=await db.addStockWarehouse.
        create({data:
                {
                    referenceNumber : referenceNumber,
                    itemId : itemId,
                    addStockQty : parseInt(addStockQty),
                    recievingWarehouseId : warehouseId,
                    notes : notes
                }
            });
        console.log(adjustment);
        return NextResponse.json(adjustment);
    } catch (error) {
        console.error(error);
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

export async function GET(){
    try {
        const adjustment = await db.AddStockWarehouse.findMany({
            orderBy:{
                createdAt : 'desc' // latest adjustment
            },
        });
        return NextResponse.json(adjustment);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch an Adjustment"
            },
            {
                status:500
            });
    }
}

export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        const deleteaddStockWarehouse= await db.addStockWarehouse.delete({
            where:{
                id  
            },
        });
        console.log(deleteaddStockWarehouse);
        return NextResponse.json(deleteaddStockWarehouse);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to Delete addStockWarehouse"
            },
            {
                status:500
            });
    }
}