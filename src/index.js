import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import 'dotenv/config'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import db from './keys'
import StudentInfo from './models/studentinfo'
import ResultInfo from './models/resultinfo'
import EnrollmentInfo from './models/enrollmentinfo'

mongoose.connect(db.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        StudentInfo,
        ResultInfo,
        EnrollmentInfo
    }
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
