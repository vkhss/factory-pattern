
// // -------- IMPORTING CLASS DIRECTLY
// import { WebServer } from "./adapters/core/imp/webserver/webserver"
// import { DataBase } from "./adapters/core/imp/database/database"

// const webserver = new WebServer()
// const database = new DataBase()

// try {
//     database.start()
//     webserver.start()
// } catch (error) {
//     console.log("Unexpected Error!")
//     console.log(error)

// }



// --------- IMPORTING PATTER FACTORY
import { WebServerFactory } from "./adapters/core/imp/webserver/webserver-factory"
import { DataBaseFactory } from "./adapters/core/imp/database/database-factory"

const webserver = new WebServerFactory()
const database = new DataBaseFactory()

try {
    webserver.start()
    database.start()

} catch (error) {
    console.log("Unexpected Error!")
    console.log(error)
}