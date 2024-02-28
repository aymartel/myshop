# MyShop - Online Store inspired by Tesla

MyShop is an online store developed with NextJS, MongoDB, Node, and MaterialUI, inspired by the design of the official Tesla store.
### Technologies used:
- NextJS
- MongoDB
- Node
- MaterialUI

## To run locally, you need the database.
```
docker-compose up -d
```

* The -d means __detached__



## Configurar las variables de entorno
Rename the file __.env.template__ a __.env__
* MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/myshopdb
```

* Rebuild the node modules and build Next
```
yarn install
yarn dev
```


## Fill the database with testing information

Call!
```
http://localhost:3000/api/seed
```
