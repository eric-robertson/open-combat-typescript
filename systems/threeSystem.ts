import { EntityManager } from '../engine/EntityManger.js'
import { Entity } from '../engine/Entity.js'
import { EntityBucket } from '../engine/EntityBucketManager.js'

let spawned = false;    // This whole spawned flag should not be in here, just a test
let blockBucket : EntityBucket;
let entitymanager: EntityManager ;

export function init ( entityManager : EntityManager ) {
    
    entitymanager = entityManager

    // Contains all 'blocks' in the scene
    blockBucket = entityManager.createBucket(['block'])

    // Called whenever a new block is created
    entityManager.createInitilizationCallback( 'block', (entity : Entity) => {
        console.log('Component initialized with a block component')
    })
}

export function run () {
    if ( !spawned ){
        spawned = true;
        let created = entitymanager.spawnNewEntity()
        created.addComponent( 'testComponent' )
        testBucket.getEntities( entity => {
            console.log('Entity in bucket', entity )
        })
    }
}