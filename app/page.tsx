'use client'

import HomePageContents from "./components/homePageContents/homePageContents";
import MyWebsiteNavBar from "./components/navBar/navBar";

export default function Home() {
  return (
      <>
        <MyWebsiteNavBar activeTab={''} />
        <HomePageContents />
      </>
  );
}
