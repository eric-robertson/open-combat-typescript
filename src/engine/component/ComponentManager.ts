import { entityType } from '../entity/EntityManger.js'

interface ComponentBucketInterface {
    targetComponents : Set<String> 
    entities : entityType[] 
}
export class ComponentManager {
    // Buckets to make objects easily searchable
    componentBuckets : ComponentBucketInterface[] = [] 
    constructor() {}
}

