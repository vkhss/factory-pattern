import { ICore } from "../../core.interfaces";

export class WebServer implements ICore {

    public start(): void {
        console.log(`[WEBSERVER] - Inicializando Conexão!`)
    }

    public stop(): void {
        console.log(`[WEBSERVER] - Encerrando Conxeão!`)
    }
}