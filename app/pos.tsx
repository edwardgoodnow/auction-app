import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import publicIP from 'react-native-public-ip';
import {SERVER, TEMPLATE, SUB_TEMPLATE} from "./constants";


export default function Pos() {
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
      <div className="search-auctions-large withMapSearch d-none">
        <form acceptCharset="utf-8" id="searchForm" name="searchform" method="post" className="inited">
          <input type="hidden" name="pgno" id="pgno" value="1" />
          <input type="hidden" name="store_id" id="store_id" value="" />
          <input type="hidden" name="gallery" id="gallery" value="" />
          <input type="hidden" name="language" id="language" value="e" />
          <input type="hidden" name="lang" id="lang" value="us" />
          <input type="hidden" id="category" name="category" value="" />
          <input type="hidden" id="pid" name="pid" value="" />
          <input id="searchcat" value="" name="searchcat" type="hidden" />
          <div className="row no-gutters mx-0">
              <div className="col-md-1">
                  <div id="search-options" className="d-inline-block dropdown">
                      <a className="text w-100 dropdown-toggle" id="search_category_title"></a>
                      <ul className="list-unstyled text-left dropdown-menu" id="navbarSupportedContentSearch"></ul>
                  </div>
              </div>
              <div className="col-md-10 form-group location_search_box">
                  <input type="text" id="searchtext" className="txt defaultText  defaultTextActive form-control d-inline-block " name="searchtext" placeholder="Search" value="" autoComplete="off" aria-label="Search" aria-describedby="qbSearchButtonHolder" />
                      <div id="location_search_inner">
                          <input type="text" id="smap_search" className="txt defaultText defaultTextActive form-control d-inline-block started" name="map_search" placeholder="Location" />
                          <span className="search_results"></span>
                      </div>
                  <span className=" input-group-text cursor-pointer" id="qbSearchButtonHolder">
                      <input id="qbSearchButton" type="submit" value="" />
                  </span>
              </div>
          </div>
        </form>
      </div>
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
