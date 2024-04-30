"use node"
import { dataSource } from "./data-source";
import { UserEntity } from "./entity/UserEntity";


let dbInstance = dataSource;
// you can add a try catch
export const dbSource = async () => {

    if(!dataSource.isInitialized) {
        dbInstance = await dataSource.initialize();
    }
    
    return {
        userRepository: dbInstance.getRepository(UserEntity),
    }
}