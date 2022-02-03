var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");




var schema = buildSchema(`

    type Profile{
        id: Int
        isGenarated: Boolean
    }
    type Developer{
        name: String,
        email: String
        experience: Int
        profile: Profile

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
        return { name: "Md. Nazm,ul Hossain", email: "mn@mn.com", experience: "3", profile: { id: 5,
            isGenarated: 0}}
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