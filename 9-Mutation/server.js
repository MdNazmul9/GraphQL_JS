var express = require('express');
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

var userData = require('./users.json');

let fakeDb = [
    {id: 1, name: 'Office', rent: '$25'},
    {id: 2, name: 'Co-Working', rent: '$10'},
]

var schema = buildSchema(`
    type Person{
        id: Int
        name: String
        email: String
        pet: String
        petName: String
       
    }

    type Space{
        name: String
        rent: String
    }

    type Query{
        users: [Person]
        user(id:Int): Person
        getMsg: String
    }

    type Mutation{
         addMsg(msg:String): String
         createSpace(name:String, rent:String): Space

        }


`)


var root = {
    users: () => userData,
    user: ({id}) => userData.find(user => user.id === id),
    addMsg: ({ msg }) => fakeDb.message = msg,
    getMsg: () => fakeDb.message,
    createSpace: ({name, rent}) => (fakeDb[3] = { id:3, name, rent }),
   
}


var app = express()
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen('4000')

console.log('Congratulations')



