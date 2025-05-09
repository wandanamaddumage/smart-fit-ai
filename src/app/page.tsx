"use client";
import { SignedIn, SignOutButton } from "@clerk/clerk-react";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      HomePage
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
