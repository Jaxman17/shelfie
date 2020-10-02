module.exports = {
    getItems(req, res) {
      const db = req.app.get("db");
  
      db.get_inventory()
        .then(dbInstance => res.status(200).send(dbInstance))
        .catch(err => {
          res.status(500).send({err});
        });
    },
  
    addItems(req, res) {
      const { name, price, url } = req.body;
      const db = req.app.get("db");
      db.post_inventory(name, price, url)
        .then(products => {
          res.status(200).send(products);
        })
        .catch(err => res.status(500).send(err));
    },
  
    editItems(req, res) {
      const { name } = req.body;
      const { price } = req.params;
      const { url } = req.body;
  
      req.app
        .get("db")
        .update_inventory({ name, price, url })
        .then(products => {
          res.status(200).send(products);
        })
        .catch(err => res.status(500).send(err));
    },
  
    deleteItems(req, res) {
      const {name} = req.body;
      const {price} = req.body;
      const {url} = req.body;
      req.app
        .get("db")
        .delete_inventory({name, price, url})
        .then(products => {
          res.sendStatus(200).send(products);
        })
        .catch(err => res.status(500).send(err));
    }
  };