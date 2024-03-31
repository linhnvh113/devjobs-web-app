import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-8 md:py-11">
          <Link href="/">LOGO</Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
