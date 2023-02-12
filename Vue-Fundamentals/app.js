const vm = Vue.createApp({
    data(){
        return {
            firstName:'Hassan',
            lastName:"Deo",
           
        }
    },
    methods:{
        getFullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
    

}).mount('#app')

