<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    /**********
     * mapGetters is an object with all methods, mapped methods, and computed properties
     * spread operator (...) will pull out all properties and methods from mapGetters
     */
    export default {
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            }),
            myOwnProperties() {

            }
        }
    }
</script>