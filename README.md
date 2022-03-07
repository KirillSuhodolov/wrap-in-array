# wrap in array

Sometimes you need pass arguments or params that could be single item or collection in to the same interface.
And that integrace need to lead arguments in to collection

```
import { wrapInArray } from 'wrap-in-array'

// args could be {} or [{}, {}]
const myFn = (_args) => {
  const args = wrapInArray(_args)

  args.map(() => {
    // do something useful
  })
}

```

also available method `wrapInArrayOfArrays` for nested array
