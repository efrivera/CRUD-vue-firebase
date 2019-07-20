<template>
  <div>
    <h1>Edit</h1>
    <label for="">Name</label>
    <input type="text" v-model="movieToEdit.name">
    <label for="">Description</label>
    <input type="text" v-model="movieToEdit.description">
    <button @click="saveEdit()">Save</button>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data() {
    return {
      id: this.$route.params.id,
      movieToSave: {
        name: '',
        decription: '',
      },
    }
  },
  mounted() {
    this.$store.dispatch('getMovie', this.id);
  },
  computed: {
    movieToEdit(){
      return this.$store.state.movieDetails;
    }
  },
  methods: {
    saveEdit() {
      const { name, description } = this.movieToEdit;
      return this.$store.dispatch('saveMovie', {
        name,
        description,
        id: this.id,
      });
    },
  },
}
</script>

