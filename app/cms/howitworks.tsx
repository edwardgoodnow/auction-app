import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import publicIP from 'react-native-public-ip';
import CMSNavigation from "./CMSNavigation";
import Header from "../Header";
import SearchForm from "../SearchForm";
import Footer from "../Footer";
import {SERVER, TEMPLATE, SUB_TEMPLATE} from "../constants";




export default function HowItWorks() {
 useEffect(()=> {
  publicIP()
    .then(ip => {
        fetch(`${SERVER}` + '/api/session/cms/howitworks/?ip=' +ip, {
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
          <div className="row">
            <div className="col-md-2 d-inline-block d-xs-none float-left">
            <CMSNavigation />
            </div>
            <div className="col-md-9 float-right border-secondary border-radius-8 p-0 d-inline-block d-xs-block mr-1" id="CmsContent">
              <div className="card">
                <h2 className="card-header"><em></em></h2>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
         </div>
        <div id="flash_message"></div>
      </div>
      <Footer />
    </>
  );
}
