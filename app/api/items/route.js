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
            orderBy: {
                createdAt : 'desc' // latest item
            },
            include: {
                category : true,
            }
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
export async function DELETE(request) {
    try {
        // Extract 'id' from query parameters
        const id = request.nextUrl.searchParams.get("id");

        // Validate 'id'
        if (!id) {
            throw new TypeError("The 'id' parameter is required but was not provided.");
        }

        // Perform delete operation
        const deleteitem = await db.item.delete({
            where: {
                id, // Ensure 'id' matches the expected schema type in your database
            },
        });

        console.log("Deleted item:", deleteitem);

        // Return success response
        return NextResponse.json({
            success: true,
            message: "Item deleted successfully.",
            data: deleteitem,
        });
    
    } catch (error) {
        console.error("Error in DELETE handler:", error);

        // Return error response
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to delete item.",
            },
            { status: 500 }
        );
    }
}
