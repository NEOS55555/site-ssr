// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="baidu-site-verification" content="S6kx3QAdX2" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
          <meta
            name="description"
            content="收集各类，有趣、实用、新奇、沙雕、恶搞又好玩以及各类白嫖动漫，漫画的网站。"
          />
          <meta name="Keywords" content="好玩,有趣,实用,有意思的网站,有趣的网站,好玩的网站,实用的网站,沙雕网站" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}