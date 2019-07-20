import Vue from 'vue';
import Vuex from 'vuex';
import db from './firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    movieDetails: {},
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setMovieDetails(state, movieInfo) {
      state.movieDetails = movieInfo;
    },
  },
  actions: {
    async getMovies({ commit }) {
      const movies = [];
      const response = await db.collection('movies').get();

      response.forEach((movie) => {
        console.log(movie.id);
        console.log(movie.data());
        const movieObj = movie.data();
        movieObj.id = movie.id;
        movies.push(movieObj);
      });

      commit('setMovies', movies);
    },
    async getMovie({ commit }, id) {
      const movie = await db.collection('movies').doc(id).get();
      console.log(movie.id);
      console.log(movie.data());
      const movieInfo = movie.data();

      commit('setMovieDetails', movieInfo);
    },
    addMovie({ commit }, movie) {
      const { name, description } = movie;

      db.collection('movies').add({
        name,
        description,
      }).then((response) => {
        console.log('response:', response);
        alert('movie has been saved');
      });
    },
    deleteMovie({dispatch}, id) {
      db.collection('movies').doc(id)
        .delete().then(() => {
          alert('movie was deleted');
        });
    },
    saveMovie({dispatch}, movieToSave) {
      const { name, description, id } = movieToSave;

      db.collection('movies').doc(id).update({
        name,
        description,
      }).then((response) => {
        console.log('response:', response);
        alert('movie was updated');
      });
    },
  },
});
