<?php
class Pet{
    public $name;
    public $type = "unknown";
    
    function __construct($name, $type) {
        $this->name = $name;
        $this->type = $type;
    }
    
    function __destruct() {
        echo 'Object '. $this->type .' deleted<br>';
    }
            
    function say($word) {
        echo $this->name . ' said ' . $word;
        $this->drawLine();
    }
    
    function drawLine(){
        echo '<hr>';
    }
    
    function __clone() {
        echo 'Object ' . $this->type . ' was cloned! <br>';
    }
}

$cat = new Pet("Murzik", "cat");
$cat->say("Meow");

$dog = new Pet("Tuzik", "dog");
$dog->say("Gav-gav");

$bird = clone $cat;



?>

