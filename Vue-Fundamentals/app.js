const vm = Vue.createApp({
    data(){
        return {
            firstName:'Hassan',
            lastName:"Deo",
            url_g:"https://www.google.com",
            url_b:"https://www.bing.com",
           
        }
    },
    methods:{
        getFullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
    

}).mount('#app')

