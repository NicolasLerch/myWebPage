const express = require('express');
const path = require('path')
const mainRoutes = require('./src/routes/index.routes');
const { url } = require('inspector');
const app = express();

app.use(express.json())
// app.use(urlencoded({extended: false}))

const port = parseInt(process.env.PORT) || process.argv[3] || 3000;
app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'src/views'))
  .set('view engine', 'ejs');

app.use('/', mainRoutes)


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})