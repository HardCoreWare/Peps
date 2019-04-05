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
      .get('http://localhost/peps/backend.php?pep=all')
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
    methods:{

      //peticion de peps por rama
      pepRequest(){

        axios
        .get('http://localhost/peps/backend.php?pep='+this.peps.branch)
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
        .get('http://localhost/peps/index.php?id='+this.pedidos.id+'&order='+orderSearch)
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
      orderClose(){
        this.peps.hideElement=false;
        this.pedidos.hideElement=true;
        this.orderText='';
      }

    }

  });