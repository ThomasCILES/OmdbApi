<template>
    <div class="app__container">
        <search v-on:search-films="handleOnSearchFilms"/>
        <result v-if="haveFilms" :films="films" v-on:search-film="handleOnSearchFilm"/>
    </div>
</template>


<script>
import Vue from 'vue';
import Result from './Result.vue';
import Search from './Search.vue';
import {getFilm, getFilms} from '../common/api';

/**
 * App component
 */
export default Vue.component('app', {
    name: 'App',
    data: () => ({
        films: []
    }),
    components: {
        Search,
        Result
    },
    computed: {
        haveFilms: function() {
            return (this.films && !!(this.films.length));
        }
    },
    methods: {
        handleOnSearchFilms: function(value) {
            const vm = this;
            getFilms(value).then((films) => { vm.films = films; })
        },
        handleOnSearchFilm: function(id) {
            const vm = this;
            getFilm(id).then((films) => { vm.films = films; })
        }
    }
});
</script>