let user = {email: '', password: ''};


module.exports = {
    create: (req, res) => {
        let {email, password} = req.body;
        user.email = email;
        user.password = password;
        res.status(200).send(user);
    },
    read: (req, res) => {
        res.status(200).send(user);
    },
    update: (req, res) => {
        let {email, password} = req.body;
        let updateID = req.params.id;
        let userIndex = users.findIndex(users => users.id == updateID)
        let user = user[userIndex]

        user[userIndex] = {
            id: user.id,
            email: user.email,
            password: user.password
        };
        res.status(200).send(users)
    },
    delete: (req, res) => {
        delete req.user;
        res.status(200).send(url(`https://pagecow.com`))
    }
}