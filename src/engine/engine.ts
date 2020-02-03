import {BaseSystem} from '../systems/BaseSystem';
import { SystemManager } from './system/SystemManager';
import { ComponentManager } from './component/ComponentManager';
import { EntityManager } from './entity/EntityManger';

export class Engine {
  systemManager: SystemManager;
  componentManager: ComponentManager;
  entityManager: EntityManager;
  gameLoopInterval: any;

  constructor() {}

  startGameLoop(targetFrameRate: number) {
    let updateSpeed = 1000 / targetFrameRate
    this.gameLoopInterval = setInterval( () => {
      this.systemManager.runSystems();
    }, updateSpeed)
  }

  endGameLoop() {
    clearInterval(this.gameLoopInterval);
  }

  registerSystem(system: BaseSystem) {
    
  }
}