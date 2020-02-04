import { BaseSystem } from './system/SystemManager.js'
import { SystemManager } from './system/SystemManager.js';
import { EntityManager } from './entity/EntityManger.js';

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
}