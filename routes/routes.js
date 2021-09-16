const express = require('express');
const { usersCollection } = require('../dbCollection/dbCollection');
const router = express.Router();

router.post('/login', (req, res) => {
    const { email, pass } = req.body;
    usersCollection.find({ email, pass })
        .toArray((err, document) => {
            res.send(document[0])
        })
});


router.post('/signup', async (req, res) => {
    const { email, name, pass } = await req.body;
    usersCollection.find({ email, name })
        .toArray((err, document) => {
            if (document.length > 0) {
                res.json({errMessage: 'User already created !'})
            } else {
                usersCollection.insertOne({ name, email, pass })
                    .then(result => {
                        if(result.insertedId){
                            res.json({sucMessage: 'User Created Successfully'})
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }
        })


    console.log(req.body)
})


router.get('/a', (req, res) => {
    res.send('look mom i am using express')
})


module.exports = router;