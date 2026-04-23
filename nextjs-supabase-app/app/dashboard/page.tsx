import Navbar from "@/components/Navbar";
import React from "react";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-fuchsia-50">
      <Navbar />
      <main className="container mx-auto px-4 py-6 sm:py-8 text-2xl font-semibold text-gray-800 text-center">
        <h1>Welcome to your dashboard!</h1>
      </main>
    </div>
  );
}

export default DashboardPage;
