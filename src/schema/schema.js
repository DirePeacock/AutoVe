import { schema } from "normalizr";
const actorProcessStrategy = (value, parent, key) => {
    switch (key) {
        case 'inv_item':
            return {...value, inv_items:[parent.id]};
        default:
            return {...value};
    }
};
const actorMergeStrtegy = (entityA, entityB) => {
    return {
        ...entityA,
        ...entityB,
        actors:[...(entityA.inv_items || []),...(entityB.inv_items || [])]
    };
};
const actors = new schema.Entity(
    'actors',
    {},
    {
        mergeStrategy: actorMergeStrtegy,
        processStrategy: actorProcessStrategy,
        
    }
);
const inv_items = new schema.Entity(
    'inv_items',
    {
        
    },
    {
        mergeStrategy: actorMergeStrtegy,
        processStrategy: actorProcessStrategy,
        
    }
);