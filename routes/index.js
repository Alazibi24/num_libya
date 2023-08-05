var express = require('express');

var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {

    database.query('SELECT DISTINCT country FROM country_state_city ORDER BY country ASC', function(error, data){

        res.render('index', { title: 'Express', country_data : data });

    });      

});

router.post('/views/index', function(req, res, next) {

        res.render('index');
});

router.get('/get_data', function(request, response, next){

    var type = request.query.type.toLowerCase();

    var search_query = request.query.parent_value.toLowerCase();

    if(type == 'load_state')
    {
        var query = `
        SELECT  state AS Data  FROM country_state_city 
        WHERE country = '${search_query}' 
        
        `;
    }

    if(type == 'load_city')
    {
        var query = `
        SELECT city AS Data FROM country_state_city 
        WHERE state = '${search_query}' 
        `;
    }

    database.query(query, function(error, data){

        var data_arr = [];

        data.forEach(function(row){
            data_arr.push(row.Data);
        });

        response.json(data_arr);

    });

});


module.exports = router;
