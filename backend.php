<?php

    require_once 'headers.php';
    require_once 'PdoCrud.php';
    require_once 'Peps.php';
    require_once 'Orders.php';

if(isset($_GET['pep'])){

    $get=$_GET['pep'];

    switch ($get) {

        case 'all':

            $myPeps = new Peps(new PdoCrud('localhost','root','','PEPSTI'));
            $peps = $myPeps->index();
            $response = json_encode($peps);
            $myPeps->end();
            echo($response);

        break;

        case 'pmo':

            $myPeps = new Peps(new PdoCrud('localhost','root','','PEPSTI'));
            $peps = $myPeps->branch('PMO');
            $response = json_encode($peps);
            $myPeps->end();
            echo($response);

        break;

        case 'bi':

            $myPeps = new Peps(new PdoCrud('localhost','root','','PEPSTI'));
            $peps = $myPeps->branch('BI');
            $response = json_encode($peps);
            $myPeps->end();
            echo($response);

        break;
        
        default:

            $myPeps = new Peps(new PdoCrud('localhost','root','','PEPSTI'));
            $peps = $myPeps->index();
            $response = json_encode($peps);
            $myPeps->end();
            echo($response);
        
        break;
    }

}
else if(isset($_GET['id'])){

    $pepid = $_GET['id'];

    $orderDesc=$_GET['order'];

    $myOrders = new Orders(new PdoCrud('localhost','root','','PEPSTI'));

    $orders = $myOrders->order($pepid,$orderDesc);

    $response = json_encode($orders);

    echo($response);

}
else{



}


    

?>