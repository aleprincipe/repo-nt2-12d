<template>
<div > {{ texto }}</div>
 
</template>

<script>
export default {
    name: 'Titulo',
    props:{
        texto: String
    }
}
</script>

<style>
h1{ 
   font-family: fantasy;
   font-style: normal;
   font-weight: bolder;
    color: peru;
    text-shadow: 7px 4px 5px rgb(47, 23, 5);
}


</style>