import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

interface Props {
  position: string;
  apply: string;
}

export default function JobDetailFooter({ position, apply }: Props) {
  return (
    <footer>
      <div className="rounded-md bg-white p-6">
        <div className="container md:max-w-[689px] xl:max-w-[730px]">
          <div className="md:flex md:items-center md:justify-between">
            <div className="hidden md:block">
              <h3>{position}</h3>
              <p>So Digital Inc.</p>
            </div>
            <Link
              href={apply}
              target="_blank"
              className={`w-full md:w-auto ${buttonVariants({
                variant: "default",
              })}`}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
