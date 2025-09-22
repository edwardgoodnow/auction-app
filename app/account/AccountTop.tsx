
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function Top() {

return (<View>
            <div id="mybids-box-top" className="content">
                <div className="avatar_box d-table w-100 clearfix">
                <div className="float-right">
                <h1></h1>
                <div><a href="/account/myavatar"><img id="avatar_img" alt="" src="/uploads/avatars/default.png" /></a></div>
                <div><a href="/account/myavatar"></a></div>
                <span>
                    <div id="final_bids_account" className="d-block">
                       <span className="float-left"></span>
                       <strong className="float-right">0</strong>
                    </div>
                    <div id="free_bids_account" className="d-block">
                       <span className="float-left"></span>
                        <strong className="float-right">0</strong>
                    </div>
                    <div id="vendor_bids_account" className="d-block">
                       <span className="float-left"></span>
                        <strong className="float-right">0</strong> <a className="smallFont deduct_from_bank"></a>
                    </div>
                    <div id="member_bids_account" className="d-block">
                       <span className="float-left"></span>
                       <strong className="float-right">0</strong> <a className="smallFont convert_bids"></a>
                    </div>
                </span>
                </div>

                <div className="left">
                    <h2 id="welcome_title"></h2>
                    <div id="account_welcome"></div>
                </div>
            </div>
        </div>
    </View>
    );
}
