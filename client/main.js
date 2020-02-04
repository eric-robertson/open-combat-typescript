import {Engine} from '../build/engine/Engine.js';
import * as TestSystem from '../build/systems/TestSystem.js'

let engine = new Engine();

engine.registerSystem( TestSystem )

engine.startGameLoop(20);