import { ICoreFactory } from "../../core.interfaces";

export class Webserver implements ICoreFactory {

    start(configuration?: any) {
        console.log("[Webserver] - Inicializando Conexão com o Webserver!")
    }

    stop(configuration?: any) {
        console.log("[Webserver] - Finalizando Conexão com o Webserver!")
    }

}