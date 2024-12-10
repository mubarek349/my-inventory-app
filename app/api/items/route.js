import db from "@/lib/db";
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

    try {
            const {title,
            categoryId,
            sku,
            barcode,
            quantity,
            unitId,
            brandId,
            supplierId,
            buyingPrice,
            sellingPrice,
            reOrderPoint,
            warehouseId,
            imageUrl,
            weight,
            dimensions,
            taxRate,
            description,
            notes}=await request.json();
        const item=await db.item.create({data:{title,
            categoryId,
            sku,
            barcode,
            quantity : parseInt(quantity),
            unitId,
            brandId,
            supplierId,
            buyingPrice : parseFloat(buyingPrice),
            sellingPrice : parseFloat(sellingPrice),
            reOrderPoint : parseInt(reOrderPoint),
            warehouseId,
            imageUrl,
            weight : parseFloat(weight),
            dimensions,
            taxRate : parseFloat(buyingPrice),
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
    }
    
}