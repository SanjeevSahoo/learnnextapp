"use client";

import { useRouter } from "next/navigation";
import React from "react";

function HomeButton() {
  const router = useRouter();
  const handleHomeRoute = () => {
    router.push("/layoutdemo");
  };
  return (
    <button
      className="p-1 px-2.5 text-blue-500 bg-gray-300"
      onClick={handleHomeRoute}
    >
      Home
    </button>
  );
}

export default HomeButton;
