 <?php
    // session_start();
    require "wczytywanie.php";
    if($_SESSION["animation"]){
        $Anim = trim($_SESSION["animation"]);
        if($Anim == 'save-animation'){
            $saveAnim = "animation: appearSave-animation linear .9s forwards;opacity: 1;display: block;";
            $generalAnim ="";
        }
        if( $Anim == 'animation'){
            $_SESSION["animation"] ="save-animation";
            $saveAnim = "";
            $generalAnim ="display:flex";
        }

    }else{
        $saveAnim = '';
    }
?>


<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./scss/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Karantina:wght@300;400&display=swap" rel="stylesheet"> <!-- information lesson  font-family: 'Bebas Neue', cursive;-->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet"><!-- // do statystyk -->
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"> <!--font info-->
    <script src="./js/php.js" defer></script>
    <script src="./js/php2.js" defer></script>
    <script src="./js/script.js" defer></script>
    <script src="./js/lesson.js" defer></script>
    <script src="./js/goals.js" defer></script>
    <script src="./js/link.js" defer></script>
    <script src="./js/menu.js" defer></script>
    <script src="./js/lesson_info.js" defer></script>
    <script src="./js/goals_info.js" defer></script>
    <script src="./js/main_goals_info.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js" defer></script>
    <script src="./js/chart.js" defer></script>
    
    <title>Document22</title>
