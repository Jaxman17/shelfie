const starsList = require("./StarsList")

module.exports = {
    getStars(req, res){
        res.status(200).send(starsList);
    },
    addStars(req, res){
        const {name} = req.body;

        const newStars = {
            id,
            name
        };

        id++;

        starsList.push(newStars);

        res.status(200).send(starsList)
    }
}