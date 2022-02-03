var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");



var schema = buildSchema(`

    type Person{
        name: String
        email: [String]
    }
    type Developer{
        profile: Person
        experience: Int
    }
    type Query{
        nazmul: Developer,
        isDeveloper: Boolean

    }

`);

var root = {
    isDeveloper: () =>{
        return  true;
    },
    nazmul: () =>{
        return { experience: "3", profile: { name: "Nazmul Hossain", email: ["Nazmul.cse48@gmail.com"]}}
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