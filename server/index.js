const express = requir('express');
const cors = require('cors');
const path = require('path');

const app = express()

//setting up the endpoint, and we are accessing the path for the file, and the dirname goes into the server, and the ../index.html will go into the deployment-demo folder so we can access file
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})

// its the rendomized port number from Haroku is the env, if we don't have one avialble than we use the 4005
const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Listening on port ${port}`)})