import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

interface Props {
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export default function JobDetailBody({
  position,
  postedAt,
  contract,
  location,
  description,
  requirements,
  role,
}: Props) {
  return (
    <div className="container md:max-w-[689px] xl:max-w-[730px]">
      <div className="space-y-8 rounded-md bg-white px-6 py-10 md:p-12">
        <div className="items-center justify-between md:flex">
          <div className="flex flex-col gap-3">
            <div className="space-x-3 text-dark-gray">
              <span>{postedAt}</span>
              <span className="font-bold">&bull;</span>
              <span>{contract}</span>
            </div>
            <h3>{position}</h3>
            <h4 className="text-violet">{location}</h4>
          </div>
          <Link
            href={"#"}
            className={`mt-14 w-full md:mt-0 md:w-auto ${buttonVariants({
              variant: "default",
            })}`}
          >
            Apply Now
          </Link>
        </div>
        <p className="text-dark-gray">{description}</p>
        <div className="space-y-8 text-dark-gray">
          <h3 className="text-very-dark-blue">Requirements</h3>
          <p>{requirements.content}</p>
          <ul className="list-disc space-y-2 pl-6 marker:font-bold marker:text-violet">
            {requirements.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-8 text-dark-gray">
          <h3 className="text-very-dark-blue">What Will You Do</h3>
          <p>{role.content}</p>
          <ol className="list-decimal space-y-2 pl-6 marker:text-left marker:font-bold marker:text-violet">
            {role.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
