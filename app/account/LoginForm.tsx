import { View, Text } from 'react-native';

export default function Account() {
    return(
        <View>
            <div className="card mt-1 no_auctions">
                <p className="bid-title card-header" id="page_title"><em></em></p>
                <div className="col-md-4 col-xs-9 m-1">
                    <p className="text-bld login-text">New to RapidAuctionSoftDemo</p>
                    <p>Welcome to  RapidAuctionSoftDemo A fun and exciting, fast-paced auction website. Unlike other auction websites, you can win all sorts of popular products at incredibly low prices. First, you must register before you can participate in any of our auctions. Simply click the registration button below to get started </p>
                    <a href="{SERVER}/account/registration/?redirect=" id="register-now" className="btn btn-primary">Register Now!</a>
                </div>
                <div className="col-md-6 col-xs-9 m-1">
                    <form method="post" action="/account/password" id="MasterLoginForm" data-gtm-form-interact-id="0">
                        <div className="form-group form-floating">
                            <input name="username" id="username2" type="text" className="form-control" value="" autocomplete="username" required="" data-gtm-form-interact-field-id="0" />
                            <label>Username Or Email:</label>
                        </div>
                        <div className="form-group form-floating">
                            <input name="password" className="form-control" id="password" type="password" required="" value="" autocomplete="current-password" data-gtm-form-interact-field-id="1" />
                            <label>Password:</label>
                            <i className="fas fa-eye"></i>
                        </div>
                        <div className="wraps">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td align="left">
                                            <a href="https://demo.pennyauctionsoftware.net//accountforgotpassword/?redirect=" rel="nofollow">Forgot Password</a>
                                        </td>
                                        <td align="right">
                                            <a href="https://demo.pennyauctionsoftware.net//wizard/registration/?redirect=" rel="nofollow">Sign Up  now</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <input type="hidden" name="ajax" value="1" />
                            <input type="hidden" name="redirect" value="" />
                            <input name="login" value="Login" className="btn btn-primary w-100" type="submit" />
                        </div>
                        <div className="col-12 social_links">
                            <a href="https://demo.pennyauctionsoftware.net//accountfacebook" className="d-inline-block float-left facebook-bg"><i className="fab fa-facebook-square float-left"></i><span className="float-right">Login with Facebook!</span></a>
                            <a href="https://demo.pennyauctionsoftware.net//accountgoogle" className="d-inline-block float-right google-bg"><i className="fab fa-google-plus-square float-left"></i><span className="float-right">Login with Google!</span></a>
                        </div>
                    </form>
                </div>
            </div>
        </View>
    );
}
