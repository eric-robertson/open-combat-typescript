import {BaseSystem} from '../systems/BaseSystem';
import { SystemManager } from './SystemManager';
import { ComponentManager } from './ComponentManager';
import { EntityManager } from './EntityManger';

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