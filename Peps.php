<?php

class Peps{

    private $mySql;

    public function __construct($mySql){

        $this->mySql=$mySql;

    }

    public function end(){

        $this->mySql=null;

    }

    public function index(){

        $peps = $this->mySql->select("Peps",["*"]," 1 ","Id","assoc");

        return $peps;

    }

    public function branch($branch){

        $peps = $this->mySql->select("Peps",["*"]," Rama = '".$branch."' ","Id","assoc");

        return $peps;

    }

}

?>