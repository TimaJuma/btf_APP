module.exports = function(router, database) {

  router.get('/items', (req, res) => {
    console.log('req.query: ',req.query)
    database.getAllProperties(req.query, 1000000)
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
    database.getAllReservations(userId)
    .then(reservations => res.send({reservations}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  router.post('/items', (req, res) => {
    console.log('req:', req);
    console.log('res:', res);
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
    console.log(req.body);
    req.body.user_id = req.session.userId;
    database.addToFavorites(req.body);
  })

  router.post('/favorites/delete', (req,res) => {
    console.log(req.body);
    req.body.user_id = req.session.userId;
    database.removeFavs(req.body);
  })

  return router;
}