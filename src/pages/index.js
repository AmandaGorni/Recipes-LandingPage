import React from 'react'

import GlobalStyle from '../components/global/globalStyle';
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export default function index() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <GlobalStyle/>
    </div>
  )
}

