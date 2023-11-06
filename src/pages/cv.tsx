import { useEffect } from "react";
import { useRouter } from "next/router";

const CvPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirecting to /projects
    void router.replace("/projects");
  }, [router]);

  return null;
};

export default CvPage;
