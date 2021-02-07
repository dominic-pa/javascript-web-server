const express = require('express')
const bodyParser = require('body-parser');
const apiRoutes = require("./routes");

const app = express()
const port = 3000

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Shuddwerk Studios',
    });
})

app.use('/api/v1', apiRoutes);


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})