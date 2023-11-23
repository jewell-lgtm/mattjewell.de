import { Button, Container } from "@chakra-ui/react";
import React from "react";
import { CoffeeForm } from "@/components/CoffeeForm";
import { Hero } from "@/components/landing-page";
import { PageSection } from "@/components/layout";
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
        backgroundImage="/coffee_shop.png"
      />
      <PageSection
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={4}
      >
        <Container minWidth="240" maxWidth="2xl">
          <CoffeeForm />
        </Container>
      </PageSection>
    </>
  );
}
