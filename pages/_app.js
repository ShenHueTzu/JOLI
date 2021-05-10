import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux'
import store from '../redux/store';

import '../helpers/globalStyle.css';

class MainApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };
    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <title>JOLI</title>
          <meta name="viewport" content="viewport-fit=cover" />
          <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MainApp;
