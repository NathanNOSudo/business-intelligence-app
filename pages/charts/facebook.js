import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ChartsFacebookContent from "../../components/Charts/ChartsFacebookContent";
import Footer from "../../components/Layouts/Footer";

class Charts extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="Charts"
          breadcrumbTextOne="Explore"
          breadcrumbTextTwo="Facebook"
          breadcrumbUrl="/explore"
        />
        <ChartsFacebookContent />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Charts;
