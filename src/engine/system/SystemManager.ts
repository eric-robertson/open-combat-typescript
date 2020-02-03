import {BaseSystem} from '../../systems/BaseSystem';

export class SystemManager {
  systems: Array<BaseSystem>;

  constructor() {
    this.systems = Array<BaseSystem>();
  }

  runSystems() {
    for (let i = 0; i < this.systems.length; i++) {
      this.systems.indexOf(i).run();
    }
  }

  registerSystem(system: BaseSystem) {
    this.systems.push(system);
  }
}