import db from "@/lib/db";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {
            referenceNumber,
            transferStockQty,
            itemId,
            givingWarehouseId,
            warehouseId,
            notes,
          }
     = await request.json();
        const adjustment=await db.transferStockWarehouse.
        create({data:
                {referenceNumber :referenceNumber,
                transferStockQty : parseInt(transferStockQty),
                itemId : itemId,
                givingWarehouseId : givingWarehouseId,
                recievingWarehouseId : warehouseId,
                notes: notes}
          });
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
export async function GET(){
    try {
        const adjustment = await db.transferStockWarehouse.findMany({
            orderBy:{
                createdAt : 'desc' // latest adjustment
            },
        });
        return NextResponse.json(adjustment);
    } catch (error) {
        console.log(error);
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