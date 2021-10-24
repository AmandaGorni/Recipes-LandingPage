import React from 'react'

import GlobalStyle from '../components/global/globalStyle';
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

import { Helmet } from 'react-helmet';

export default function index() {
  return (
    <div>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <Header/>
      <Main/>
      <Footer/>
      <GlobalStyle/>
    </div>
  )
}

