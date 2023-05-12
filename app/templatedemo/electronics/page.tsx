"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Electronic() {
  const [currTime, setCurrTime] = useState<string>(
    new Date().toLocaleTimeString(),
  );
  useEffect(() => {
    setCurrTime(new Date().toLocaleTimeString());
  }, []);
  // const currTime = new Date().toLocaleTimeString();
  return (
    <div className="text-xl">
      List of Electronics at {currTime} <Link href="/templatedemo">Back</Link>
    </div>
  );
}
