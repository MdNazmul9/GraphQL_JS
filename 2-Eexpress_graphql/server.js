var express = require("express")
var { graphqlHTTP } = require('express-graphql') 
var { buildSchema } = require('graphql') 


var schema = buildSchema(`
    type Query{
        name: String
        
    }
`);

var root = {
    name: () => {
        return "Hello world"
    },
    email: () => {
        return "nazmul.cse48@gmail.com"
    }
};

var app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000) ;

console.log("Running a GraphQL API server at ");

