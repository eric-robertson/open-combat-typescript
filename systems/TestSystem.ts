import { EntityManager } from '../engine/entity/EntityManger.js'
import { Entity } from '../engine/entity/Entity.js'
import { EntityBucket } from '../engine/entity/EntityBucketManager.js'

let testBucket : EntityBucket;
let spawned = false;
let entitymanager: EntityManager ;

export function init ( entityManager : EntityManager ) {
    
    entitymanager = entityManager
    testBucket = entityManager.createBucket(['testComponent', 'seccondTestComponent'])

    entityManager.createInitilizationCallback( 'testComponent', (entity : Entity) => {
        console.log('initialized test component ')
        entity.addComponent('seccondTestComponent')
    })
    entityManager.createInitilizationCallback( 'seccondTestComponent', (entity : Entity) => {
        console.log('initialized seccond component ')
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