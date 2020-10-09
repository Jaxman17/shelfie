const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        
        let existingUser = await db.check_username(username);
        existingUser= existingUser[0];


        if (!existingUser) {
            return res.status(409).send('Username does not exist')
        }
        const authenticated = bcrypt.compareSync(password, existingUser.password);

        if(authenticated){
            delete existingUser.password;
            req.session.user = existingUser;
            return res.status(202).send(req.session.user);
        } else {
            return res.status(401).send('Password is incorrect')
        }
    },

    register: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
    
        

        let existingUser = await db.check_username(username);
        existingUser = existingUser[0];

       
        if(existingUser){
            return res.status(409).send('Username is taken :(');
        }
       
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let newUser = await db.register({
            username,
            password: hash
        });
        newUser = newUser[0];
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);
    }

}

