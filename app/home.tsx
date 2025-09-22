import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import publicIP from 'react-native-public-ip';
import SearchForm from "./SearchForm";
import Header from "./Header";
import Footer from "./Footer";
import {SERVER, TEMPLATE, SUB_TEMPLATE} from "./constants";


export default function Home() {
  useEffect(()=> {
  publicIP()
    .then(ip => {
        fetch(`${SERVER}` + '/api/session/?ip=' +ip, {
            "method": 'GET',
            "credentials": 'include'
        })
      .then(response => response.json())
      .then(response => {
                const SETTINGS     = response.SETTINGS;
                SETTINGS.data = response.data;
                const SITE_HOST    = window.location.host;
                const LANG         = response.LANG;
                localStorage.setItem('LANG', JSON.stringify(LANG));
                const ENGLISH      = response.ENGLISH;
                localStorage.setItem('ENGLISH', JSON.stringify(ENGLISH));
                localStorage.setItem('cookies', JSON.stringify(response.data.cookies));
                localStorage.setItem('SETTINGS', JSON.stringify(SETTINGS));
            var script = document.createElement('script');

            script.src = `${SERVER}` + '/assets/js/socket.io.min.js';
            script.type = 'module';
            script.async = true;
            document.body.appendChild(script);

            var script = document.createElement('script');

            script.src = `${SERVER}` + '/assets/js/src/main.js';
            script.type = 'module';
            script.async = true;

            document.body.appendChild(script);


            var css = document.createElement('link')
            css.rel = 'stylesheet';
            css.href = `${SERVER}` + '/assets/fonts/fontawesome/css/all.min.css';
            document.body.appendChild(css);




            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = `${SERVER}` + '/assets/css/all.css';
            document.body.appendChild(css);

            var css = document.createElement('link')
            css.rel = 'stylesheet';
            css.href = `${SERVER}` + '/assets/css/bootstrap.min.css';
            document.body.appendChild(css);

            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = `${SERVER}` + '/assets/css/' + `${TEMPLATE}` + '.css';
            document.body.appendChild(css);

            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = `${SERVER}` + '/assets/css/' + `${SUB_TEMPLATE}` + '/style.css';
            document.body.appendChild(css);

            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = `${SERVER}` + '/assets/css/maps.css';
            document.body.appendChild(css);

      });
    });
  },[]);

  return (
    <>
      <Header />
      <SearchForm />
      <div className="container" id="main">
        <div className="tab-area">
          <div id="horizontal-auctions-box"></div>
         </div>
        <div id="flash_message"></div>
      </div>
      <Footer />
    </>
  );
}
