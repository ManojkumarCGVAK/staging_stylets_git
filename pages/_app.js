import { Provider, useDispatch  } from "react-redux";
// import {useStore} from "../store/store";
import {useStore} from "../store/store_dev";
import ScrollToTop from "../util/ScrollToTop";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Head from "next/head";
import Script from "next/script";
import {Component, Fragment, useEffect} from 'react'
import {ThemeProvider,createTheme} from '@material-ui/core/styles'

import "../public/bootstrap.min.css";
import "../public/cookieconsent.min.css";
import "../lib/hamburgers.min.css";
import "../sass/main.scss";

import { getSavedPropertiesCount } from "../actions/propertiesActions";

const MyApp = ({ Component, pageProps }) =>  {
    const store = useStore(pageProps.initialReduxState)
return <Fragment>
   <Head>
        <meta charsSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Provider store={store}>
        <ScrollToTop>
          <Layout>
            <Script src="https://kit.fontawesome.com/c8ec6b1d14.js"  strategy="lazyOnload"/>
            <Component {...pageProps} />
          </Layout>
        </ScrollToTop>
      </Provider>
    </Fragment>
  
}

export default MyApp;


const theme = createTheme({
  zIndex:{
    modal:6000
  }
});




const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedPropertiesCount());
  }, []);

  return <Fragment>
      <Header />
      <span className="min__full">
      <ThemeProvider theme={theme}>
        {children}
          </ThemeProvider>
          </span>
      <Footer />
    </Fragment>
};
