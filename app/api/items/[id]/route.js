import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    try {
        const { id } = await params;
        const item = await db.item.findUnique({
            where:{
                id // selected item
            },
        });
        return NextResponse.json(item);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch the item"
            },
            {
                status:500
            });
    }
}
export async function PUT(request,{params :{id}}){
    try {
        const itemData=await request.json();
        const item = await db.item.update({
            where:{
                id // selected item
            },
            data:{
                title: itemData.title,
                categoryId : itemData.categoryId,
                sku : itemData.sku,
                barcode : itemData.barcode,
                quantity : parseInt(itemData.quantity),
                unitId : itemData.unitId,
                brandId : itemData.brandId,
                supplierId : itemData.supplierId,
                buyingPrice : parseFloat(itemData.buyingPrice),
                sellingPrice : parseFloat(itemData.sellingPrice),
                reOrderPoint : parseInt(itemData.reOrderPoint),
                warehouseId : itemData.warehouseId,
                imageUrl : itemData.imageUrl,
                weight : parseFloat(itemData.weight),
                dimensions : itemData.dimensions,
                taxRate : parseFloat(itemData.taxRate),
                description : itemData.description,
                notes : itemData.notes
            }
        });
        return NextResponse.json(item);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch the item"
            },
            {
                status:500
            });
    }
}