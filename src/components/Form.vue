<template>
    <div>
        <h1>Kitty Cats slider</h1>
        <div class="button-group">
            <p>Number of Cats</p>
            <button>-</button>
            <button @click="addCat">+</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'Form',
    methods: {
        ...mapActions([
            'addCat'
        ])
    }
}
</script>
<style scoped>
    .button-group {
        /* display: flex;
        justify-content: space-between;
        max-width: 40px; */
    }
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
</style>
