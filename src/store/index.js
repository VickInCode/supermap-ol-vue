// import { createStore } from 'vuex'
// import MapStore from './map'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//     mapModule: MapStore
//   }
// })

import Map from 'ol/Map';
import { createStore } from 'vuex'
import map from './map'


const store = createStore({

  modules: {
    map
  }

})

export default store





