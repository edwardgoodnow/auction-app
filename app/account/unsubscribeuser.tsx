import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import publicIP from 'react-native-public-ip';
import AccountMenu from "./AccountMenu";
import AccountTop from "./AccountTop";
import MyAuctionsHolder from "./MyAuctionsHolder";
import SearchForm from "../SearchForm";
import Header from "../Header";
import Footer from "../Footer";
import {SERVER, TEMPLATE, SUB_TEMPLATE} from "../constants";


export default function UnsuscribeUser() {
 useEffect(()=> {
  publicIP()
    .then(ip => {
        fetch(`${SERVER}` + '/api/session/account/unsubscribeuser/?ip=' +ip, {
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



            document.getElementById('contentSection').innerHTML = response.content;
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

            if (document.querySelector('#contentSection form'))
            document.querySelectorAll('#contentSection form').forEach(f => {
              f.addEventListener('submit', function (ev) {
                ev.preventDefault();
              })
            });

      });
    });
  },[]);

  return (
    <>
      <Header />
      <SearchForm />
      <div className="container" id="main">
        <div className="tab-area">
            <div className="col-md-2 d-inline-block d-xs-none float-left">
              <AccountMenu />
            </div>
            <div id="contentSection" className="col-md-9 float-right border-secondary border-radius-8 p-0 d-inline-block d-xs-block mr-1 no_auctions">
            </div>
         </div>
        <div id="flash_message"></div>
      </div>
      <Footer />
    </>
  );
}
