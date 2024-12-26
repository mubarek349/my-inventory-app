export async function getData(endpoint) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const response = await fetch(`${baseUrl}/api/${endpoint}`, { cache: "no-store" });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error so the caller can handle it
    }
  }
  