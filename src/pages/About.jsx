import { useState, useEffect } from "react";

import PageHeading from "../components/PageHeading/PageHeading";
import AboutText from "../components/AboutText/AboutText";

import { fetchFunction } from "../api/fetchAPI";

import dataSeo from "../../public/resource/seo/seo.json";

import { aboutPageEndpoint } from "../constants";

function About() {
  const defaultAbout = {
    content: ""
  };

  const [aboutObj, setAboutObj] = useState(defaultAbout);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetchFunction(aboutPageEndpoint);
        if (response.data) {
          setAboutObj(response.data);
        }
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="wrapper">
      <PageHeading title={"Про нас"} isBigger={true} />
      <AboutText data={dataSeo} aboutObj={aboutObj.content} />
    </div>
  );
}

export default About;
