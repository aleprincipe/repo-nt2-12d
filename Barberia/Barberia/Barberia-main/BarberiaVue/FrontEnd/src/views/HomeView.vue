<template>
  <div id="App">
<blockquote class="blockquote text-center">
   <h1 class="display-2"><Titulo texto="Barberia JS"/></h1>
   </blockquote>
    <img  class="img-thumbnail rounded mx-auto d-block" alt="Vue logo" src="../assets/logo.png">
<footer class="text-center">
  <p>Por:
    Santiago Mertens, Santiago Villanueva, Alejandro Principe
  </p>
</footer>
  </div>
</template>

<script>
import Titulo from '../components/Titulo.vue'

export default {
  name: 'App',
  components: {
    Titulo
  }
}
</script>

<style scope>

body { background-color: rgb(219, 219, 219);}
footer{

  background-size: cover;
  min-height: 15vh;
}
footer {
	text-align: top;
	padding: 40px 0 00px ;
  float:right
  }
</style>