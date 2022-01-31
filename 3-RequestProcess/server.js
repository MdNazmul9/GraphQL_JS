const { application } = require('express');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


schema = buildSchema(`
    type Query{
        name: String
        email: String
    }
`);



var root = {
    name: () => {
        return "Hi Nazmul Hossain"
    },
    email: () => {
        return "mn.cse48@gmail.com"
    },
};


var app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true


}));

app.listen('4000')

console.log("ok")



// [1]
// const result = await fetch('graphql', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },

//     body: JSON.stringify({query: "{name, email}" })

// }) 

// [2]
// result

// [3]
// const data = await result.json();

// [4]