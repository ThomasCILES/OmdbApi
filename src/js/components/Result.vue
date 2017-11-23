<template>
    <div class="result__container">
        <transition-group name="list-complete" tag="div">
            <film
                    class="list-complete-item"
                    :key="index.toString()"
                    :film="film"
                    v-for="(film, index) in films"
                    v-on:search-film="handleOnSearchFilm"
            />
        </transition-group>
    </div>
</template>

<script>
import Vue from 'vue';
import Film from './Film.vue';

/**
 * Results components
 */
export default Vue.component('result', {
    name: 'Result',
    components: {
        Film
    },
    props: ['films'],
    methods: {
        handleOnSearchFilm(id) {
            this.$emit('search-film', id);
        }
    }
});
</script>