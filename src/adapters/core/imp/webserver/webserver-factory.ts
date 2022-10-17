import { ICore } from "../../core.interfaces";
import { CoreFactory } from "../../core.factory";
import { WebServer } from "./webserver";

export class WebServerFactory extends CoreFactory {
    private static instance: ICore;


    //método responsável por pegar a instancia do webserver! 
    getInstance(): ICore {
        if (!WebServerFactory.instance) {
            WebServerFactory.instance = new WebServer();
        }
        return WebServerFactory.instance;
    }
}