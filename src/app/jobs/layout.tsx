import React from "react";

import Header from "@/components/header";

interface Props {
  children: React.ReactNode;
}

export default function JobLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
