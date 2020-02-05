import { Entity } from './Entity.js'
import { EntityBucketManager } from './EntityBucketManager.js'
import { ComponentInitializationManager } from './ComponentInitializationManager.js'
import { ComponentDestructionManager } from './ComponentDestructionManager.js'
import { EntityBlueprintManager } from './EntityBlueprintManager.js'

export class EntityManager {
    
    componentInitializationManager = new ComponentInitializationManager () 
    componentDestructionManager = new ComponentDestructionManager () 
    entityBucketManger = new EntityBucketManager ()
    blueprintManager : EntityBlueprintManager = new EntityBlueprintManager () ;

    createBucket ( searchNames : string[] ) { 
        return this.entityBucketManger.createBucket( searchNames )
    }
    createInitilizationCallback ( component : string, callback : any ) {
        return this.componentInitializationManager.addNewCallback( component, callback )
    }
    createDistructionCallback ( component : string, callback : any ) {
        return this.componentDestructionManager.addNewCallback( component, callback )
    }

    addComponentToEntity ( entity : Entity, component : string, data : any) {

        entity.components[ component ] = data;
        entity.componentNames.add( component )

        this.entityBucketManger.componentAdded( component, entity )
        this.componentInitializationManager.componentInitialized( component, entity )
    }

    removeComponentFromEntity ( entity : Entity, component : string ) {
        
        this.entityBucketManger.componenetRemoved( component, entity )
        this.componentDestructionManager.componentDestroyed( component, entity )

        entity.componentNames.delete( component )
        delete entity.components[ component ]
    }

    spawnNewEntity () {
        return new Entity( this )
    }
    spawnEntityFromBlueprint ( blueprint : string, data : any ) {
        this.blueprintManager.instantiateFromBlueprint( blueprint, this, data )
    }
    removeEntity ( entity : Entity ) {
        let components = [... entity.componentNames ]
        components.forEach( c => this.removeComponentFromEntity( entity, c ) )
    }

}
