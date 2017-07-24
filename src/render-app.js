const renderApp = () =>
  `<!doctype html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- ****** faviconit.com favicons ****** -->
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="icon" sizes="16x16 32x32 64x64" href="src/favicon.ico">
    <link rel="icon" type="image/png" sizes="196x196" href="src/favicon-192.png">
    <link rel="icon" type="image/png" sizes="160x160" href="src/favicon-160.png">
    <link rel="icon" type="image/png" sizes="96x96" href="src/favicon-96.png">
    <link rel="icon" type="image/png" sizes="64x64" href="src/favicon-64.png">
    <link rel="icon" type="image/png" sizes="32x32" href="src/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="src/favicon-16.png">
    <link rel="apple-touch-icon" href="src/favicon-57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="src/favicon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="src/favicon-72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="src/favicon-144.png">
    <link rel="apple-touch-icon" sizes="60x60" href="src/favicon-60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="src/favicon-120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="src/favicon-76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="src/favicon-152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="src/favicon-180.png">
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="src/favicon-144.png">
    <meta name="msapplication-config" content="/browserconfig.xml">
    <!-- ****** faviconit.com favicons ****** -->
    <script src="https://use.fontawesome.com/b329f349e9.js"></script>
    <script>window.production=true</script>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <title>aPodments Property Management</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/static/js/bundle.js"></script>
    </body>
  </html>
  `;

export default renderApp;
