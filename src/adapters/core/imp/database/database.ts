import { ICoreFactory } from "../../core.interfaces";

export class Database implements ICoreFactory {

    start(configuration?: any) {
        console.log("[Database] - Inicializando Conexão com o Banco de dados!")

    }

    stop(configuration?: any) {
        console.log("[Database] - Encerrando Conexão com o Banco de dados!")

    }


}