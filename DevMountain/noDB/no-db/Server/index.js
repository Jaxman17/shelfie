const express = require('express');
const favCtrl = require('./Controllers/favoritesCtrl');
const starCtrl = require('./Controllers/starsCtrl')



const app = express();
app.use(express.json());


//// stars ///
app.get('/api/starList', starCtrl.getStars);



////// favs /////

app.get('/api/favList', favCtrl.getFav)
app.post('/api/favList', favCtrl.addToFav)
app.put('/api/favList/:id', favCtrl.changeName)
app.delete('/api/favList/:id', favCtrl.removeFav)


app.listen(4020, () => console.log('Server running on 4020'));

