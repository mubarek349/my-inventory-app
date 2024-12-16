import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
export default async function NewItem(){

    const categoriesData= await getData("categories");
    const suppliersData= await getData("suppliers");
    const unitsData=await getData("units");
    const brandsData= await getData("brands");
    const warehousesData=await getData("warehouse");

//parallel fetching
    const [categories,suppliers,units,brands,warehouses]=await Promise.all([
        categoriesData,
        suppliersData,
        unitsData,
        brandsData,
        warehousesData
    ]);
        
    return(
        <div>
            {/* Header */}
            <FormHeader title="New Item" href="/dashboard/inventory/items"/>
            {/* Form */}
            <CreateItemForm categories={categories} units={units} brands={brands} suppliers={suppliers} warehouses={warehouses}/>
        
        </div>
    );
}
