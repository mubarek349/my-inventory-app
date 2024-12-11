import db from "@/lib/db";
import { ObjectId } from "bson";
import { NextResponse } from "next/server";
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust '*' to specific origins if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers

    if (req.method === 'OPTIONS') {
        // Respond to preflight requests
        return res.status(204).end();
    }

    res.status(200).json({ message: 'CORS enabled!' });
}
export async function POST(request) {
    const data=await request.json();
    if (!ObjectId.isValid(data.categoryId)) {
        return new NextResponse(
          JSON.stringify({ error: "Invalid categoryId provided." }),
          { status: 400 }
        );
      }
    try {
        
        const item=await db.item.create({data:{
            title: data.title,
            categoryId : data.categoryId,
            sku,
            barcode,
            quantity : parseInt(data.quantity),
            unitId,
            brandId,
            supplierId,
            buyingPrice : parseFloat(data.buyingPrice),
            sellingPrice : parseFloat(data.sellingPrice),
            reOrderPoint : parseInt(data.reOrderPoint),
            warehouseId,
            imageUrl,
            weight : parseFloat(data.weight),
            dimensions,
            taxRate : parseFloat(data.taxRate),
            description,
            notes},},);
            
        console.log(item);
        return NextResponse.json(item);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create an Item"
            },
            {
                status:500
            });
    }finally{
           await db.$disconnect(); 
    }
}