import {createStore} from 'vuex';
import Getters from './getters';
import Actions from './actions';
import Mutations from './mutations';
import filterModule from './modules/filterModule/index';
const store =new createStore({
    modules:{
filtersModule:filterModule
    },
    state(){
        return{
coaches:[
{name:'Yehor Shevchenko',
price:100,
categories:['frontend','career'],
id:1
},
{name:'Michael Zub',
price:79,
categories:['backend','career','frontend'],
id:2
},
{name:'Marko Korovin',
price:17,
categories:['backend'],
id:3
}
]
        };

    },
    getters:Getters,
    mutations:Mutations,
    actions:Actions
});

export default store;