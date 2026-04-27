"use client";

import dynamic from "next/dynamic";

const OrbField = dynamic(() => import("./OrbField"), { ssr: false });

export default function OrbFieldClient() {
  return <OrbField />;
}
