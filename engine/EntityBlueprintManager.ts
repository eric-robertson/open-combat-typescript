import { EntityManager } from './EntityManger';

export class EntityBlueprintManager {

    private blueprints : { [id : string] : any } = {}

    registerBlueprint ( identifier : string, data : any ) {
        this.blueprints[ identifier ] = data;
    }

    instantiateFromBlueprint ( identifier : string, entityManager : EntityManager, componentData : any,  ){
        let newEntity = entityManager.spawnNewEntity();
        // TOdo fix to include identifier 
        let targetComponents = Object.keys( componentData )
        targetComponents.forEach( component => {
            if ( newEntity.components.has( component )) return;
            newEntity.addComponent( component, componentData.data )
        })
        return newEntity
    }


}