import { Redirect, RedirectProps } from "expo-router";
import React, { useEffect, useState } from "react";
import { useLoadingStore } from "~/store";
import FullSizeLoader from "@/components/FullSizeLoader";

const Index = () => {
  const [redirectPath, setRedirectPath] = useState<RedirectProps["href"] | null>(null);
  const { isLoading, setLoading } = useLoadingStore();

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        setRedirectPath('/main/home');
      } catch (err) {
        console.error("❌ Failed during app init", err);
        setRedirectPath("/main/home");
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  if (isLoading || !redirectPath) return <FullSizeLoader />;

  return <Redirect href={redirectPath} />;
};

export default Index;
