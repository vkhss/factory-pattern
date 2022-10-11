import { coreFactory } from "./instances"


try {
    coreFactory.start()
    coreFactory.stop()

} catch (error) {
    console.log("Unexpected Error!")
    console.log(error)
}