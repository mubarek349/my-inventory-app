import toast from "react-hot-toast";

export async function makePostRequest(setLoading,endpoint,data,resourceName,reset) {
    try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const response=await fetch(`${baseUrl}/${endpoint}`,
            {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
            });
            if(response.ok){
                console.log(response);
                setLoading(false);
                toast.success(`New ${resourceName} Created Successfully!`)
                reset();
            }
    } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(`There is aproblem in creating new ${resourceName}`);
        
    }

}
export async function makePutRequest(setLoading,endpoint,data,resourceName,redirect,reset) {
    try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const response=await fetch(`${baseUrl}/${endpoint}`,
            {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
            });
            if(response.ok){
                console.log(response);
                setLoading(false);
                toast.success(`${resourceName} Updated Successfully!`)
                redirect()
            }
    } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(`There is aproblem in Updating ${resourceName}`);
        
    }

}