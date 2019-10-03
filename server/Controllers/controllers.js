let users = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let {email, password} = req.data;
        users.push({id, email, password});
        id++;
        res.status(200).send(users);
    },
    read: (req, res) => {
        res.status(200).send(users);
    },
    update: (req, res) => {
        let {email, password} = req.data;
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