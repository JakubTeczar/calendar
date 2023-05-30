
let lessonsStart = ['7:05',"7:55","8:45","9:35","10:25","11:25","12:15","13:05","13:55","14:50","15:40"];
let timeStart = ['8:45',"8:45","8:45","7:55","8:45"] // start lessons
let timeEnd = ['15:35',"14:40","14:40","13:00","13:00"]  // end of lessons
const subcjetsWithoutBreaks = [
    ["","","HIS","FIZ","REL","ANG","BD","BD","AI","AI",""],
    ["","","MAT","POL","GW","AI","AI","WF","WF","",""],
    ["","","AI","AI","AI","BD","BD","ANG","FIZ","",""],
    ["","AI","AI","AI","MAT","ANG","HIS","","","",""],
    ["","","WF","REL","ANG","MAT","POL","","","",""]
] ;
const timeUntilBreakOrLesson = document.querySelector(".time-until-breakOrLesson .result");
const timeUntilComment = document.querySelector(".time-until-breakOrLesson .comment");
const nextLessonDiv = document.querySelector(".next-lesson .result");
const nextLessonDivComment = document.querySelector(".next-lesson .comment");
setInterval(changeTime, 1000);

function changeTime(){
    let time = new Date();
    // const time = new Date ('May 3, 2023 13:23:00');
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    AMPM = 'AM'; 
    if(sec<10){
        sec = "0"+sec;
    }else if(min<10){
        min = "0"+min;
    }else if(hr<10){
        hr = "0"+hr;
    }
    let curentTime = hr + ":" + min + ":" + sec; 
    document.querySelector('.current-time .result').textContent = curentTime;
    const dayName = new Intl.DateTimeFormat("en-US", { weekday:"short"}).format(time);
        if(dayName == 'Mon'){
            whatDay=0;
        }else if(dayName == 'Tue'){
            whatDay=1;
        }else if(dayName == 'Wed'){
            whatDay=2;
        }else if(dayName == 'Thu'){
            whatDay=3;
        }else if(dayName == 'Fri'){
            whatDay=4;
        }else{
            whatDay=9;
        }
        // console.log(hr + ":" + min ,whatDay);
        if(whatDay!=9){
            WhenBreak(hr + ":" + min , whatDay);
        }else{
            timeUntilBreakOrLesson.textContent = 'Jest weekend';
            nextLessonDiv.textContent = "Brak zajęć";
        }
    
}
changeTime();

// WhenBreak("6:52",0);

function WhenBreak(time,WhatDay){
    console.log(timeEnd[WhatDay]);
    let difference = 100;
    let whichLesson;
    let convertTime = ConvertTimeToNum(time);
    let startLesson = ConvertTimeToNum(timeStart[Number(WhatDay)]);
    let detectBreak = false;
    let howMuchIsLeft = 0;
    let NextLesson = '';
    if(convertTime < startLesson){
        timeUntilBreakOrLesson.textContent = 'Jest przed lekcjami';
        for(let i = 0 ; i < 10 ; i++){
            if(subcjetsWithoutBreaks[Number(WhatDay)][i]!=""){
                // console.log(subcjetsWithoutBreaks[whatDay][i] ,"ez");
                nextLessonDivComment.textContent = "to pierwsza lekcja";
                nextLessonDiv.textContent = subcjetsWithoutBreaks[WhatDay][i];
                break;
            }
        }
    }else if(convertTime>ConvertTimeToNum(timeEnd[WhatDay])){
        timeUntilBreakOrLesson.textContent = 'Jest po lekcjch';
        nextLessonDiv.textContent = "Brak zajęć";
    }else{
        for(const element of lessonsStart){
            let converEl =ConvertTimeToNum(element);
            // console.log(convertTime - converEl);
            if(convertTime - converEl < difference && convertTime - converEl > 0){
                difference = convertTime - converEl;
                if(difference > 45){
                    detectBreak = true;
                    let detectNextLesson = false;
                    let i = 0;
                    for(const el of lessonsStart){
                        i++;
                        // console.log(i, subcjetsWithoutBreaks[whatDay-1][i] );
                        if(el==element){
                            detectNextLesson = true;
                            continue;
                            
                        }
                        if(detectNextLesson == true){
                            // console.log(subcjetsWithoutBreaks[whatDay][i]);
                            howMuchIsLeft = difference -45 ;
                            NextLesson = subcjetsWithoutBreaks[whatDay][i];
                            detectNextLesson = false;
                        }
                        

                    }
                    if(NextLesson != ""){
                        nextLessonDivComment.textContent = "następna lekcja "
                        nextLessonDiv.textContent = NextLesson;
                    }
                }else{
                    detectBreak = false;
                    howMuchIsLeft = 45 - difference;
                }
                
                whichLesson = element;
            };
            
        }
        if(detectBreak == true){
            console.log(convertTime , ConvertTimeToNum("11:10"),ConvertTimeToNum("11:20"));
            timeUntilComment.textContent = 'do konca przerwy ';
            if(convertTime > ConvertTimeToNum("11:10") && convertTime < ConvertTimeToNum("11:30")){
                console.log("to to");
                timeUntilBreakOrLesson.textContent = 15- howMuchIsLeft + " min";
            }else if(convertTime > ConvertTimeToNum("14:10") && convertTime < ConvertTimeToNum("15:00")){
                timeUntilBreakOrLesson.textContent = 10- howMuchIsLeft + " min";
            }else{
                timeUntilBreakOrLesson.textContent = 5- howMuchIsLeft + " min";
            }
           
           
        }else{
            timeUntilComment.textContent = 'do konca lekcji ';
            timeUntilBreakOrLesson.textContent = howMuchIsLeft + " min";
        }
        // console.log("w trakcie lekcji" ,difference ,whichLesson , howMuchIsLeft); 
    }
}

function ConvertTimeToNum(time){
    let arrTime =[...time];
    let hours = "",minutes = '';
    let change = false; // if is change true saves hours , if change is false saves minutes
    for(const element of arrTime){
        
        if(element == ":"){
            change=true;
            continue;
        }
        if(change == false){
            hours = hours + element;
        }else{
            minutes = minutes+ element;
        } 
        
    }
    ConvertetValue=Number(hours) * 60 + Number(minutes);
    return ConvertetValue;
}
//narazei zeby wykrywalo czy jeses na lekcji czy nie 
//wykryj na którą zaczyna i kończy w dany dzień i
//jesli mniejsze od czasu zaczęcia to przed lekjami napisz ile do zaczęcia lekji
//jesli po czasie końca lekcji to jest po lekcjach narysuj usmiechniętą buźkę
//teraz else 
//i spradz wszystkie lekcje i wykryj jaka różnica czasu jest najmniejsza i w taki sposób wykryj lekcje git
//poźniej spradź czy różnica nie jest większa od 45 i wtedy za pomocą wykrytej lekcji znajdź pasującą przerwe i licz do niej czas
// gdy czas jest większy od 45 wykryj przerwę i spradź ile do początku następnej lekcji wypisz czas 

