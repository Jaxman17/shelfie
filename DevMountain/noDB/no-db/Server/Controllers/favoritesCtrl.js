const starsList = require("./StarsList")

let favList = [];


module.exports = {

  //Favorites List////

  getFav: (req, res) => {
    res.status(200).send(favList);
  },
  removeFav: (req, res) => {
    const { id } = req.params;
    const newFavList = favList.filter(fav => {
      if (fav.id !== +id) return fav;
    });
    favList = [...newFavList] 
    res.status(200).send(favList);
  },
  changeName: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const starsName = favList.find(element => element.id === +id);
    starsName.name = name;
    res.status(200).send(favList);
  },
  addToFav: (req, res) => {
    const { id } = req.body;
    const favStarIndex = starsList.findIndex(e => e.id === +id)
    // console.log(favSt, id, name)
    // if ( favSt !== -1) {
    //   return res.status(200).send(favList);
    // } else {
    //   let newFavStar = {
    //     name,
    //     id
    //   };

    favList.push({ ...starsList[favStarIndex] });
    return res.status(200).send(favList);
  }
}


