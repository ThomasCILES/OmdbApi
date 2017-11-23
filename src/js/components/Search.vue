<template>
    <input
            type="search"
            placeholder="Rechercher un film..."
            v-model="text"
            v-on:keyup.enter="handleOnSearch()"
    />
</template>

<script>
import Vue from 'vue';

/**
 * Search component
 */
export default Vue.component('search', {
   name: 'Search',
   data: () => ({
       text: ''
   }),
   methods: {
       handleOnSearch() {
           if (!(this.text.length)) {
               return;
           }

           this.$emit('search-films', this.text);
           this.text = '';
       }
   }
});
</script>