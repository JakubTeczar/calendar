<?php
    session_start();

    require "connect.php";
    $query = "INSERT INTO `zadwkalendarzu` (`IDZadania`, `IDUzytkownika`, `nazwa`, `szczegoly`, `data`, `wykonane`) VALUES";  
    $licznik = $_POST["licznikT"];
    if($licznik !=0){
        
        $ID = $_SESSION['id'];
        for ($i = 1; $i <= $licznik; $i++) {
            
        $IDZadania = $_POST["IDZadania$i"."T"];
        $nazw = $_POST["nazwa$i"."T"];
        $szczegoly = $_POST["szczegoly$i"."T"];
        $data = $_POST["data$i"."T"];
        $wykonane = $_POST["wykonane$i"."T"];
        $query = $query."('$IDZadania','$ID' , '$nazw','$szczegoly' , '$data','$wykonane ')";
            if($i != $licznik){
                $query= $query.",";
            }
        }
        echo $query;
        $result = mysqli_query($connection, $query);
    }
    $DeleteIDTask = $_POST["DeleteIDTask"];
    if($DeleteIDTask !=""){
        //UPDATE `zadwkalendarzu` SET `wykonane` = '1' WHERE `zadwkalendarzu`.`IDZadania` = 5
        $query2 = "DELETE FROM `zadwkalendarzu` WHERE $DeleteIDTask";  
        $result2 = mysqli_query($connection, $query2);
        echo $query2; 
    }
    $DoneIDTask = $_POST["DoneIDTask"];
    if($DoneIDTask !=""){
        //UPDATE `zadwkalendarzu` SET `wykonane` = '1' WHERE `zadwkalendarzu`.`IDZadania` = 5
        $query3 = "UPDATE `zadwkalendarzu` SET `wykonane` = '1' WHERE $DoneIDTask";  
        $result3 = mysqli_query($connection, $query3);
        echo $query3; 
    }
    ////////////////////////////////////////////////////////////dla goli////////////////////////////////////////////////////////////////////////
    $query4 = "INSERT INTO `cele` (`IDCelu`, `IDUzytkownika`, `nazwa`, `dataRozpoczecia`, `dataZakonczenia`, `wykonane`) VALUES";  
    $licznik2 = $_POST["licznikG"];
    echo "<br>".$licznik2;
    if($licznik2 !=0){
        $ID = $_SESSION['id'];
        $licznik2--;
        for ($i = 0; $i <= $licznik2; $i++) {
            
        $IDCelu = $_POST["IDCelu$i"."G"];
        $nazwa = $_POST["nazwa$i"."G"];
        $dataRozpoczecia = $_POST["dataRozpoczecia$i"."G"];
        $dataZakonczenia = $_POST["dataZakonczenia$i"."G"];
        $wykonane = $_POST["wykonane$i"."G"];
        $query4 = $query4."('$IDCelu','$ID' , '$nazwa','$dataRozpoczecia' , '$dataZakonczenia','$wykonane ')";
            if($i != $licznik2){
                $query4= $query4.",";
            }
           
        }
        echo $query4;
        $result4 = mysqli_query($connection, $query4);
    }
    $DeleteIDGoal = $_POST["DeleteIDGoal"];
    if($DeleteIDGoal !=""){
        $query5 = "DELETE FROM `cele` WHERE $DeleteIDGoal";  
        $result5 = mysqli_query($connection, $query5);
        echo $query5; 
    }
    $DoneIDGoal = $_POST["DoneIDGoal"];
    if($DoneIDGoal !=""){
        $query6 = "UPDATE `cele` SET `wykonane` = '1' WHERE $DoneIDGoal";  
        $result6 = mysqli_query($connection, $query6);
        echo $query6; 
    }
    ///////////////////////////////////////////////////////////////////////////na linki ////////////////////////////////////////////////////////////////
    $query10 = "INSERT INTO `linki` (`IDLinku`, `IDUzytkownika`, `nazwa`, `link`) VALUES";  
    $licznik3 = $_POST["licznikL"];
    echo "<br>".$licznik3;
    if($licznik3 !=0){
        $ID = $_SESSION['id'];
        $licznik3--;
        for ($i = 0; $i <= $licznik3; $i++) {

        $IDLinku = $_POST["IDLinku$i"."L"];
        $nazwa = $_POST["nazwa$i"."L"];
        $link = $_POST["link$i"."L"];

        $query10 = $query10."('$IDCelu','$ID' , '$nazwa','$link')";
            if($i != $licznik3){
                $query10= $query10.",";
            }
           
        }
        echo $query10;
        $result10 = mysqli_query($connection, $query10);
    }
    $DeleteIDLinks = $_POST["DeleteIDL"];
    if($DeleteIDLinks !=""){
        $query11 = "DELETE FROM `linki` WHERE $DeleteIDLinks";  
        $result11 = mysqli_query($connection, $query11);
        echo $query11; 
    }

    $_SESSION["animation"] ="save-animation";
    header('Location:main.php');
?>