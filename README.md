# BTF Sales. Application for buying and seling things online!

## Login + Search + Chatting.

!['Login + Search + Chatting'](https://github.com/TimaJuma/btf_APP/blob/master/README%20DOCS/BTF_Login%2BSearch%2BChatting.gif)

## Create new Adding.

!['Creating new add'](https://github.com/TimaJuma/btf_APP/blob/master/README%20DOCS/BTF_CreateAdd.gif)

## Adding to favourites.

!['Adding to favourites'](https://github.com/TimaJuma/btf_APP/blob/master/README%20DOCS/BTF_AddingToFav.gif)

## Project Structure.

```
├── public
│   ├── index.html
│   ├── javascript
│   │   ├── components
│   │   │   │── add_to_favorites.js
│   │   │   ├── header.js
│   │   │   ├── home_search.js
│   │   │   ├── home-header.js
│   │   │   ├── login_form.js
│   │   │   ├── main-search.js
│   │   │   ├── messages.js
│   │   │   ├── modal.js
│   │   │   ├── more_info.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   │   ├── top_search.js
│   │   ├── index.js
│   │   ├── libraries
│   │   ├── network.js
│   │   └── views_manager.js
│   └── styles
├── sass
└── server
  ├── apiRoutes.js
  ├── database.js
  ├── json
  ├── server.js
  └── userRoutes.js
```

## Project features

&#10003; &nbsp; **Search for items** by title. <br/>
&#10003; &nbsp; **Advanced search** with wider functionality (you can search by title, city, min and max price).<br/>
&#10003; &nbsp; **Adding to favourites** (or removing) by pressing the "heart" button.<br/>
&#10003; &nbsp; **More info** button(if you want to know more about item). Just press that button!<br/>
&#10003; &nbsp; **Messaging** with owner of the item. If you are the owner you can see all incoming messages and all the details about sender.<br/>
&#10003; &nbsp; **Creating** a new post.<br/>
&#10003; &nbsp; You can see the **list of your items**.<br/>
&#10003; &nbsp; You can **search** even if you are not logged in.<br/>

## Overview

- `public` contains all of the HTML, CSS, and client side JavaScript.
  - `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  - `javascript` contains all of the client side javascript files.
    - `index.js` starts up the application by rendering the listings.
    - `network.js` manages all ajax requests to the server.
    - `views_manager.js` manages which components appear on screen.
    - `components` contains all of the individual html components. They are all created using jQuery.
- `sass` contains all of the sass files.
- `server` contains all of the server side and database code.
  - `server.js` is the entry point to the application. This connects the routes to the database.
  - `apiRoutes.js` and `userRoutes.js` are responsible for any HTTP requests to `/users/something` or `/api/something`.
  - `json` is a directory that contains a bunch of dummy data in `.json` files.
  - `database.js` is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from `.json` files.
