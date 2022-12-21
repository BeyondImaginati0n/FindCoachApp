<template>
    <button :class="{purple:inner}">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:['inner']
}
</script>

<style scoped>
button{
    border-radius: 30px;
    padding: 10px 20px;
    margin-left:10px;
    border:1px solid #45006d;
    color: #45006d;
}
.purple{
    background-color: #45006d;
    color: white;
}
</style>