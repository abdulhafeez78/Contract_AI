"use client";
import React, { useEffect, useState } from "react";
import FileUpload from "../../components/dashboard";
import { useRouter } from "next/navigation";
const Dashboard = () => {
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
      <FileUpload />
    </div>
  );
};

export default Dashboard;
