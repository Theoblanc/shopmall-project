require("dotenv").config(); //환경설정 .env
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";


const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ PORT }, () => console.log(`✅ Server running on http://localhost:${PORT}`));
