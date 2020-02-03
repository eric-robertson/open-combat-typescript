import { entityInterface } from '../entity/EntityManger.js'

interface componentBucketInterface {
    targetComponents : Set<String> 

}


export class ComponentManager {

    componentBuckets : componentBucketInterface[] = [] 

    constructor() {}


}

