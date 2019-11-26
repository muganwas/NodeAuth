'use strict'
const bcrypt = require('bcrypt');
var users = [];
module.exports.getUsers = (req, res) => {
    res.json(users);
    res.close();
}
module.exports.createUser = async (req, res) => {
    try{
        let { body: { username, password } } = req;
        //const salt = await bcrypt.genSalt();
        /**auto generated salt*/
        const passwordHash = await bcrypt.hash(password, 10);
        //console.log(salt);
        const user = { username, password: passwordHash };
        users.push(user);
        console.log(users)
        res.status(201).send();
    }catch(error){
        res.json({error: error.message})
    }
}
module.exports.login = async (req, res) => {
    const { body: { username, password } } = req;
    const user = users.find( user => user.username === username );
    if(user == null)res.status(400).send("User couldn't be found");
    try{

        if( await bcrypt.compare(password, user.password) ){
            res.send('success');
        }else{
            res.send('Wrong password');
        }

    }catch(error){
        res.json({error: error.message})
    }
}