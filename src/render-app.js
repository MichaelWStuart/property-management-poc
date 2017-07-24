const renderApp = () =>
  `<!doctype html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script src="https://use.fontawesome.com/b329f349e9.js"></script>
    <script>window.production=true</script>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <title>jsk pm</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/static/js/bundle.js"></script>
    </body>
  </html>
  `;

export default renderApp;
