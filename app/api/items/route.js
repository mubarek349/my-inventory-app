import { NextResponse } from "next/server";
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