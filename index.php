<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: main.php');
		exit();
	}if(isset($_SESSION['zalogowany'])){
		echo $_SESSION['blad'];
	}

?>

<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="./scss/styleLogin.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Teczi Company</title>
	<script src="./js/scriptLogin.js" defer></script>
</head>

<body>
	<canvas id="nokey">
	</canvas>
		<div class="glass">
			<div class="login">
				
				<form action="zaloguj.php" method="post">
					<div class="form">
						<input  type="text" name="login" value='' required autocomplete="off">
						<label for="name" class="label-name">
							<span class="content-name">LOGIN</span> 
						</label>
					</div>
					<div class="form">
						<input  type="password" value='' name="haslo" required>
						<label for="name" class="label-name">
							<span class="content-name">HASŁO</span> 
						</label>
					</div><button type="submit" class="button"  >ZALOGUJ</button>

					<a class="register" href="rejestracja.php" >REJESTRACJA</a>

				</form>
			</div>
		</div>
		
	
<?php
	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
?>

</body>
</html>