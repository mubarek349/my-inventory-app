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
            // title,
            // catagoryId,
            // sku,
            // barcode,
            // qty,
            // unitId,
            // brandId,
            // supplierId,
            // buyingPrice,
            // sellingPrice,
            // reOrderPoint,
            // warehouseId,
            // imageUrl,
            // weight,
            // dimensions,
            // taxRate,
            // description,
            // notes
        const data= await request.json();
        console.log(data);
        return NextResponse.json(data);
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