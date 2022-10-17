import { ICore } from "./core.interfaces";

export abstract class CoreFactory {
    //Factory Method
    abstract getInstance(): ICore

    start(): ICore {
        const service = this.getInstance();
        service.start()
        return service
    }


    stop(): ICore {
        const service = this.getInstance();
        service.stop()
        return service
    }
}


// import { DataBaseFactory } from "./imp/database/database-factory";
// import { WebServerFactory } from "./imp/webserver/webserver-factory";

// export class CoreFactoryInstances {

//     private static instances: ICore[];
//     public static getInstances(): ICore[] {

//         if (!this.instances) {
//             this.instances = [
//                 new DataBaseFactory(),
//                 new WebServerFactory()

//             ]
//         }
//         return this.instances
//     }
// }
