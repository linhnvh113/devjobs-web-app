import JobDetailBody from "../components/job-detail-body";
import JobDetailFooter from "../components/job-detail-footer";
import JobDetailHeader from "../components/job-detail-header";

import data from "@/dev-data/data.json";

interface Props {
  params: {
    jobId: string;
  };
}

export default function Page({ params }: Props) {
  const job = data[1];

  return (
    <div className="space-y-6">
      <JobDetailHeader {...job} />
      <JobDetailBody {...job} />
      <JobDetailFooter {...job} />
    </div>
  );
}
