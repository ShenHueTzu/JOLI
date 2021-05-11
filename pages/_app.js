import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
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
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MainApp;
