import { entityType } from '../entity/EntityManger.js'

interface componentBucketInterface {
    targetComponents : Set<String> 
    entities : entityType[] 
}
export class ComponentManager {

    // Buckets to make objects easily searchable
    componentBuckets : componentBucketInterface[] = [] 

    constructor() {}


}

