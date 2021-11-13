const express = require('express');
const router = express.Router();

//Movies
const ListMovies = require('../src/Controllers/Movies/index');
const CreateMovie = require('../src/Controllers/Movies/create');
const UpdateMovie = require('../src/Controllers/Movies/update');
const ViewMovie = require('../src/Controllers/Movies/view');
const DeleteMovie = require('../src/Controllers/Movies/delete');
const MovieValidator = require("../src/Validator/MovieValidator");

router.get('/movies',  ListMovies);
router.get('/movie/:id', ViewMovie);
router.post('/movie', MovieValidator, CreateMovie);
router.put('/movie/:id', MovieValidator ,UpdateMovie);
router.delete('/movie/:id', DeleteMovie);

//Categories
const ListCategories = require('../src/Controllers/Categories/index');
const CreateCategory = require('../src/Controllers/Categories/create');
const CategoryValidator = require("../src/Validator/CategoryValidator");

router.get('/categories',  ListCategories);
router.post('/category', CategoryValidator, CreateCategory);

//Users
const ListUsers = require('../src/Controllers/Users/index');
const CreateUser = require('../src/Controllers/Users/create');
const UserValidator = require("../src/Validator/UserValidator");


router.get('/users',  ListUsers);
router.post('/user', UserValidator, CreateUser);


module.exports = router;










/*
    MVC -> Model, view e controller
    Model -> Responsavel pelos dados e pelo negocio. Entities/Schemas
    View -> Apresentação / HTML/CSS/JS -> SPA (React, ANgular), APP
    Controller -> Meio de campo da aplicação. Responsavel pelo fluxo do programa.

    API / REST / WebService
    SOAP -> XML -> Schema 
    REST -> endpoints -> verbos HTTP -> (GET, POST, PUT/PATCH, DELETE, OPTIONS, HEAD)
    {
        "id": 1,
        "nome": "Mouse Gamer",
        "descricao": "Mouse RGB Gamer que ajuda na sua "
    }

    PUT
    {
        "id": 1,
        "nome": "Mouse Gamer RGB",
        "descricao": "Mouse RGB Gamer que ajuda na sua "
    }
*/
