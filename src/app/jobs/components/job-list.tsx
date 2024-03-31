import JobItem from "./job-item";

interface Props {
  jobs: any[];
}

export default function JobList({ jobs }: Props) {
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-3 md:gap-y-16 xl:grid-cols-3 xl:gap-x-8">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </section>
  );
}
