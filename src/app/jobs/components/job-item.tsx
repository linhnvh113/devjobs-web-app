import Image from "next/image";
import Link from "next/link";

interface Props {
  job: any;
}

export default function JobItem({ job }: Props) {
  const {
    id,
    postedAt,
    contract,
    position,
    company,
    location,
    logo,
    logoBackground,
  } = job;

  return (
    <div className="relative rounded-md bg-card px-8 pb-8 pt-12">
      <div
        className="absolute -top-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
        style={{ backgroundColor: `${logoBackground}` }}
      >
        <Image
          src={logo}
          width={32}
          height={32}
          alt="logo"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="space-x-3 text-dark-gray">
          <span>{postedAt}</span>
          <span>&#8901;</span>
          <span>{contract}</span>
        </div>
        <Link href={`jobs/${id}`}>
          <h3>{position}</h3>
        </Link>
        <span className="text-dark-gray">{company}</span>
      </div>
      <h4 className="mt-11 text-violet">{location}</h4>
    </div>
  );
}
