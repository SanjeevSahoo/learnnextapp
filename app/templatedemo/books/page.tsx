"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Book() {
  const [currTime, setCurrTime] = useState<string>(
    new Date().toLocaleTimeString(),
  );
  useEffect(() => {
    setCurrTime(new Date().toLocaleTimeString());
  }, []);
  // const currTime = new Date().toLocaleTimeString();
  return (
    <div className="text-xl">
      List of Books at {currTime} <Link href="/templatedemo">Back</Link>
    </div>
  );
}
