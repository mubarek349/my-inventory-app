export async function getData(endpoint) {
    try {
        const baseUrl = "my-inventory-app-ten.vercel.app";
        const response=await fetch(`${baseUrl}/api/${endpoint}`);
        const data= await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}