import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
       const {
            referenceNumber,
            itemId,
            addStockQty,
            recievingWarehouseId,
            notes,
            supplierId,
          } = await request.json();
        
            //get the item data
            const itemToUpdate = await db.item.findUnique({
                where :{
                    id : itemId // latest adjustment
                },
            });
            //update the quantity
            const currentItemQuantity=itemToUpdate.quantity;
            const newQty=parseInt(currentItemQuantity) + parseInt(addStockQty);
            

            //affect the Item
        const updatedItem=await db.item.update({ where:{
                id : itemId, // selected brand
            },
            data:{
                quantity : newQty,
            }
            });

            //get the warehouse data
            const warehouse = await db.warehouse.findUnique({
                where :{
                    id : recievingWarehouseId, // latest adjustment
                },
            });
            //update the quantity
            const currentWarehouseStock=warehouse.stockQty;
            const newStockQty=parseInt(currentWarehouseStock) + parseInt(addStockQty);


            //affect the Item
            const updatedWarehouse=await db.warehouse.update(
                { where:{
                id : recievingWarehouseId, // selected brand
            },
            data:{
                stockQty : newStockQty,
            }
            });

            const adjustment=await db.addStockWarehouse.create(
                { data:
                    {
                        referenceNumber,
                        itemId ,
                        addStockQty : parseInt(addStockQty),
                        recievingWarehouseId ,
                        notes ,
                        supplierId,
                    }
                });
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