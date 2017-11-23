<template>
    <div class="item">
        <h2>{{film.Title}} - {{film.Year}}</h2>
        <img :src="film.Poster" height="250"/>
        <p>
            <button v-on:click="handleOnClick(film.imdbID)">Informations</button>
        </p>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('film', {
    name: 'Film',
    props: ['film'],
    methods: {
        handleOnClick(id) {
            this.$emit('search-film', id);
        }
    }
});
</script>