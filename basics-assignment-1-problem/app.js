const app = Vue.createApp({
    data() {
       return {
           name: 'Gourouvin Laurent',
           age: 31,
           ageForward: 5,
           favNumber: Math.random(),
           urlImage: 'https://www.developpez.net/forums/attachments/p579609d1/a/a/a',
           textArea: 'Vue.JS'
       }
    }
});

app.mount('#assignment');