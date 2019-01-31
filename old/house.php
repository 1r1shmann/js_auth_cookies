<?php
class SimpleHouse{
    
    public $model = "";
    public $square = 0;
    public $floors = 0;
    public $color = "none";

    function __construct($model, $square = 0, $floors = 1) {
        $this->model = $model;
        $this->square = $square;
        $this->floors = $floors;
    }
    
    function startProject() {
        echo 'Start. Model: '.$this->model.'<br>';
    } 
    
    function stopProject() {
        echo 'Stop. Model: '.$this->model.'<br>';
    } 
    
    function build() {
        echo 'Build. House: '.$this->square.'x'.$this->floors.'<br>';
    } 
    
    function paint() {
        echo 'Paint. Color: '.$this->color.'<br>';
    } 
}
// создали простой дом
$simple = new SimpleHouse('A-100-123', 120, 2);
echo 'SimpleHouse<br>';
$simple->color = "red";
$simple->startProject();
$simple->build();
$simple->paint();
$simple->stopProject();

echo '<hr>';
//наследование
class SuperHouse extends SimpleHouse{
    
    public $fireplace = true;
    public $patio = true;
    
    function fire(){
        if ($this->fireplace){
            echo 'Fueled fireplace<br>';
        }
    }
}

$super = new SuperHouse('A-100-125', 320, 3);
echo 'SuperHouse<br>';
$super->color = "green";
$super->startProject();
$super->build();
$super->paint();
$super->fire();
$super->stopProject();
echo '<hr>';

//инкапсуляция
class FabricHouse extends SimpleHouse{
    function build() {
        echo 'Build. Fabric: '.$this->square.'x'.$this->floors.'<br>';
    }
}

$fabric = new FabricHouse('A-200-007', 3250, 5);
echo 'FabricHouse<br>';
$fabric->color = "green";
$fabric->startProject();
$fabric->build();
$fabric->paint();
$fabric->stopProject();
echo '<hr>';

class SuperFabricHouse extends FabricHouse{
    function build() {
        echo '======================<br>';
        parent::build();
        echo '======================<br>';
    }
}

$superfabric = new SuperFabricHouse('C-201-034', 5150, 7);
echo 'SuperFabricHouse<br>';
$superfabric->color = "black";
$superfabric->startProject();
$superfabric->build();
$superfabric->paint();
$superfabric->stopProject();
echo '<hr>';