import { EntityManager } from './EntityManger';

export class EntityBlueprintManager {

    private blueprints : { [id : string] : any } = {}

    registerBlueprint ( identifier : string, data : any ) {
        this.blueprints[ identifier ] = data;
    }

    instantiateFromBlueprint ( identifier : string, entityManager : EntityManager, componentData : any){

        let newEntity = entityManager.spawnNewEntity();
        let blueprintData = this.blueprints[ identifier ]
        let targetComponents = Object.keys( blueprintData )

        targetComponents.forEach( component => {
            newEntity.addComponent( component, {... blueprintData[component], ... componentData[component] } )
        })
        
        return newEntity
    }


}