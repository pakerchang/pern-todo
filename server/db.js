const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "psql",
    host : "localhost",
    port : 5432,
    database: "tododata",

});


module.exports = pool;
