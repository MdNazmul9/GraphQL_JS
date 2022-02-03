var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");



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
        return [
            { name: "Nazmul",
            email: "nazmul.cse48@gmail.com"},
            { name: "Rafiqul",
            email: "rafiqul@gmail.com"},
            { name: "Munna",
            email: "munna@gmail.com"},
            { name: "Subho",
            email: "subho@gmail.com"},
        ]
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