import { EntityManager } from './EntityManger.js'

export class Entity {

    componentNames : Set<string>  = new Set<string>()
    components : { [id : string] : any } = {}

    constructor ( private entityManager : EntityManager) {}

    addComponent ( component : string, data : any = {} ) {
        if ( this.components[ component ] == undefined ) 
            this.entityManager.addComponentToEntity( this, component, data )
    }
    
    removeComponent ( component : string ) {
        if ( this.components[ component ] != undefined )
            this.entityManager.removeComponentFromEntity( this, component )
    }

    delete () {
        this.entityManager.removeEntity( this )
    }

}