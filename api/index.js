const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

var redis = require("redis");
var client = redis.createClient(process.env.REDIS_URL);

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async(req, res) => {

    const jobs = await getAsync('github');
    res.header("Access-Control-Allow-Origin", "*");
    return res.send(jobs);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})