import { BlueCurveLayout, Header } from "@/src/components";
import MainPage, { SectionsAnchors, Slider } from "@/src/components/Main";
import { SectionAnchor } from "@/src/components/Main/SectionsAnchors";
import {
  Constants,
  GetCompilationsListCultureResponse,
  GetCompilationsResponse,
  GetMainEventsResponse,
  MainSliderResponse,
  SEO,
} from "@/src/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useMemo } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [
      response,
      getMainEventsResponse,
      mainSliderResponse,
      whatToSeeResponse,
    ] = await Promise.all([
      (await fetch(`${Constants.BASE_URL}/route/get-compilations-list`).then(
        (res) => res.json()
      )) as GetCompilationsResponse,
      (await fetch(`${Constants.BASE_URL}/object/get-main-events`).then((res) =>
        res.json()
      )) as GetMainEventsResponse,
      (await fetch(`${Constants.BASE_URL}/content/main-slider`).then((res) =>
        res.json()
      )) as MainSliderResponse,
      (await fetch(
        `${Constants.BASE_URL}/object/get-compilations-list-culture?main=true`
      ).then((res) => res.json())) as GetCompilationsListCultureResponse,
    ]);

    return {
      props: {
        ...response,
        data: JSON.stringify(response),
        events: getMainEventsResponse,
        mainSlider: mainSliderResponse.data,
        seo: mainSliderResponse.seo,
        whatToSeeItems: whatToSeeResponse,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

type HomeProps = { data: string } & {
  events: string;
  mainSlider: MainSliderResponse["data"];
  seo: SEO;
  whatToSee: GetCompilationsListCultureResponse;
};

export default function Home({ data, mainSlider, seo, whatToSee }: HomeProps) {
  const parsedData = useMemo<GetCompilationsResponse>(() => {
    try {
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  }, [data]);

  return (
    <>
      <Head>
        <meta name="keywords" content={seo.keywords} />
        <meta name="description" content={seo.description} />
        <title>{seo.title}</title>
      </Head>
      <BlueCurveLayout>
        <Header />
        <MainPage sliderItems={mainSlider || []} whatToSee={whatToSee} />
      </BlueCurveLayout>
    </>
  );
}
