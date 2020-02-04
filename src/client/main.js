import {Engine} from '../engine/Engine';

let engine = Engine();

import { TestSystem } from '../systems/TestSystem'

engine.registerSystem( TestSystem )

engine.startGameLoop(60);