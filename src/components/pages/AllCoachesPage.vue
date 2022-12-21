<template>
    <coach-filter></coach-filter>
    <coaches-list></coaches-list>
</template>

<script>
import CoachFilter from '../CoachFilter.vue';
import CoachesList from '../CoachesList.vue';
export default {
    components:{
        CoachFilter,
        CoachesList
    }
}
</script>