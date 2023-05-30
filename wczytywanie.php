<?php
    session_start();
    if (!isset($_SESSION['zalogowany']))
    {
        header('Location: index.php');
        exit();
    }
    require "connect.php";

    $ID = $_SESSION['id'];

    $query = "SELECT * FROM `zadwkalendarzu` WHERE IDUzytkownika = $ID";
    $result = mysqli_query($connection, $query);

    $query2 = "SELECT * FROM `cele` WHERE IDUzytkownika = $ID";
    $result2 = mysqli_query($connection, $query2);

    $query3 = "SELECT * FROM `linki` WHERE IDUzytkownika = $ID";
    $result3 = mysqli_query($connection, $query3);

    if($result){
        echo "<div class='loading-from-the-database' style ='display : none;'>";
        while($row=mysqli_fetch_assoc($result))
        {
            $from = date('Y-n-j', strtotime($row['data']));
            $time = date('H:i', strtotime($row['data']));
            echo "<div class='loading-from-the-database-task'>
                <div class='IDZadania'>{$row['IDZadania']}</div>
                <div class='nazwa'>{$row['nazwa']} </div>
                <div class='szczegoly'>{$row['szczegoly']} </div> 
                <div class='data'>{$row['data']} </div>
                <div class='wykonane'>{$row['wykonane']} </div>
                <div class='from'>{$from}</div>
                <div class='time'>{$time}</div>
            </div></br>";
        }
        echo "</div>";
    }else{
        echo "cos sie nie kmini";
    }
    if($result2){
        echo "<div class='loadingGoals-from-the-database' style ='display : none;'>";
        while($row2=mysqli_fetch_assoc($result2))
        {
            echo "<div class='loading-from-the-database-goal'>
                <div class='IDCelu'>{$row2['IDCelu']}</div>
                <div class='nazwa'>{$row2['nazwa']} </div> 
                <div class='dataRozpoczecia'>{$row2['dataRozpoczecia']} </div>
                <div class='dataZakonczenia'>{$row2['dataZakonczenia']} </div>
                <div class='wykonane'>{$row2['wykonane']} </div>
            </div></br>";
        }
        echo "</div>";

    }else{
        echo "cos sie nie kmini";
    }
    if($result3){
        echo "<div class='loadingLinks-from-the-database' style ='display : none;'>";
        while($row3=mysqli_fetch_assoc($result3))
        {
            echo "<div class='loading-from-the-database-link'>
                <div class='IDLinku'>{$row3['IDLinku']}</div>
                <div class='nazwa'>{$row3['nazwa']} </div> 
                <div class='link'>{$row3['link']} </div>
            </div></br>";
        }
        echo "</div>";

    }else{
        echo "cos sie nie kmini";
    }

    

?>