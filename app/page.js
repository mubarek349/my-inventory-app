import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
       <h2 className="lg:text-3xl mb-4">
          Inventory Management Software
       </h2>
       <a href="/dashboard/home/overview">View Dashboard</a>
    </div>
  );
}
