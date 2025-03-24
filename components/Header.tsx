import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutGridIcon, PenBoxIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-secondary/50 fixed top-0 z-50 w-full border-b backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href={"/"}>
          <Image
            src={"/Logo-1.png"}
            alt="Logo"
            width={220}
            height={50}
            className="h-8 w-auto md:h-10"
          />
        </Link>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href={"/transaction/create"}>
              <Button>
                <PenBoxIcon />
                <span className="size hidden md:inline">
                  Create Transaction
                </span>
              </Button>
            </Link>

            <Link href={"/dashboard"}>
              <Button variant="outline">
                <LayoutGridIcon />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "!size-9",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
