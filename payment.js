import React from 'react'
import WebView from 'react-native-webview'

export default function Payment ({route}) {
  const { items } = route.params;
  return (
    <WebView source={{ uri: 'https://payment-gateway-neon.vercel.app/' }}>
    </WebView>
  );
}
