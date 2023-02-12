const vm = Vue.createApp({
    data(){
        return {
            firstName:'Hassan',
            lastName:"Deo",
            url_g:"https://www.google.com",
            url_b:"https://www.bing.com",
            raw_url:'<a href="https://www.youtube.com" target="_blanc">You tube</a>',
            age:20,
        }
    },
    methods:{
        getFullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        updateFirstName(msg, event){
            
            console.log(msg)
            this.firstName = event.target.value
        },
        incrementeAge(){
            this.age++
        }
    }
    

}).mount('#app')

