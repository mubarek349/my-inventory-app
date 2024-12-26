import db from "@/lib/db";
import { NextResponse } from "next/server";
export function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'my-inventory-app-ten.vercel.app'); // Adjust '*' to specific origins if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers

    if (req.method === 'OPTIONS') {
        // Respond to preflight requests
        return res.status(204).end();
    }

    res.status(200).json({ message: 'CORS enabled!' });
}
export async function POST(request) {
    
    try {
        const itemData=await request.json();
        
        const item=await db.item.create({data:{
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
        },},);
        console.log(item);
        return NextResponse.json(item);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create an Item"
            },
            {
                status:500
            });
    }
    finally{
           await db.$disconnect(); 
    }
}

export async function GET(){
    try {
        const items = await db.item.findMany({
            orderBy:{
                createdAt : 'desc' // latest item
            },
        });
        return NextResponse.json(items);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch an item"
            },
            {
                status:500
            });
    }
}

export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        const deleteitem= await db.item.delete({
            where:{
                id  
            },
        });
        console.log(deleteitem);
        return NextResponse.json(deleteitem);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to Delete item"
            },
            {
                status:500
            });
    }
}