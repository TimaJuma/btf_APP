// const properties = require('./json/properties.json');
// const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'nuqcrsqy',
  password: 'AUZHcrS7Iqtf9eH5rI6rR9CLLQyCrXg1',
  host: 'lallah.db.elephantsql.com',
  database: 'nuqcrsqy'
})


/* ========================= QUERIES ========================= */

/// USERS ======================================================


// // FROM ELEPH. SQL
// const showWidgets = () => {
//   return pool.query(`
//   SELECT * FROM widgets;`)
//   .then(res => console.log(`FROM DB:`, res.rows))
// }
// exports.showWidgets = showWidgets;

// Get a single user from the database given their email.
const getUserWithEmail = (email) => {
  return pool.query(`
    SELECT *
    FROM users
    WHERE email = $1
    LIMIT 1;
    `, [email])
    .then(res => {
      return res.rows[0];
    })
    .catch(err => {
      console.error('query error', err.stack);
      return null;
    });
};
exports.getUserWithEmail = getUserWithEmail;


// Get a single user from the database given their id.
const getUserWithId = (id) => {
  return pool.query(`
    SELECT *
    FROM users
    WHERE id = $1
    LIMIT 1;
    `, [id])
    .then(res => {
      return res.rows[0];
    })
    .catch(err => {
      console.error('query error', err.stack);
      return null;
    });
};
exports.getUserWithId = getUserWithId;


//  Add a new user to the database. 
const addUser =  (user) => {
  return pool.query(`
    INSERT INTO users (name, email, tel, password) 
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `, [user.name, user.email, user.tel, user.password])
    .then(res => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch(err => {
      console.error('query error', err.stack);
      return null;
    });
};
exports.addUser = addUser;



/// RESERVATIONS ===============================================================================

// Get all reservations for a single user.
const getAllReservations = (guest_id) => {
  return pool.query(`
  SELECT items.*, name, email, tel
  FROM favourites
  JOIN items ON items.id = favourites.item_id 
  JOIN users ON users.id = favourites.user_id
  WHERE users.id = $1;
    `, [guest_id])
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error('query error', err.stack);
      return null;
    });
};
exports.getAllReservations = getAllReservations;


// const addToFavorites = (liked) => {
//   console.log('Adding to FAVS')
//   return pool.query(`
//     SELECT *
//     FROM favourites
//     WHERE item_id = $1 AND user_id = $2;
//     `, [liked.item_id, liked.user_id])
//     .then(res => {
//       if (res.rows) {
//         pool.query(`DELETE FROM favourites WHERE user_id =$1 AND item_id =$2;`, [liked.item_id, liked.user_id])
//       }
//       else {
//         pool.query(`INSERT INTO favourites(user_id, item_id) VALUES($1, $2) RETURNING *`, [liked.item_id, liked.user_id])
//       }
//     })
//     .catch(err => {
//       console.error('query error', err.stack);
//       return null;
//     });
// };
// exports.addToFavorites = addToFavorites;


const addToFavorites = (liked) => {
  console.log('Adding to FAVS')
  return pool.query(`INSERT INTO favourites(user_id, item_id) VALUES($1, $2) RETURNING *`, [liked.user_id, liked.item_id])
    .then(res => res.rows[0])
    .catch(err => {
      console.error('query error', err.stack);
      return null;
    });
};
exports.addToFavorites = addToFavorites;

const removeFavs = (liked) => {
  console.log('Remove from FAVS')
  return pool.query(`DELETE FROM favourites WHERE user_id =$1 AND item_id =$2;`, [liked.user_id, liked.item_id])
    .then(res => res.rows[0])
    .catch(err => {
      console.error('query error', err.stack);
      return null;
    });
};
exports.removeFavs = removeFavs;


/// PROPERTIES

// Get all properties.

// SELECT * FROM items 
// WHERE title LIKE '%able%' AND price > 5000 AND price < 12000 AND city LIKE '%ancouver%';

const getAllProperties = function(options, limit = 10) {
  console.log('getAllProperties is activated');
  const queryParams = [];
  let queryString = `
  SELECT *
  FROM items
  `;

  if (options.title) {
    queryParams.push(`%${options.title}%`);
    queryString += `WHERE title LIKE $${queryParams.length} `;
  }

  if (options.minimum_price) {
    if (queryString.includes('WHERE')) {
      queryString += ` AND `;
    } else {
      queryString += ` WHERE `;
    }

    queryParams.push(Number(options.minimum_price));
    queryString += ` (price / 100 >= $${queryParams.length}) `;
  }

  if (options.maximum_price) {
    if (queryString.includes('WHERE')) {
      queryString += ` AND `;
    } else {
      queryString += ` WHERE `;
    }

    queryParams.push(Number(options.maximum_price));
    queryString += ` (price / 100 <= $${queryParams.length})`;
  }

  if (options.city) {
    if (queryString.includes('WHERE')) {
      queryString += ` AND `;
    } else {
      queryString += `WHERE`;
    }
    queryParams.push(`%${options.city}%`);
    queryString += ` city LIKE $${queryParams.length} `;
  }

  // if (options.owner_id) {
  //   if (queryString.includes('WHERE')) {
  //     queryString += ` AND `;
  //   } else {
  //     queryString += ` WHERE `;
  //   }

  //   queryParams.push(Number(options.owner_id));
  //   queryString += ` owner_id = $${queryParams.length} `;
  // }

  


  // if (options.minimum_rating) {
  //   queryParams.push(Number(options.minimum_rating));
  //   queryString += `HAVING AVG(rating) >= $${queryParams.length} `;
  // }

  queryParams.push(limit);
  queryString += `
  ORDER BY price
  LIMIT $${queryParams.length};
  `;
console.log('Query string:', queryString);
  console.log('QUERY: ', queryString, queryParams);
  return pool.query(queryString, queryParams)
    .then(res => {
      console.log(res.rows);
      return res.rows;
    })
    .catch(err => {
      console.error('query error', err.stack);
      return null;
    });
};

exports.getAllProperties = getAllProperties;


// Add a property to the database
const addProperty = function(property) {
  
  //get the key from passed object
  const propertyKeys = [];
  const propertyValues = [];
  const queryValues = [];


  for (const key in property) {
    if(key === 'price'){
      property[key] = Number(property[key]) * 100;
    }
    propertyKeys.push(key);
    propertyValues.push(`$${propertyKeys.length}`);
    queryValues.push(property[key]);
  }
  

  let addPropQuery = `INSERT INTO items (${propertyKeys.join(', ')}) 
                        VALUES (${propertyValues.join(', ')})
                        RETURNING *;
                        `;

 console.log('QUERY string: ',addPropQuery);
 console.log('QUERY values: ', queryValues)
  return pool.query(addPropQuery, queryValues)
  .then(res => {
    res.rows[0];
  })
  .catch(err => console.err('Query error', err));
}




exports.addProperty = addProperty;
