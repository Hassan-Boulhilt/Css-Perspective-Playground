const vm = Vue.createApp({
    data(){
        return {
            firstName:'Hassan',
            lastName:"Deo",
            url_g:"https://www.google.com",
            url_b:"https://www.bing.com",
            raw_url:'<a href="https://www.youtube.com" target="_blanc">You tube</a>'
        }
    },
    methods:{
        getFullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
    

}).mount('#app')

