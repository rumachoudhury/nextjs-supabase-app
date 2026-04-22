"use client";

import React from "react";
import { Kanban } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 flex items-center justify-center">
      <div className="container mx-auto gap-2 py-3 px-4 sm:py-4 ">
        <div className="flex items-center space-x-2">
          {/* <Trello /> */}
          <Kanban className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />

          <span className="text-xl sm:text-2xl text-gray-600 font-bold ">
            Trello Clone
          </span>
        </div>

        {/* <div className="flex items-center space-x-2 sm:space-x-4">
          <div>
            <SignInButton>
              <Button></Button>
            </SignInButton>
            <SignUpButton></SignUpButton>
          </div>
        </div> */}

        <div className="flex items-center space-x-2 sm:space-x-4">
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>

          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
