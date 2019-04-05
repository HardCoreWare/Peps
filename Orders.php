<?php

class Orders{

    private $mySql;

    public function __construct($mySql){

        $this->mySql=$mySql;

    }

    public function order($pepId,$orderText){


        if($orderText!=='all'){


            $orders=$this->mySql->select("Pedidos",["*"]," Id_Pep = '".$pepId."' AND Descripcion LIKE '%".$orderText."%'" ,"Id_Pep","assoc");
            return $orders;

        }

        else{

            $orders=$this->mySql->select("Pedidos",["*"]," Id_Pep = '".$pepId."'","Id_Pep","assoc");
            return $orders;

        }
        

    }


    public function end(){

        $this->mySql=null;

    }

}

?>