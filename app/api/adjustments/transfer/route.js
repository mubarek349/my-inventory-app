import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {
            referenceNumber,
            transferStockQty,
            itemId,
            givingWarehouseId,
            recievingWarehouseId,
            notes,
          }
     = await request.json();

        //getting the Giving warehouse
        const givingWarehouse = await db.warehouse.findUnique({
            where :{
                id : givingWarehouseId, // latest adjustment
            },
        });
        //update the Giving Warehouse
        const currentWarehouseGivingStock=givingWarehouse.stockQty;
        if(parseInt(currentWarehouseGivingStock)>parseInt(transferStockQty)){
            const newStockForGivingWarehouse=parseInt(currentWarehouseGivingStock) - parseInt(transferStockQty);
            //affect the 
            const updatedGivingWarehouse=await db.warehouse.update(
                { where:{
                id : recievingWarehouseId, 
            },
            data:{
                stockQty : newStockForGivingWarehouse,
            }
            });
            //getting the receiving warehouse
            const recievingWarehouse = await db.warehouse.findUnique({
                where :{
                    id : recievingWarehouseId, // latest adjustment
                },
            });
            //update the Receiving Warehouse
            const currentWarehouseReceivingStock=recievingWarehouse.stockQty;
            const newStockForReceivingWarehouse=parseInt(currentWarehouseReceivingStock) + parseInt(transferStockQty);


            //affect the 
            const updatedReceivingWarehouse=await db.warehouse.update(
                { where:{
                id : recievingWarehouseId, 
            },
            data:{
                stockQty : newStockForReceivingWarehouse,
            }
            });
            const adjustment=await db.transferStockWarehouse.
            create({data:
                    {referenceNumber,
                    transferStockQty : parseInt(transferStockQty),
                    itemId ,
                    givingWarehouseId ,
                    recievingWarehouseId ,
                    notes}
            });
            console.log(adjustment);
            return NextResponse.json(adjustment);
        }else{
            return NextResponse.json({
                data:null,
                message:"Giving Warehouse has no Enough Stock"
            },{
                status:409,
            });
        }
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
        const deletetransferStockWarehouse= await db.transferStockWarehouse.delete({
            where:{
                id  
            },
        });
        console.log(deletetransferStockWarehouse);
        return NextResponse.json(deletetransferStockWarehouse);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to Delete transferStockWarehouse"
            },
            {
                status:500
            });
    }
}