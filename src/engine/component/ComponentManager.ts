import { entityType } from '../entity/EntityManger.js'

interface componentBucketInterface {
    targetComponents : Set<String> 
    entities : entityType[] 
}

interface componentMapType {
    [id: number] : entityType
}

export class ComponentManager {

    componentBuckets : componentBucketInterface[] = [] 
    componentMap : componentMapType = {} 

    constructor() {}


}

