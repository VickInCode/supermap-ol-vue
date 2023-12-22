// export function someGetter (/* state */) {

// }

export const isMapReady = (state) =>{
    return !!state.map
 }

 export const isViewReady = (state) =>{
   return !!state.view
   // return state.view.ui !== undefined ? true : false;
 }

 