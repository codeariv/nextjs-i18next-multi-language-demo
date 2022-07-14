import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";

export default function About() {
  const { t } = useTranslation("");

  return (
    <>
      <Navigation />
      <div className="mt-5">
        <h1>{t("about.About title")}</h1>
        <p>{t("about.About description")}</p>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
