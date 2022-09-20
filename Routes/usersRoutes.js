const express = require('express');
const router = express.Router();
const users = require('../Users.json')

router.route('/all').get((req, res) => {
    res.send(users)
})
router.route('/').get((req, res) => {
    const {limit} = req.query
    res.send(users.slice(0, limit))
})
router.route('/random').get((req, res) => {
    // const ranNum = Math.floor(Math.random() * 10);
    console.log('random user')
    // res.send(ranNum)
})
router.route('/save').post((req, res) => {
    const user = req.body;
    if (!user.name) {
    res.send("make sure name field")
    }
    if (!user.gender) {
    res.send("make sure gender field")
    }
    if (!user.contact) {
    res.send("make sure contact field")
    }
    if (!user.address) {
    res.send("make sure address field")
    }
    if (!user.photoUrl) {
    res.send("make sure photoUrl field")
    }
  users.push(user);
    res.send(users)
})
router.route('/update/:id').patch((req, res) => {
    const { id } = req.params;
    const { name, gender, contact, address, photoUrl }=req.body;
    const updateUser = users.find(user => user.id === Number(id))
    updateUser.id = id;
    updateUser.name = name;
    updateUser.gender = gender;
    updateUser.contact = contact;
    updateUser.address = address;
    updateUser.photoUrl = photoUrl;
    res.send(updateUser)
})
router.route('/bulk-update').patch((req, res) => {
    
    res.send('update many users')
})
router.route('/delete/:id').delete((req, res) => {
    const { id } = req.params;
    const newUsers = users.filter(user => user.id !== Number(id))
    
    res.send(newUsers)
})
module.exports = router;