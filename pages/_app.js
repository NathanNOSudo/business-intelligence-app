import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/flaticon.css";
import "../public/css/fontawesome.min.css";
// import '../node_modules/react-modal-video/css/modal-video.min.css';
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
// import "../scss/LoginPage.scss";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      700
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>BI Cube - Business Intelligence Cube</title>
          <meta
            name="description"
            content="BI Cube - Business Intelligence Cube"
          />
          <meta
            name="og:title"
            property="og:title"
            content="BI Cube - Business Intelligence Cube"
          ></meta>
          <meta
            name="twitter:card"
            content="BI Cube - Business Intelligence Cube"
          ></meta>
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="50" delayInMs="10.50" />
      </React.Fragment>
    );
  }
}
