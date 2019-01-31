<?php
class User {
    public $name;
    public $login;
    public $password;
    
    function __construct($name, $login, $password) {
        $this->name = $name;
        $this->login = $login;
        $this->password = $password;
    }
            
    function showInfo() {
    echo 'Name : ' . $this->name .  '<br>';
    echo 'Login : ' . $this->login .  '<br>';
    echo 'Password : ' . $this->password .  '<br>';
    }
    
    function __destruct() {
        $this->showInfo();
    }
}

$user1 = new User("Иван", "ivan", "ivan123");
$user2 = new User("Петр", "peter", "peter456");
$user3 = new User("Сидор", "sidor", "sidor789");
echo '<hr>';

class SuperUser extends User{
    
    public $role;
            
    function __construct($name, $login, $password, $role) {
        parent::__construct($name, $login, $password);
        $this->role = $role;
    }
    
    function showInfo() {
        parent::showInfo();
        echo 'Role: ' . $this->role . '<br>';
        
    }
}

$superUser = new SuperUser("Иван", "ivan", "ivan123", "Суперпользователь");