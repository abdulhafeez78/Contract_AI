"use client";
import { NavBar } from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "../components/banner";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Foooter } from "../components/foooter";
import { useEffect, useState } from "react";
import { SignUp } from "@/components/SignUp";
import { useRouter } from "next/navigation";
import { WorkAssist } from "@/components/WorkAssist";
import DemoVideo from "@/components/DemoVideo";
export default function Home() {
  const [access, setAccess] = useState(false);

  const [accessToken, setAccessToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("access") as any);
    setAccessToken(token);
    console.log(token, "token");

    if (!token) {
      router.push("/");
      setAccess(false);
    }
  }, [access]);

  return (
    <div className="App">
      {!accessToken ? (
        <div
          style={
            accessToken == "" || accessToken == "yes"
              ? { display: "none" }
              : accessToken == null
              ? { display: "block" }
              : {}
          }
        >
          <SignUp setAccess={setAccess} />
        </div>
      ) : (
        <>
          <NavBar />
          <Banner />
          <DemoVideo />
          <Skills />
          <WorkAssist />
          <Projects />
          <Contact />
          <Foooter />
        </>
      )}
    </div>
  );
}
