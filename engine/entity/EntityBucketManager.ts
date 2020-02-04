import { Entity } from './Entity.js'

export class EntityBucket {
    
    private entities : Entity[] = []

    constructor ( private targetComponents : Set<String> ) { }

    targetsEqual ( otherTarget : Set<String> ) : boolean {
        return otherTarget.size === this.targetComponents.size && 
               [...otherTarget].every(value => this.targetComponents.has(value));
    }

    containsComponent ( component : string ) {
        return this.targetComponents.has( component )
    }

    getEntities ( callback ) {
        this.entities.forEach( callback )
    }

    addEntity ( entity : Entity ) { 
        this.entities.push( entity )
    }

    removeEntity ( entity : Entity ) {
        this.entities = this.entities.filter ( e => e != entity )
    }

}

export class EntityBucketManager {

    entityBuckets : EntityBucket[] = [] 

    private findBucket ( bucketNamesSet : Set<String> ){
        for ( const localBucket of this.entityBuckets )
            if ( localBucket.targetsEqual( bucketNamesSet ) )
                return localBucket;
        return undefined;
    }

    createBucket ( searchNames : string[] ) { 
        let bucketNamesSet = new Set<string>( searchNames )

        let existingBucket = this.findBucket( bucketNamesSet )
        if ( existingBucket ) return existingBucket;

        let newBucket = new EntityBucket( bucketNamesSet )
        this.entityBuckets.push( newBucket )
        return newBucket;

    }

    componentAdded ( component : string, entity : Entity ) {
        this.entityBuckets.forEach( bucket => {
            if ( bucket.containsComponent( component )) 
                if ( bucket.targetsEqual( entity.componentNames ) ) 
                    bucket.addEntity( entity )
                
        })
    }

    componenetRemoved ( component : string, entity : Entity ) {
        this.entityBuckets.forEach( bucket => {
            if ( bucket.containsComponent( component )) 
                if ( bucket.targetsEqual( entity.componentNames ) ) 
                    bucket.removeEntity( entity )
                
        })
    }

}