"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import { useBoards } from "@/lib/hooks/useBoards";
import { Card, CardContent } from "@/components/ui/card";

function DashboardPage() {
  const { user } = useUser();
  const { createBoard } = useBoards();

  const handleCreateBoard = async () => {
    await createBoard({ title: "New Board", color: "#000000" });
  };

  return (
    <div className="min-h-screen bg-fuchsia-100">
      <Navbar />
      <main className="container mx-auto px-4 py-6 sm:py-8 text-2xl font-semibold text-gray-900 text-center">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome to dashboard!
            {user?.firstName ?? user?.emailAddresses[0].emailAddress}!
          </h1>
          <p className="text-gray-500">
            Here&apos;s what&apos;s happening with your boards today.
          </p>
          <Button className="w-full sm:w-auto" onClick={handleCreateBoard}>
            <Plus className="w-4 h-4" />
            Create Board
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent></CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
