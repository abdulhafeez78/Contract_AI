"use client";

import FlowContractAssist from "@/components/FlowContractAssist";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FlowPage = () => {
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
      <FlowContractAssist />
    </div>
  );
};

export default FlowPage;
