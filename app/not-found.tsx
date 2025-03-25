import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="gradient-title mb-4 text-6xl font-bold lg:text-8xl">
        404
      </h1>
      <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
        Oops! The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <p className="text-muted-foreground mb-8 text-base">
        Please check the URL or return to the homepage to continue browsing.
      </p>
      <Link href="/">
        <Button>
          <HomeIcon />
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
