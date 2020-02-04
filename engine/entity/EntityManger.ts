import { Entity } from './Entity.js'
import { EntityBucketManager } from './EntityBucketManager.js'
import { ComponentInitializationManager } from './ComponentInitializationManager.js'

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
        entity.componentNames.add( component )

        this.entityBucketManger.componentAdded( component, entity )
        this.componentInitializationManager.componentInitialized( component, entity )
    }

    spawnNewEntity () {
        return new Entity( this )
    }

}
