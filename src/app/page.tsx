import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
        <SignUpButton>
          <Button variant={"secondary"}>Sign up</Button>
        </SignUpButton>
      </SignedOut>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle/>
    </div>
  );
}
