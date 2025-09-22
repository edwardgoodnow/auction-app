import { View, Text } from 'react-native';

export default function Header() {
    return (
        <>
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
      </>
      );
}
