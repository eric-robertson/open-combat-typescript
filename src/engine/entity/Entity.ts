import { EntityManager } from './EntityManger.js'

export class Entity {

    componentNames : Set<string> 
    components : { [id : string] : any }

    constructor ( private entityManager : EntityManager) {}

    addComponent ( component : string, data : any = {} ) {
        if ( component[ component ] == undefined )
            this.entityManager.addComponentToEntity( this, component, data )
    }
    

}