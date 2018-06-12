import {createConnection, Connection} from "typeorm";

export async function createDatabaseConnection() {
   // here createConnection will load connection options from
   // ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml
   // files, or from special environment variables
   await createConnection();   
}
