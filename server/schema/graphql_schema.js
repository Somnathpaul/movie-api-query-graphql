const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql;

// dummy data:

var amazon_Prime =[
  {id:'1',name: 'Inside Edge', Year: '2017', imDb: '8/10', no_of_episodes: '20', no_of_seasons: '2', genre: 'N/A'},
  {id:'2',name: 'Made In Haven', Year: '2019', imDb: '8.3/10', no_of_episodes: '9', no_of_seasons: '1', genre: 'Drama'},
  {id:'3',name: 'Breathe', Year: '2018', imDb: '8.4/10', no_of_episodes: '8', no_of_seasons: '1', genre: 'crime'},
  {id:'4',name: 'Laakhon Mein Ek', Year: '2017', imDb: '8.3/10', no_of_episodes: '14', no_of_seasons: '2', genre: 'Drama'},
];

// for amazon prime

const amazonPrimeType = new GraphQLObjectType({
  name: 'amazonPrime',
  fields: ()=>({
    // GraphQLID that converts into string
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    year: {type: GraphQLString},
    imDb_rating: {type: GraphQLString},
    no_of_episodes: {type:GraphQLString},
    no_of_seasons: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    amazonPrime: {
      type: amazonPrimeType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        // code to get data from db
        return _.find(amazon_Prime, {id: args.id} )
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});