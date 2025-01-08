"use client";
import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useEffect ,useState} from "react";

export default function NewItem({isUpdate=false,initialData}) {
  
  try {
    // Parallel fetching of data
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [units, setUnits] = useState([]);
  const [brands, setBrands] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesData,suppliersData,unitsData,brandsData, warehousesData] = await Promise.all([
          getData("categories"),
          getData("suppliers"),
          getData("units"),
          getData("brands"),
          getData("warehouse"),
        ]);
        setCategories(categoriesData);
        setSuppliers(suppliersData);
        setUnits(unitsData);
        setBrands(brandsData);
        setWarehouses(warehousesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
    return (
      <div>
        {/* Header */}
        <FormHeader title={isUpdate?"Update Item":"New Item"} href="/dashboard/inventory/items" />
        
        {/* Form */}
        <CreateItemForm
          categories={categories}
          units={units}
          brands={brands}
          suppliers={suppliers}
          warehouses={warehouses}
          isUpdate={isUpdate}
          initialData={initialData}
        />
      </div>
    );
  } catch (error) {
    console.error("Error loading NewItem data:", error);
    return <div>Error loading data. Please try again later.</div>; // Graceful fallback UI
  }
}
