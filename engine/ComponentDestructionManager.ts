import { Entity } from './Entity.js'

type ComponentDestructionCallback = ( (entity : Entity) => {} )

interface ComponentDestructionCallbackMap { 
    [id : string] : ComponentDestructionCallback []
}

export class ComponentDestructionManager {

    componentInitializationCallbacks : ComponentDestructionCallbackMap = { } 

    addNewCallback ( component : string, callback : ComponentDestructionCallback ) {
        if ( this.componentInitializationCallbacks[component])
            this.componentInitializationCallbacks[ component ].push( callback )
        else
            this.componentInitializationCallbacks[ component ] = [ callback ]
    }

    componentDestroyed ( component : string, entity : Entity ) {
        let callbacks = this.componentInitializationCallbacks[ component ];
        if ( callbacks )
            callbacks.forEach( call => call( entity ))
    }

}