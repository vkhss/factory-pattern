import { ICoreFactory } from "./core.interfaces";
import { Database } from "./imp/database/database";
import { Webserver } from "./imp/webserver/webserver";


export class CoreFactoryInstances {

    private static instances: ICoreFactory[];
    public static getInstances(): ICoreFactory[] {
        if (!this.instances) {
            this.instances = [
                new Database(),
                new Webserver()
            ]
        }
        return this.instances
    }
}


export class CreateCoreFactory implements ICoreFactory {
    private adapters: ICoreFactory[] = CoreFactoryInstances.getInstances();

    private static instance: CreateCoreFactory;

    public static getInstance(): CreateCoreFactory {
        if (!this.instance) {
            this.instance = new CreateCoreFactory();
        }
        return this.instance;
    }

    start(configuration?: any): void {
        this.adapters.forEach((service) => {
            service.start();
        });
    }

    stop(configuration?: any): void {
        this.adapters.forEach((service) => {
            service.stop();
        });
    }
}