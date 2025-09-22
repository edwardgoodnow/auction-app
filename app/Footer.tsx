import { View, Text } from 'react-native';


export default function Footer() {
    return (
        <>
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
            </>
    );
}
