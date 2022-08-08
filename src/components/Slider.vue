<template>
     <div v-if="cats.length" class="cat">
        <p class="cat-name" v-text="currentCat.name"></p>
        <img :src="currentCat.image" alt="" class="cat-image">
         <div class="button-group">
            <button @click="previous">back</button>
                <button v-for="index in totalCats" :key="index" @click="selectCat(index)"  :class="{ active: index === currentCatIndex }">
                    {{index}}
                </button>
            <button @click="next">next</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Slider',
  computed: {
    ...mapGetters([
        'cats',
        'currentCat',
        'totalCats',
        'currentCatIndex',
    ])
  },
  methods: {
    ...mapActions([
        'previous',
        'next',
        'selectCat'
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button {
        border-radius: 15px;
        background: gainsboro;
        border: none;
        cursor: pointer;
        padding: 5px 10px;
        margin:5px;
    }
    button:hover {
        background: green;
        color: white;
    }
    .active {
        background: green;
        color: white;
    }
</style>
