import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import publicIP from 'react-native-public-ip';



export default function MyAuctionsHolder() {
    return (
    <View>
    <div className="card">
        <h2 className="card-header"><em id="page_title"></em></h2>
        <div className="card-body">
            <div id="horizontal-auctions-box"><div id="MyAuctionsHolder"></div></div>
            <div id="content-overlay-loading"></div>
        </div>
    </div>
    </View>
    );
}
