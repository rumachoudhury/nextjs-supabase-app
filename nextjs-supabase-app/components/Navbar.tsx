// "use client";

// import React from "react";
// import { Kanban } from "lucide-react";
// import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
// import { Button } from "./ui/button";

// function Navbar() {
//   const { isSignIn, user } = useUser(); //useUser()  hook from Clerk to get the current user's authentication status and information.

//   return (
//     <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:py-4">
//         {/* Left side */}
//         <div className="flex items-center space-x-2">
//           <Kanban className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
//           <span className="text-xl sm:text-2xl text-gray-600 font-bold">
//             Trello Clone
//           </span>
//         </div>

//         {/* Right side */}
//         <div className="flex items-center space-x-2 sm:space-x-4">
//           {/*SignInButton and SignUpButton from Clerk*/}
//           {/*Button from shadcn UI*/}
//           {isSignIn ? (
//             <div className="flex flex-col sm:flex-row items-end"></div>
//           ) : (
//             <div>
//               <SignInButton>
//                 <Button variant="outline" size="sm" className="text-sm">
//                   Sign In
//                 </Button>
//               </SignInButton>

//               <SignUpButton>
//                 <Button>Sign Up</Button>
//               </SignUpButton>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
// -----------------------------------
"use client";

import React from "react";
import { Kanban } from "lucide-react";
import { SignInButton, SignUpButton, useUser, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Navbar() {
  const { isSignedIn, user } = useUser();

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
            <span>
              Welcome, {user.firstName ?? user.emailAddresses[0].emailAddress}
            </span>
          )}

          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button size="sm">Sign Up</Button>
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
