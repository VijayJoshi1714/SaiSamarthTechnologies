import { useState } from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/home/Hero";
import Overview from "./components/home/Overview";
import Services from "./components/home/Services";
import ClientBenefits from "./components/home/ClientBenefits";
import Industries from "./components/home/Industries";
import RecentProjects from "./components/home/RecentProjects";

function App() {
  return (
    <Layout>
      <Hero />
      <Overview />
      <Services />
      <ClientBenefits />
      <Industries />
      <RecentProjects />
    </Layout>
  );
}

export default App;
