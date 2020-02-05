import {Engine} from '../build/engine/Engine.js';

import { files as Systems } from '../build/systems/_index.js'
import { files as Blueprints } from '../build/blueprints/_index.js'

let engine = new Engine();

Systems.forEach( system => engine.registerSystem( system ))
Blueprints.forEach( blueprint => engine.registerBlueprint( blueprint ))

engine.startGameLoop(20);