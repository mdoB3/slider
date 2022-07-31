import Vue from 'vue'
import Vuex from 'vuex'
import { faker } from '@faker-js/faker';

Vue.use(Vuex);

const state = {
    cats: [],
    slideNumber: undefined,
    catsImages : [
        'https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg',
        'https://cdn.pixabay.com/photo/2015/06/03/13/13/cats-796437__480.jpg',
        'https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__480.jpg',
        'https://cdn.pixabay.com/photo/2014/09/18/20/17/cat-451377__480.jpg',
        'https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470__480.jpg',
        'https://cdn.pixabay.com/photo/2014/07/24/18/40/cat-401124__480.jpg',
        'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__480.jpg',
        'https://cdn.pixabay.com/photo/2015/02/14/10/16/cat-636172__480.jpg',
        'https://cdn.pixabay.com/photo/2013/10/28/14/30/cat-201855__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg',
        'https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__480.jpg',
        'https://cdn.pixabay.com/photo/2017/05/31/21/52/cat-2361787__480.jpg',
        'https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232__480.jpg',
        'https://cdn.pixabay.com/photo/2014/04/29/13/19/cat-334383__480.jpg',
        'https://cdn.pixabay.com/photo/2014/01/17/14/53/cat-246933__480.jpg',
        'https://cdn.pixabay.com/photo/2017/05/31/21/46/cats-2361762__480.jpg',
        'https://cdn.pixabay.com/photo/2017/05/21/22/06/cat-2332444__480.jpg',
        'https://cdn.pixabay.com/photo/2014/03/30/23/35/cat-301720__480.jpg',
        'https://cdn.pixabay.com/photo/2017/05/21/22/07/cat-2332451__480.jpg',
        'https://cdn.pixabay.com/photo/2014/08/03/00/51/kitten-408798__480.jpg'
    ]
};
const mutations = {
    ADD_CAT(state, payload) {
        state.cats.push(payload);
    }
}
// #1074,
const actions = {
    addCat({ commit }) {
            const cat = {
                name:  faker.animal.cat(),
                image: this.state.catsImages[Math.floor(Math.random()*this.state.catsImages.length)]
            }
            commit('ADD_CAT', cat);
    },
    deleteCat({commit}) {
        commit('DELETE_CAT');
    }
}

const getters = {
    slides: state => state.slides,
}
export default new Vuex.Store ({
    state,
    mutations,
    actions,
    getters
})
