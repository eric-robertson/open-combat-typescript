import { Entity } from './Entity.js'

type componentInitializationCallback = ( (entity : Entity) => {} )
interface componentInitializationCallbackMap { [id : string] : componentInitializationCallback }

// Let ids be unique
let id = 0;
let getNextId : (() => number) = () => ++id;

export class EntityManager {
    
    // All entities on the scene are given and ID
    entityMap : { [id: number] : Entity } = {}
    componentInitializationCallbacks : componentInitializationCallbackMap = { } 

    // Calls from the system to setup callbacks and buckets

    createBucket ( searchNames : string[] ) { 
        
    }
    onComponentsCreated ( component : string, callback : componentInitializationCallback ) {
        this.componentInitializationCallbacks[ component ] = callback 
    }

    createBlankEntity () {}

}
