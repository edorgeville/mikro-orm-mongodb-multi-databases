# mikro-orm-mongodb-multi-databases
## Testing out MikroORM + multiple MongoDB databases + relationships

### Usage
```bash
npm install
npm start
```

### Result
This will result in the following error:
```
mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\errors.js:142
  return new MetadataError(`Entity '${className}' was not discovered, please make sure to provide it in 'entities' array when initializing the ORM (used in ${source})`);
         ^
MetadataError: Entity 'User' was not discovered, please make sure to provide it in 'entities' array when initializing the ORM (used in Product.user)
at Function.fromUnknownEntity (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\errors.js:142:16)
at mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\metadata\MetadataValidator.js:49:46
at Array.forEach (<anonymous>)
at mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\metadata\MetadataValidator.js:47:67
at Array.forEach (<anonymous>)
at MetadataValidator.validateDiscovered (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\metadata\MetadataValidator.js:47:20)
at MetadataDiscovery.findEntities (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\metadata\MetadataDiscovery.js:81:24)
at processTicksAndRejections (node:internal/process/task_queues:94:5)
at MetadataDiscovery.discover (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\metadata\MetadataDiscovery.js:34:9)
at Function.init (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\MikroORM.js:42:24)
```
