const express = require('express')
const app = express()

const allRoutes = require("./routes")

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.use(allRoutes)

app.listen(PORT, () => {
    console.log("App listening on port " + PORT)
})