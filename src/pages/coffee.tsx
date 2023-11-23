import { Button } from "@chakra-ui/react";
import React from "react";
import { Hero } from "@/components/landing-page";
import { useTranslations } from "@/hooks/useTranslations";

export default function CoffeePage() {
  const t = useTranslations();

  return (
    <>
      <Hero
        hero1={t("coffee.hero1")}
        hero2={t("coffee.hero2")}
        buttons={
          <>
            <Button variant="secondary" as="a" href="mailto:m@mattjewell.de">
              {t("hero.cta1")}
            </Button>
          </>
        }
      />
    </>
  );
}
