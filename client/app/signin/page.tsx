import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardContent className="space-y-2">
          <Button
            variant="outline"
            className="w-full cursor-pointer border-2 border-black text-primary border-primary"
          >
            Continue with Email
          </Button>
          <Button
            variant="outline"
            className="w-full cursor-pointer border-2 border-black text-primary border-primary"
          >
            Continue with GitHub
          </Button>
          <Link
            href="/"
            className="w-full cursor-pointer border-2 border-black text-primary border-primary block flex items-center gap-2 justify-center rounded-lg py-1 text-sm font-semibold hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4 font-semibold" />
            <span>Go Back</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
