# ijtx

Wrapper Utilities to common use-cases.

## Usage

Can use used completely, or sigularly for tree-shaking

---

```(javascript)
import ijtx from 'ijtx/dist'
```

---

```(javascript)
import absRoute from 'ijtx/dist/absRoute'
import arrayDel from 'ijtx/dist/arrayDel'
import arrayOmit from 'ijtx/dist/arrayOmit'
import arrayReverse from 'ijtx/dist/arrayReverse'
import arraySwap from 'ijtx/dist/arraySwap'
import base64ToExt from 'ijtx/dist/base64ToExt'
import cloneFileList from 'ijtx/dist/cloneFileList'
import extendReducer from 'ijtx/dist/extendReducer'
import getDataUrlFromFile from 'ijtx/dist/getDataUrlFromFile'
import getFormValues from 'ijtx/dist/getFormValues'
import modulus from 'ijtx/dist/modulus'
import promiseChain from 'ijtx/dist/promiseChain'
import removeTags from 'ijtx/dist/removeTags'
import toPrefixed from 'ijtx/dist/toPrefixed'
```

---

## Components

Description of contained Utilities

### absRoute

Convert to absolute url.

### arrayDel

Immtuable Delete (via index) from Array.

### arrayOmit

Immtuable Delete (via value) from Array.

### arrayReverse

Immutable Array Reverse.

### arraySwap

Immutable swap values (via index) in Array.

### base64ToExt

Grab Extension and mime-type of base64 encoded images. (only supports `jpg`, `png`, and `svg`)

### cloneFileList

Clones `fileList` received from `<input type="file" />`.

### extendReducer

High-Order Function designed to be used with React's `setState` method.

```(javascript)
import extendReducer from 'ijtx/dist/extendReducer'

...

const state = useState({
  oldValue: ...
})

...

  setState(state, extendReducer({
    newValue: ...
  }))

...

// OUTPUT:
//  {
//    oldValue: ...,
//    newValue: ...
//  }

```

### getDataUrlFromFile

Grabs browser generated local-url for a file received through `<input type="file" />`.

### getFormValues

Returns value of form-elements in a `<form />` in JSON format.

### modulus

Returns positive modulus of a number.

### promiseChain

Iterate an asynchronous function for each value in an array in serial format.

### removeTags

Remove HTML tags from a string.

### toPrefixed

Pad zeros to a number.
