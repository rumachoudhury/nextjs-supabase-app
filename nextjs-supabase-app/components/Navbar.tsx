"use client";

import React from "react";
import { ArrowRight, Kanban } from "lucide-react";
import { SignInButton, SignUpButton, useUser, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isDashboardPage = pathname === "/dashboard";
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:py-4">
        {/* Left */}
        <div className="flex items-center space-x-2">
          <Kanban className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <span className="text-xl sm:text-2xl text-gray-600 font-bold">
            Trello Clone
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {isSignedIn && user && (
            <>
              <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                Welcome, {user.firstName ?? user.emailAddresses[0].emailAddress}
              </span>

              <Button asChild size="sm" className="text-xs sm:text-sm">
                <Link href="/dashboard" className="flex items-center">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </>
          )}

          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button size="sm" className="cursor-pointer">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
