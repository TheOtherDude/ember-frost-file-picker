import resolver from './helpers/resolver'
import {setResolver} from 'ember-mocha'

mocha.setup({
  timeout: 5000000
})

setResolver(resolver)
