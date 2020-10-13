module.exports = function(router, database) {

  router.get('/items', (req, res) => {
    database.getAllProperties(req.query, 200)
    .then(properties => res.send({properties}))
    .catch(e => {
      console.error(e);
      res.send(e)
    }); 
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }

    database.getMyFavs(userId)
    .then(reservations => {
      res.send({reservations})
    })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });


  router.get('/messages', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    database.getAllMsg()
    .then(messages => res.send({messages}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });


  router.post('/items', (req, res) => {
    const userId = req.session.userId;
    database.addProperty({...req.body, user_id: userId})
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });

  


  router.post('/favorites', (req,res) => {
    req.body.user_id = req.session.userId;
    database.addToFavorites(req.body);
  })

  router.post('/favorites/delete', (req,res) => {
    req.body.user_id = req.session.userId;
    database.removeFavs(req.body);
  })


  router.post('/messages', (req,res) => {
    req.body.sender_id = req.session.userId;
    res.send(req.body);
    database.addMessage(req.body);
  })

  return router;
}