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
        user.email = email;
        user.password = password;
        res.status(200).send(user)
    },
    delete: (req, res) => {
        user = {email: '', password: ''};
        res.status(200).send(user)
    }
}