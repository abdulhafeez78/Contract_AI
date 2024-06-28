"use client";
import DemoVideo from "@/components/DemoVideo";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DemoVideoPage = () => {
  const [access, setAccess] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("access") as any);
    setAccess(token);
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <div style={!access ? { display: "none" } : { display: "block" }}>
      <DemoVideo />
    </div>
  );
};

export default DemoVideoPage;
