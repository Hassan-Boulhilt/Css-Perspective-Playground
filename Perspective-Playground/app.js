let vm = Vue.createApp({
    data(){
        return{
            perspective_value:499,
            rotateX_value:0,
            rotateY_value:0,
            rotateZ_value:0,
        }
    },
    methods:{
        reset(){
            this.perspective_value=499;
            this.rotateX_value=0;
            this.rotateY_value=0;
            this.rotateZ_value=0;

        },
        async copy(){
            let text = `transform:${this.box.transform};`
            await navigator.clipboard.writeText(text)

            alert("Css rules copied")

        }

    },
    computed:{
        
        box (){
            
            
                return{
                    transform:`perspective(${this.perspective_value}px)
                               rotateX(${this.rotateX_value}deg) 
                               rotateY(${this.rotateY_value}deg) 
                               rotateZ(${this.rotateZ_value}deg)`,
                    
                }
                
           
        },
       
                
         

        
    },watch:{

       
        


    }
   

}).mount('#app')