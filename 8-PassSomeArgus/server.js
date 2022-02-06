var express = require('express');
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

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
        user(id:Int): Person
    }

`)


var root = {
    users: () => userData,
    user: ({id}) => userData.find(user => user.id === id)
   
}


var app = express()
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen('4000')

console.log('Congratulations')



