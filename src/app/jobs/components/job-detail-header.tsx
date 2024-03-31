import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

interface Props {
  company: string;
  logo: string;
  logoBackground: string;
  website: string;
}

export default function JobDetailHeader({
  company,
  logo,
  logoBackground,
  website,
}: Props) {
  return (
    <div className="container md:max-w-[689px] xl:max-w-[730px]">
      <div className="relative items-center rounded-md bg-white pb-8 pt-12 text-center md:grid md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-0">
        <div className="absolute -top-[25px] left-1/2 h-[50px] w-[50px] -translate-x-1/2 rounded-2xl bg-red-400 md:relative md:inset-0 md:h-[140px] md:w-[140px] md:translate-x-0 md:rounded-none md:rounded-s-md">
          <Image src={logo} alt="logo" fill className="object-contain" />
        </div>
        <div className="justify-self-start">
          <h3>{company}</h3>
          <p className="mb-6 mt-3.5 md:mb-0">{company}.com</p>
        </div>
        <Link
          href={website}
          target="_blank"
          className={`md:mr-10 ${buttonVariants({
            variant: "secondary",
          })}`}
        >
          Company Site
        </Link>
      </div>
    </div>
  );
}
