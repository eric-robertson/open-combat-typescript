import { Entity } from './Entity'

type ComponentInitializationCallback = ( (entity : Entity) => {} )

interface ComponentInitializationCallbackMap { 
    [id : string] : ComponentInitializationCallback []
}

export class ComponentInitializationManager {

    componentInitializationCallbacks : ComponentInitializationCallbackMap = { } 

    addNewCallback ( component : string, callback : ComponentInitializationCallback ) {
        if ( this.componentInitializationCallbacks[component])
            this.componentInitializationCallbacks[ component ].push( callback )
        else
            this.componentInitializationCallbacks[ component ] = [ callback ]
    }

    componentInitialized ( component : string, entity : Entity ) {
        let callbacks = this.componentInitializationCallbacks[ component ];
        if ( callbacks )
            callbacks.forEach( call => call( entity ))
    }

}