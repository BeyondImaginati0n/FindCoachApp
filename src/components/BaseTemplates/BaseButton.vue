<template>
<button :class="{activated:active}">
    <slot></slot>
    </button>    
</template>
<script>
export default {
    props:['active']
}
</script>
<style scoped>
button{
    background: none;
    color: rgba(248, 248, 53, 0.74);
    border: none;
    padding: 5px;
    font-size: 17px;
}
.activated{

}
</style>