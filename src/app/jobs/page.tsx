import data from "@/dev-data/data.json";
import JobList from "./components/job-list";

export default function Page() {
  return (
    <div className="container">
      <div className="mb-14 h-20 w-full bg-white"></div>
      <JobList jobs={data} />
    </div>
  );
}
