const express =  require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/graphql_schema');

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  // gui testing 
  graphiql: true
}));

app.listen(8080, ()=>{
  console.log(`listening on port 8080`);
});