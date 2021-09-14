const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const { client } = require('./dbCollection/dbCollection');


const app = express();
app.use(cors());
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 5000;



client.connect(err => {
  
  
    console.log('database connected');
    console.log(err);
});





app.listen(PORT, () => console.log(`server is running on ${PORT}`))