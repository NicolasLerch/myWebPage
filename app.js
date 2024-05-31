const express = require('express');
const app = express();
const path = require('path')
app.use(express.json());
const mainRoutes = require('./src/routes/index.routes')

const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));

app.use('/', mainRoutes)

app.set("view engine", "ejs");
app.set('views', 'src/views')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});