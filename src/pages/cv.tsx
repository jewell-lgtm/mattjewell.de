import { useEffect } from "react";
import { useRouter } from "next/router";

const CvPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirecting to English CV (for now)
    void router.replace("/cv-en.pdf");
  }, [router]);

  return null;
};

export default CvPage;
