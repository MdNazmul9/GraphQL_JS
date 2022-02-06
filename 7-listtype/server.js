var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var userData = require('./users.json');

var schema = buildSchema(`

    type Person{
        id: Int
        name: String
        email: String
        pet: String
        petName: String
       
    
 
    }
    type Query{
        users: [Person]
    }
`);

var root = {
    users: () => userData
    
}

var app = express()
app.use('/graphql',graphqlHTTP({
    schema, 
    rootValue: root,
    graphiql: true

}));

app.listen('9000');
console.log("ok");