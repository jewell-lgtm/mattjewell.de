import { Button, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { CoffeeForm } from "@/components/CoffeeForm";
import { Hero } from "@/components/landing-page";
import { PageSection } from "@/components/layout";
import { useTranslations } from "@/hooks/useTranslations";

export default function CoffeePage() {
  const t = useTranslations();
  const [formRef, setFormRef] = React.useState<HTMLDivElement | null>(null);

  return (
    <>
      <Head>
        <title>{t("coffee.title")}</title>
        <meta name="description" content={t("coffee.hero2")} />
      </Head>
      <Hero
        hero1={t("coffee.hero1")}
        hero2={t("coffee.hero2")}
        buttons={
          <>
            <Button
              variant="secondary"
              onClick={() => {
                formRef?.scrollIntoView({ behavior: "smooth" });
              }}
            >
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
        id="form"
        ref={setFormRef}
      >
        <Container minWidth="240" maxWidth="2xl">
          <CoffeeForm />
        </Container>
      </PageSection>
    </>
  );
}
