import { EntityManager } from './EntityManger.js'

export interface BaseSystem { 
  init : ( (entityManager : EntityManager) => {} )
  run : ( ( number ) => {} ) 
}

export class SystemManager {

    systems : BaseSystem[] = []

    runSystems ( deltaTime : number ) {
		this.systems.forEach( s => s.run ( deltaTime ) )
    }

    registerSystem( system: BaseSystem ) {
    	this.systems.push(system);
    }

    initAllSystems ( entityManager : EntityManager ) {
      this.systems.forEach( sys => sys.init( entityManager ))
    }
}