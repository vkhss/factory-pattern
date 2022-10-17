import { ICore } from "../../core.interfaces";
import { CoreFactory } from "../../core.factory";
import { DataBase } from "./database";

export class DataBaseFactory extends CoreFactory {
    private static instance: ICore;

    getInstance(): ICore {
        if (!DataBaseFactory.instance) {
            DataBaseFactory.instance = new DataBase();
        }
        return DataBaseFactory.instance;
    }
}