<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Add movie</h1>
    <label for="">Name</label>
    <input type="text" v-model="moviesToAdd.name">
    <label for="">Description</label>
    <input type="text" v-model="moviesToAdd.description">

    <button @click="addMovie()">Add</button>

    <ul>
      <li v-for="movie in moviesStore" :key="movie.id">
        nombre: {{movie.name}} |
        description: {{movie.description}}
        <button @click="deleteMovie(movie.id)">delete</button>
        <router-link :to="{ name: 'edit', params: {id: movie.id}}">
          <button>edit</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      moviesToAdd: {
        name: '',
        decription: '',
      }
    }
  },
  mounted(){
    return this.$store.dispatch('getMovies');
  },
  computed: {
    moviesStore(){
      return this.$store.state.movies;
    }
  },
  methods: {
    addMovie(){
      return this.$store.dispatch('addMovie', this.moviesToAdd);
    },
    deleteMovie(id) {
      return this.$store.dispatch('deleteMovie', id);
    }
  }
};
</script>
