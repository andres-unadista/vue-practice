import axios from 'axios';

export default {
  namespaced: true,
  state: {
    users: [
      {
        _id: '610b298457853a81d3082b4c',
        isActive: false,
        age: 39,
        name: 'Phelps Blackwell',
      },
      {
        _id: '610b29844974134c17ddf742',
        isActive: true,
        age: 34,
        name: 'Barnes Dotson',
      },
      {
        _id: '610b2984d35b16edb8e92793',
        isActive: false,
        age: 26,
        name: 'Obrien Beard',
      },
      {
        _id: '610b29846aceb8dd0db6746e',
        isActive: false,
        age: 37,
        name: 'Conner Trujillo',
      },
      {
        _id: '610b298452e0a5038f53bd7b',
        isActive: false,
        age: 23,
        name: 'Letitia Bauer',
      },
      {
        _id: '610b2984fe609fbaedecbd88',
        isActive: false,
        age: 23,
        name: 'Trujillo Chavez',
      },
    ],
    persons: [],
  },
  getters: {
    getTotalAgeUsers: (state) => {
      let ages = state.users.map((user) => user.age);
      console.log(ages);
      return ages.reduce((age, current) => parseInt(age) + current);
    },
  },
  mutations: {
    getPersonsAsync(state) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((resp) => {
          state.persons = resp.data
          console.log('TASKS');
          console.log(state.persons);
        })
        .catch((err) => console.error(err));
    },
  },
  actions: {
    getPersons(context){
      context.commit('getPersonsAsync');
    }
  },
}