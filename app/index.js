import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import publicIP from 'react-native-public-ip';
import SearchForm from "./SearchForm";
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
    <View>
    <header>
        <div className="float-left"></div>
        <div className="float-right">
          <div className="languages dropdown">
            <a alt="Read More In:  english" title="Read More In:  english" className=" dropdown-toggle lang" id="ToggleLanguages">
              <i className="flag flag-"></i>
            </a>
            <ul id="list-languages" className="dropdown-menu" aria-labelledby="#ToggleLanguages"></ul>
          </div>
          <div id="right-social" className="float-right w-80 text-right col-xl-8"></div>
          <div id="login-wrapper"></div>
        </div>
      </header>
      <nav className="navbar no-gutters p-0 dropdown" id="nav">
        <i id="mobile-trigger" className="fas fa-bars float-right dropdown-toggle"></i>
        <ul className="top_menu list-unstyled mr-auto d-block"></ul>
      </nav>
     <SearchForm />
      <div className="container" id="main">
        <div className="tab-area">
          <div id="horizontal-auctions-box"></div>
         </div>
        <div id="flash_message"></div>
      </div>
      <section>
        <footer className="no-gutters">
          <div className="d-flex">
              <div className="col-md-3 col-xs-12" id="footertopleft">
                <p></p>
                <nav><ul></ul></nav>
              </div>
              <div className="col-md-3 col-xs-12" id="footertopmiddle">
                <p></p>
                  <nav><ul></ul></nav>
              </div>
              <div className="col-md-3 col-xs-12" id="footertopright">
                <p></p>
                  <nav><ul></ul></nav>
              </div>
              <div className="col-md-3 col-xs-12" id="marketplace">
                <p></p>
                  <nav><ul></ul></nav>
              </div>
          </div>

          <div id="footer-right">
                <p></p>
              <div className="float-left col-md-12 col-xs-12" id="footersocial"></div>
          </div>
          <div id="copyright" className="row">
              <span className="col-md-4 col-xs-0"></span>
              <span className="col-md-4"></span>
              <span className="col-md-4 col-xs-0"></span>
          </div>
        </footer>
      </section>
      <div id="new_toolbar">
        <span className="d-inline-block float-right mr-2" id="user_badges"></span>
      </div>
    </View>
  );
}
