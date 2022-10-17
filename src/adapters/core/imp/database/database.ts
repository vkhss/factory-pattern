import { ICore } from "../../core.interfaces";

export class DataBase implements ICore {

    public start(): void {
        console.log(`[DATABASE] - Inicializando Conexão!`)
    }

    public stop(): void {
        console.log(`[DATABASE] - Encerrando Conxeão!`)
    }
}