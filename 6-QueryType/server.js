var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

var usersData = require("./users.json");


var schema = buildSchema(`

    type Person{
        name: String
        email: String
    }
   
    type Query{
        users: [Person],
     

    }

`);

var root = {
    
    users: () =>{
        return usersData;
            
    }

};


var app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));
app.listen('4000')
console.log("hello world")