import { BaseSystem } from './SystemManager.js'
import { SystemManager } from './SystemManager.js';
import { EntityManager } from './EntityManger.js';

export class Engine {
		
	systemManager: SystemManager = new SystemManager();
    entityManager: EntityManager = new EntityManager();

	gameLoop: any;

	constructor() {}

	startGameLoop( targetFrameRate: number ) {

		this.systemManager.initAllSystems( this.entityManager )

		let updateSpeed = 1000 / targetFrameRate
		
		this.gameLoop = setInterval( () => {
			this.systemManager.runSystems( 0 ); 
		}, updateSpeed)
	}

	endGameLoop() {
		clearInterval(this.gameLoop);
	}

	registerSystem(system: BaseSystem) {
		this.systemManager.registerSystem( system )
    }

    registerBlueprint ( blueprintModule : any ) {
        this.entityManager.registerBlueprint( blueprintModule )
    }

}