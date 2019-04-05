import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Profile from "../components/profile";
import Experience from "../components/experience";
import Education from "../components/education";
import Certificates from "../components/certificates";
import Skills from "../components/skills";
import ToolsTechnologies from "../components/tools-technologies";
import Projects from "../components/projects";
import Awards from "../components/awards";

import data from "../data/data.json";

const IndexPage = () => (
  <Layout className="font-sans">
    <SEO
      title="Home"
      keywords={[
        `Ryan Crosser`,
        `Crosser`,
        `resume`,
        `digital resume`,
        `gatsby`,
        `application`,
        `react`
      ]}
    />

    <Profile data={data.resumeData.profile} />
    <Experience data={data.resumeData.experience} />
    <Education data={data.resumeData.education} />
    <Skills data={data.resumeData.skills} />
    <Certificates data={data.resumeData.certificates} />
    <ToolsTechnologies data={data.resumeData["tools-technologies"]} />
    <Projects data={data.resumeData.projects} />
    <Awards data={data.resumeData.awards} />
  </Layout>
);

export default IndexPage;
