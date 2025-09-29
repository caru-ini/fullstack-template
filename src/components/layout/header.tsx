import { UserMenu } from "@/components/auth/user-menu";
import { ThemeToggle } from "@/components/misc/theme-toggle";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-3 z-40 w-full">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 rounded-full border bg-background/80 px-7 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="/" className="text-xl font-extrabold text-primary">
          Fullstack Template
        </Link>
        <nav className="flex items-center gap-2">
          <ThemeToggle variant="dropdown" />
          <UserMenu />
        </nav>
      </div>
    </header>
  );
};
