import { BaseSystem } from './system/SystemManager'
import { SystemManager } from './system/SystemManager';
import { EntityManager } from './entity/EntityManger';

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