var app = new Vue({
    el: '#app',
    data() {

      return{

        peps:{
          hideElement:false,
          branch:'all',
          list:null
        },
        pedidos:{
          id:'1',
          hideElement:true,
          orderText:'',
          list:null
        }

      }

    },
    mounted() {

      axios
      .get(serviceUrl+'/backend.php?pep=all')
      .then(response => {
        this.peps.list=response.data;
        for (let i = 0; i < this.peps.list.length; i++) {

          this.peps.list[0].Presupuesto_Inicial=stdToEng(this.peps.list[0].Presupuesto_Inicial);
          
        }
        console.log(this.peps.list);
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
      
    },
    methods:{

      //peticion de peps por rama
      pepRequest(){

        axios
        .get(serviceUrl+'/backend.php?pep='+this.peps.branch)
        .then(response => {
          this.peps.list=response.data;
          console.log(this.peps.list);
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)

      },


      //peticion de pedidos por ID de pep
      orderRequest(id){

        this.pedidos.id=id;
        this.peps.hideElement=true;
        this.pedidos.hideElement=false;
        let orderSearch='all';

        if(this.pedidos.orderText===''){

          orderSearch='all';

        }
        
        else{
          orderSearch=this.pedidos.orderText;
        }

        axios
        .get(serviceUrl+'/backend.php?id='+this.pedidos.id+'&order='+orderSearch)
        .then(response => {
          this.pedidos.list=response.data;
          console.log(this.pedidos.list);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => this.loading = false)
        

      },


      //cerramos orden
      orderClose(){
        this.peps.hideElement=false;
        this.pedidos.hideElement=true;
        this.orderText='';
      }

    }

  });