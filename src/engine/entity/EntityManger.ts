import { Entity } from './Entity.js'
import { EntityBucketManager } from './EntityBucketManager.js'
import { ComponentInitializationManager } from './ComponentInitializationManager.js'

// Let ids be unique
let id = 0;
let getNextId : (() => number) = () => ++id;

export class EntityManager {
    
    // All entities on the scene are given and ID
    entities : { [id: number] : Entity } = {}

    componentInitializationManager = new ComponentInitializationManager () 
    entityBucketManger = new EntityBucketManager ()


    createBucket ( searchNames : string[] ) { 
        return this.entityBucketManger.createBucket( searchNames )
    }
    createInitilizationCallback ( component : string, callback : any ) {
        return this.componentInitializationManager.addNewCallback( component, callback )
    }

    addComponentToEntity ( entity : Entity, component : string, data : any) {

        entity.components[ component ] = data;

        this.entityBucketManger.componentAdded( component, entity )
        this.componentInitializationManager.componentInitialized( component, entity )
    }


}
