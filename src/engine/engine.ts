import {BaseSystem} from '../systems/BaseSystem';
import { SystemManager } from './system/SystemManager';
import { ComponentManager } from './component/ComponentManager';
import { EntityManager } from './entity/EntityManger';

export class Engine {
  systemManager: SystemManager;
  componentManager: ComponentManager;
  entityManager: EntityManager;

  constructor() {}

  startGameLoop() {}

  gameloop() {}

  endGameLoop() {}

  registerSystem(system: BaseSystem) {
    
  }
}