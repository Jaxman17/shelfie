require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const session = require('express-session');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();
app.use(express.json());


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db Connected')
})


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))


// Endpoints //
app.post('/api/login', ctrl.login);
app.post('/api/register', ctrl.register);
app.post('/api/logout', ctrl.logout);
// app.get('/api/posts/:userid', ctrl.getPosts);
// app.post('/api/post/:id', ctrl.post);
// app.get('/api/post/:postid', ctrl.getPost);



const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on: ${port}`));