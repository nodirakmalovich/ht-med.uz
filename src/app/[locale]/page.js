import Image from "next/image";
import Link from "next/link";
import initTranslations from "../i18n";
import HomePage from "@/pages/Home/HomePage";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <HomePage />
  );
}