</head>
<body>
    <div class="save-data-on-server">
    <div class="save-data-on-server-message">Zapisz dane</div>
    <div class="save-data-on-server-icon">⚠️</div>
    </div>
    <div class="animation" style =" <?php echo $generalAnim?>">
        <div class="animation-conteiner" >
            <svg class="logo" width="759" height="77" viewBox="0 0 759 77" fill="black" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.264" y="0.223999" width="759" height="77" fill="black">
            <rect fill="white" x="0.264" y="0.223999" width="759" height="77"/>
            <path d="M49.576 5.088V12.192H31.336V72H22.6V12.192H4.264V5.088H49.576Z"/>
            <path d="M69.0655 12.192V34.56H93.4495V41.76H69.0655V64.8H96.3295V72H60.3295V4.992H96.3295V12.192H69.0655Z"/>
            <path d="M106.284 38.496C106.284 31.968 107.756 26.112 110.7 20.928C113.644 15.68 117.644 11.584 122.7 8.64C127.82 5.696 133.484 4.224 139.692 4.224C146.988 4.224 153.356 5.984 158.796 9.504C164.236 13.024 168.204 18.016 170.7 24.48H160.236C158.38 20.448 155.692 17.344 152.172 15.168C148.716 12.992 144.556 11.904 139.692 11.904C135.02 11.904 130.828 12.992 127.116 15.168C123.404 17.344 120.492 20.448 118.38 24.48C116.268 28.448 115.212 33.12 115.212 38.496C115.212 43.808 116.268 48.48 118.38 52.512C120.492 56.48 123.404 59.552 127.116 61.728C130.828 63.904 135.02 64.992 139.692 64.992C144.556 64.992 148.716 63.936 152.172 61.824C155.692 59.648 158.38 56.544 160.236 52.512H170.7C168.204 58.912 164.236 63.872 158.796 67.392C153.356 70.848 146.988 72.576 139.692 72.576C133.484 72.576 127.82 71.136 122.7 68.256C117.644 65.312 113.644 61.248 110.7 56.064C107.756 50.88 106.284 45.024 106.284 38.496Z"/>
            <path d="M191.096 64.416H223.736V72H180.728V65.088L213.176 12.672H181.112V5.088H223.544V12L191.096 64.416Z"/>
            <path d="M244.378 5.088V72H235.642V5.088H244.378Z"/>
            <path d="M281.597 38.496C281.597 31.968 283.069 26.112 286.013 20.928C288.957 15.68 292.957 11.584 298.013 8.64C303.133 5.696 308.797 4.224 315.005 4.224C322.301 4.224 328.669 5.984 334.109 9.504C339.549 13.024 343.517 18.016 346.013 24.48H335.549C333.693 20.448 331.005 17.344 327.485 15.168C324.029 12.992 319.869 11.904 315.005 11.904C310.333 11.904 306.141 12.992 302.429 15.168C298.717 17.344 295.805 20.448 293.693 24.48C291.581 28.448 290.525 33.12 290.525 38.496C290.525 43.808 291.581 48.48 293.693 52.512C295.805 56.48 298.717 59.552 302.429 61.728C306.141 63.904 310.333 64.992 315.005 64.992C319.869 64.992 324.029 63.936 327.485 61.824C331.005 59.648 333.693 56.544 335.549 52.512H346.013C343.517 58.912 339.549 63.872 334.109 67.392C328.669 70.848 322.301 72.576 315.005 72.576C308.797 72.576 303.133 71.136 298.013 68.256C292.957 65.312 288.957 61.248 286.013 56.064C283.069 50.88 281.597 45.024 281.597 38.496Z"/>
            <path d="M389.353 72.672C383.145 72.672 377.481 71.232 372.361 68.352C367.241 65.408 363.177 61.344 360.169 56.16C357.225 50.912 355.753 45.024 355.753 38.496C355.753 31.968 357.225 26.112 360.169 20.928C363.177 15.68 367.241 11.616 372.361 8.736C377.481 5.792 383.145 4.32 389.353 4.32C395.625 4.32 401.321 5.792 406.441 8.736C411.561 11.616 415.593 15.648 418.537 20.832C421.481 26.016 422.953 31.904 422.953 38.496C422.953 45.088 421.481 50.976 418.537 56.16C415.593 61.344 411.561 65.408 406.441 68.352C401.321 71.232 395.625 72.672 389.353 72.672ZM389.353 65.088C394.025 65.088 398.217 64 401.929 61.824C405.705 59.648 408.649 56.544 410.761 52.512C412.937 48.48 414.025 43.808 414.025 38.496C414.025 33.12 412.937 28.448 410.761 24.48C408.649 20.448 405.737 17.344 402.025 15.168C398.313 12.992 394.089 11.904 389.353 11.904C384.617 11.904 380.393 12.992 376.681 15.168C372.969 17.344 370.025 20.448 367.849 24.48C365.737 28.448 364.681 33.12 364.681 38.496C364.681 43.808 365.737 48.48 367.849 52.512C370.025 56.544 372.969 59.648 376.681 61.824C380.457 64 384.681 65.088 389.353 65.088Z"/>
            <path d="M502.358 5.568V72H493.622V22.464L471.542 72H465.398L443.222 22.368V72H434.486V5.568H443.894L468.47 60.48L493.046 5.568H502.358Z"/>
            <path d="M561.909 24.672C561.909 30.24 559.989 34.88 556.149 38.592C552.373 42.24 546.581 44.064 538.773 44.064H525.909V72H517.173V5.088H538.773C546.325 5.088 552.053 6.912 555.957 10.56C559.925 14.208 561.909 18.912 561.909 24.672ZM538.773 36.864C543.637 36.864 547.221 35.808 549.525 33.696C551.829 31.584 552.981 28.576 552.981 24.672C552.981 16.416 548.245 12.288 538.773 12.288H525.909V36.864H538.773Z"/>
            <path d="M612.319 57.12H583.135L577.759 72H568.543L592.735 5.472H602.815L626.911 72H617.695L612.319 57.12ZM609.823 50.016L597.727 16.224L585.631 50.016H609.823Z"/>
            <path d="M690.063 72H681.326L646.191 18.72V72H637.455V4.992H646.191L681.326 58.176V4.992H690.063V72Z"/>
            <path d="M751.803 5.088L730.011 46.752V72H721.274V46.752L699.386 5.088H709.083L725.595 38.976L742.107 5.088H751.803Z"/>
            </mask>
            <path d="M49.576 5.088V12.192H31.336V72H22.6V12.192H4.264V5.088H49.576Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M69.0655 12.192V34.56H93.4495V41.76H69.0655V64.8H96.3295V72H60.3295V4.992H96.3295V12.192H69.0655Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M106.284 38.496C106.284 31.968 107.756 26.112 110.7 20.928C113.644 15.68 117.644 11.584 122.7 8.64C127.82 5.696 133.484 4.224 139.692 4.224C146.988 4.224 153.356 5.984 158.796 9.504C164.236 13.024 168.204 18.016 170.7 24.48H160.236C158.38 20.448 155.692 17.344 152.172 15.168C148.716 12.992 144.556 11.904 139.692 11.904C135.02 11.904 130.828 12.992 127.116 15.168C123.404 17.344 120.492 20.448 118.38 24.48C116.268 28.448 115.212 33.12 115.212 38.496C115.212 43.808 116.268 48.48 118.38 52.512C120.492 56.48 123.404 59.552 127.116 61.728C130.828 63.904 135.02 64.992 139.692 64.992C144.556 64.992 148.716 63.936 152.172 61.824C155.692 59.648 158.38 56.544 160.236 52.512H170.7C168.204 58.912 164.236 63.872 158.796 67.392C153.356 70.848 146.988 72.576 139.692 72.576C133.484 72.576 127.82 71.136 122.7 68.256C117.644 65.312 113.644 61.248 110.7 56.064C107.756 50.88 106.284 45.024 106.284 38.496Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M191.096 64.416H223.736V72H180.728V65.088L213.176 12.672H181.112V5.088H223.544V12L191.096 64.416Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M244.378 5.088V72H235.642V5.088H244.378Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M281.597 38.496C281.597 31.968 283.069 26.112 286.013 20.928C288.957 15.68 292.957 11.584 298.013 8.64C303.133 5.696 308.797 4.224 315.005 4.224C322.301 4.224 328.669 5.984 334.109 9.504C339.549 13.024 343.517 18.016 346.013 24.48H335.549C333.693 20.448 331.005 17.344 327.485 15.168C324.029 12.992 319.869 11.904 315.005 11.904C310.333 11.904 306.141 12.992 302.429 15.168C298.717 17.344 295.805 20.448 293.693 24.48C291.581 28.448 290.525 33.12 290.525 38.496C290.525 43.808 291.581 48.48 293.693 52.512C295.805 56.48 298.717 59.552 302.429 61.728C306.141 63.904 310.333 64.992 315.005 64.992C319.869 64.992 324.029 63.936 327.485 61.824C331.005 59.648 333.693 56.544 335.549 52.512H346.013C343.517 58.912 339.549 63.872 334.109 67.392C328.669 70.848 322.301 72.576 315.005 72.576C308.797 72.576 303.133 71.136 298.013 68.256C292.957 65.312 288.957 61.248 286.013 56.064C283.069 50.88 281.597 45.024 281.597 38.496Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M389.353 72.672C383.145 72.672 377.481 71.232 372.361 68.352C367.241 65.408 363.177 61.344 360.169 56.16C357.225 50.912 355.753 45.024 355.753 38.496C355.753 31.968 357.225 26.112 360.169 20.928C363.177 15.68 367.241 11.616 372.361 8.736C377.481 5.792 383.145 4.32 389.353 4.32C395.625 4.32 401.321 5.792 406.441 8.736C411.561 11.616 415.593 15.648 418.537 20.832C421.481 26.016 422.953 31.904 422.953 38.496C422.953 45.088 421.481 50.976 418.537 56.16C415.593 61.344 411.561 65.408 406.441 68.352C401.321 71.232 395.625 72.672 389.353 72.672ZM389.353 65.088C394.025 65.088 398.217 64 401.929 61.824C405.705 59.648 408.649 56.544 410.761 52.512C412.937 48.48 414.025 43.808 414.025 38.496C414.025 33.12 412.937 28.448 410.761 24.48C408.649 20.448 405.737 17.344 402.025 15.168C398.313 12.992 394.089 11.904 389.353 11.904C384.617 11.904 380.393 12.992 376.681 15.168C372.969 17.344 370.025 20.448 367.849 24.48C365.737 28.448 364.681 33.12 364.681 38.496C364.681 43.808 365.737 48.48 367.849 52.512C370.025 56.544 372.969 59.648 376.681 61.824C380.457 64 384.681 65.088 389.353 65.088Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M502.358 5.568V72H493.622V22.464L471.542 72H465.398L443.222 22.368V72H434.486V5.568H443.894L468.47 60.48L493.046 5.568H502.358Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M561.909 24.672C561.909 30.24 559.989 34.88 556.149 38.592C552.373 42.24 546.581 44.064 538.773 44.064H525.909V72H517.173V5.088H538.773C546.325 5.088 552.053 6.912 555.957 10.56C559.925 14.208 561.909 18.912 561.909 24.672ZM538.773 36.864C543.637 36.864 547.221 35.808 549.525 33.696C551.829 31.584 552.981 28.576 552.981 24.672C552.981 16.416 548.245 12.288 538.773 12.288H525.909V36.864H538.773Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M612.319 57.12H583.135L577.759 72H568.543L592.735 5.472H602.815L626.911 72H617.695L612.319 57.12ZM609.823 50.016L597.727 16.224L585.631 50.016H609.823Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M690.063 72H681.326L646.191 18.72V72H637.455V4.992H646.191L681.326 58.176V4.992H690.063V72Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            <path d="M751.803 5.088L730.011 46.752V72H721.274V46.752L699.386 5.088H709.083L725.595 38.976L742.107 5.088H751.803Z" stroke="white" stroke-width="8" mask="url(#path-1-outside-1)"/>
            </svg>
        </div>
    </div>
    <div class="save-animation" style =" <?php echo $saveAnim?>">
        
    </div>
    <div class="first-part">
        <div class="campany-name">TECZI COMPANY</div>
        <div class="menu">
            <a class="menu-calendary" active>Kalendarz</a>
            <a class="menu-entertainment" href="../game">Strefa rozrywki</a>
            <a class="menu-log-out" href="logout.php" ><?php echo $_SESSION['login']; ?> <br> Wyloguj się!
                </a>
        </div>
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="lessons">
            <div class="lessons-marker" ></div>
            <div class="lessons-subcjets" >
                <div class="lessons-subcjet"><h5>pol</h5></div>
                <div class="lessons-subcjet"><h5>sso</h5></div>
                <div class="lessons-subcjet"><h5>sso</h5></div>
                <div class="lessons-subcjet"><h5>matematyka</h5></div>
                <div class="lessons-subcjet"><h5>polski</h5></div>
                <div class="lessons-subcjet"><h5>15</h5></div>
                <div class="lessons-subcjet"><h5>angielski</h5></div>
                <div class="lessons-subcjet"><h5>cos</h5></div>
                <div class="lessons-subcjet"><h5>cos</h5></div>
                <div class="lessons-subcjet"><h5>cos</h5></div>
                <div class="lessons-subcjet"><h5>cos</h5></div>
            </div>
            <div class="lessons-time-line">
                <div class="lessons-time-line-point" ></div>    
                <div class="lessons-time-line-point" >7:00</div>    
                <div class="lessons-time-line-point" >8:00</div>    
                <div class="lessons-time-line-point" >9:00</div>    
                <div class="lessons-time-line-point" >10:00</div>   
                <div class="lessons-time-line-point" >11:00</div>   
                <div class="lessons-time-line-point" >12:00</div>   
                <div class="lessons-time-line-point" >13:00</div>   
                <div class="lessons-time-line-point" >14:00</div>   
                <div class="lessons-time-line-point" >15:00</div>   
                <div class="lessons-time-line-point" >16:00</div>   
            </div>
            
        </div>
    </div>
        <div class="container">
            <div class="lesson-information-container">
                <div class="current-time"> <div class="result"></div>  <div class="comment"></div>  </div>
                <div class="time-until-breakOrLesson">  <div class="result"></div> <div class="comment"></div>  </div>
                <div class="next-lesson"> <div class="result"></div> <div class="comment"></div>  </div>
            </div>

            <form method="post" action="wyslij.php">
                Zapisz obecny stan
                
                <input type="submit" value="zapisz" class="save-on-server">

            </form>
            <div class="calendary-switch-month-container">
                <div class="switch-month-panel">
                    <div class="previous-month">&#11164;</div>
                    <div class="display-month-and-year">
                        <div class="display-month">2021</div>
                        <div class="display-year">2021</div>
                    </div>
                    <div class="next-month">&#11166;</div>
                </div>
            </div>
            <div class="calendary-panel-curtain-container">
                <div class="calendary-panel-curtain"></div>

                <div class="calendary-panel">

                    <div class="panel-menu">
                        <div class="add-task" > Dodaj nowe zadnie </div>
                        <div class="show-task" > Pokaż wszystkie zadania </div>
                    </div>

                    <div class="add-task-panel">
                        Wybierz godzine
                            <input type="time" name="edit-time" class="edit-time">
                        <br>
                        <div class="form">
                            <input type="text" name="edit-title" class="edit-title" required autocomplete="off">
                            <label for="name" class="label-name">
                                <span class="content-name">Tytuł</span> 
                            </label>
                        </div>
                        <br>
                        <div class="form">
                            <input type="text" name="edit-text-area" class="edit-text-area" required autocomplete="off">
                            <label for="name" class="label-name">
                                <span class="content-name">szczegóły zadania</span> 
                            </label>
                        </div>
                        <!-- <p>Wpisz szczegóły zadania<i>( nie używaj znaku & )</i> </p> -->
                        <!-- <div name="edit-text-area" class="edit-text-area" 
                        contenteditable="true" role="textbox" spellcheck="true" tabindex="0"
                         style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;">
                         </div><br> -->
                        <input type="submit" value="zapisz" name="task-save" class="task-save">
                        <div class="edit-error"></div>
                    </div>
                    <div class="show-task-panel visibility">
                        
                    </div>
                </div>

            </div>
            <div class="calendary"> 
            </div>

            <div class="goal-information"> 
                <div class="goal-information-title">SPRAWDŹ STATYSTYKI CELÓW I ZADAŃ </div>
                <div class="goal-information-close-button"> &#11165;</div>
                <div class="goal-information"></div>
                <div class="goal-information-swiper-container">
                    <div class="swiper-slide">PRZEDAWNIONE</div>
                    <div class="swiper-slide active-slide">Do zrobienia</div>
                    <div class="swiper-slide">Wykonane</div>
                  </div>
                <div class="goal-information-container">
                    <div class="goal-information-container-switch">
                        <div class="switch-task active-switch">ZADANIA</div>
                        <div class="switch-goals">CELE</div>
                    </div>
                    <div class="goal-information-container-currentEl"></div>
                    <div class="goal-information-container-list">
                   <!-- /// nazwa , (i)-po kliknięciu pojawia się opis ,
                    kliknij do usuniece,chcekbox, przycisk przenieś  - poklinięciu wysuwa się (mozliwosci[wykona, do zrobienia,przedawnione])
                    kresk oddzielająca wszystkie elementy -->
                    </div>
                    <div class="goal-list-panel-info"></div>
                    <div class="goal-list-panel"></div>
                    <canvas id="myChart" width="400px" height="200px"></canvas>
                </div>
                
            </div>

        <div class="useful-container">
            <div class="link-container">
                <div class="link-top-panel">
                    <div class="link-title">LINKI</div>
                    <div class="add-new-link-container">
                        <div class="form">
                            <input type="text" name="new-link-name" class="new-link-name" required autocomplete="off">
                            <label for="name" class="label-name">
                                <span class="content-name">Nazwa</span> 
                            </label>
                        </div>
                        <div class="form">
                            <input type="text" name="new-link" class="new-link" required autocomplete="off">
                            <label for="name" class="label-name">
                                <span class="content-name">Link</span> 
                            </label>
                        </div>
                        <button class="add-newLink-button"></button>
                    </div>
                </div>
                
                <div class="link-list">
                    <!-- <div class="link">
                        <a href="#" target="_blank" rel="noopener noreferrer">Youtube</a>
                        <button class="remove-list-button">usuń</button>
                        <div class="belt"></div>
                    </div> -->
                </div>
            </div>
            <div class="goal-container">
                <div class="goal-top-panel">
                    <div class="goal-title">CELE</div>
                    <div class="add-new-goal-container">
                        <div class="form">
                            <input type="text" class="new-goal-name" required autocomplete="off">
                            <label for="name" class="label-name">
                                <span class="content-name">Nazwa</span> 
                            </label>
                        </div>
                        <div class="input-container">
                            <input type="time" class="input-goal-time">
                            <input class="input-goal-day" type="text" maxlength="2" placeholder="DD" autocomplete="off">
                            <input class="input-goal-month" type="text" maxlength="2" placeholder="MM" autocomplete="off">
                            <input class="input-goal-year" type="text" maxlength="4" value="2023" placeholder="YYYY" autocomplete="off">
                        </div>
                        <button class="add-newGoal-button"></button>
                    </div>
                </div>
                
                <div class="goal-list">

                    <!-- <div class="goal">
                        <div class="goal-top-container">
                            <div class="goal-title">Przeczytać przedwiośnie</div>
                            <div class="belt">
                                <div class="fat-belt"></div>
                            </div>
                            
                            <div class="time-to-end active-goal-div">14h10min</div>

                            <button class="check-goal">✔️</button>
                            <div class="gear-goal"></div>
                            <div class="remove-goal-button"></div>
                        </div>
                        <div class="date-conteiner">
                            <div class="date-from">15-09-2021</div>
                            <div class="date-to">1-10-2021 / 18:00</div>
                        </div>

                    </div> -->
                </div>
            </div>
        </div>
        <!-- <div class="container-right">
            <div class="logo"></div>
            <div class="accessories">
                <div class="countdown-timer"></div>
            </div>
        </div> -->  
</body>
</html>

<?php 

