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
        delete req.user;
        res.status(200).send(url(`/api/`))
    }
}