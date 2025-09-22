import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import {Home} from "./home";


export default function RootLayout() {
    const inlineStyle = {
        display: 'none'
    };
    return (
      <Stack initialRouteName={Home} screenOptions={{ headerShown: false }}>
        {/* Define individual screens or groups of screens */}
        <Stack.Screen name="Home" options={{ headerShown: false }} />
        <Stack.Screen name="account"options={{ headerShown: false }} />
        <Stack.Screen name="shopping" options={{ headerShown: false }} />
        <Stack.Screen name="cms" options={{ headerShown: false }} />
        <Stack.Screen name="forum" options={{ headerShown: false }} />
        <Stack.Screen name="pos" options={{ headerShown: false }} />
        {/* More screens can be added here */}
      </Stack>
    );
}
