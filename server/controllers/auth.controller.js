require('dotenv').config();
const Users = require('../models/Users');

class AuthController {
    async getUserStatus (req, res) {

        const key = req.cookies.key;

        if (!key) {
            return res.status(400).json()
        }

        const user = await Users.findOne({key}).then()
        
        if (user) {
            return res.status(202).json()
        } else {
            return res.status(401).json()
        }
    }

    async login(req, res) {
        const {password} = req.body;

        const generateId = (length) => {
            const symbols = "qwertyuiopasdghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
    
            let id = "";
        
            for (let i = 0; i < length; ++i) {
                const randomIndex = Math.floor(Math.random() * length - 1);
                id += symbols[randomIndex];
            }
        
            return id;
        }

        const id = generateId(6);
        const key = generateId(8);

        const systemKey = process.env.PASSWORD

        if (password === systemKey) {
            await new Users({id, key}).save()

            res.cookie('key', key, {httpOnly: true})

            res.status(202).json();
        } else {
            console.log("HERE2")
            res.status(400).json();
        }
    }

    
}

module.exports = new AuthController();