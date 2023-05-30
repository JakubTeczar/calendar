const time = document.querySelector(".lessons-time-line");
const lessons = document.querySelector(".lessons-subcjets");
const marker = document.querySelector(".lessons-marker");

// taskSave.addEventListener('click' ,function (){
//     AddNewTask();
// });
const subcjets = [
    ["","","HIS","FIZ","REL","15","ANG","BD","BD","AI","10","AI",""],
    ["","","MAT","POL","GW","15","AI","AI","WF","WF","10","",""],
    ["","","AI","AI","AI","15","BD","BD","ANG","FIZ","10","",""],
    ["","AI","AI","AI","MAT","15","ANG","HIS","","","10","",""],
    ["","","WF","REL","ANG","15","MAT","POL","","","10","",""]
] ;


const generateLesson = () => {
    lessons.innerHTML = "";
    if(window.innerWidth < 550 ){
        lessons.style.gridTemplateColumns = "repeat(5,3fr) 1.6fr repeat(4,3fr) 1.3fr repeat(2,3fr)"; 
    }else{
        lessons.style.gridTemplateColumns = "repeat(5,3fr) 1fr repeat(4,3fr) .6fr repeat(2,3fr)";
    }
    lessons.style.width = "95vw";
    // const today =new Date ('May 3, 2023 13:23:00');
    const today = new Date ();
    const dayName = new Intl.DateTimeFormat("en-US", { weekday:"short"}).format(today);
    let whatDay = 9;
    // for(const i of convertedTasks);

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
    if(whatDay != 9 ){
        for(let i = 0 ; i < 13 ; i++){
            lessons.insertAdjacentHTML("beforeend",`<div class="lessons-subcjet"><h5>${subcjets[whatDay][i]}</h5></div>`);
        }
    }else{
        lessons.style.gridTemplateColumns = "100%";
        lessons.style.width = "50%";
        lessons.insertAdjacentHTML("beforeend",`<div class="lessons-subcjet">Weekend</div>`);
    }

};


const timeLesson = () => {

     const today = new Date ();
    // const today = new Date ('December 3, 2021 13:23:00');
    const todayHours = today.getHours();
    const todayMinutes = today.getMinutes();


    if(todayHours < 7){
        marker.style.left = "0%";
    }else if(todayHours > 17){
        marker.style.left = "100%";
    }else{
        
        marker.style.left = `${((((todayHours-7)*10)+5) + (todayMinutes * .16) )-todayHours*0.08}%`;
        // marker.style.left = `74%`;
    }
    

};
const upDateTime = () => {
    setTimeout("generateLesson()", 60000);
    setTimeout("timeLesson()", 60000);
    setTimeout("upDateTime()", 60000);
    };

generateLesson();
timeLesson();
upDateTime();
CheckMobile();
///media query zmniejszanie 
window.addEventListener('resize', CheckMobile);

function CheckMobile(){
    let WindowWidth = window.innerWidth;
    if(WindowWidth < 520 ){
        ChangeLessonsTime(true);
    }else{
        ChangeLessonsTime(false);
    }

}
function ChangeLessonsTime(moblie){
    const lessonsTime = document.querySelectorAll(".lessons-time-line-point");
    let hoursStart = 6; 
    lessonsTime.forEach(function(el){
        
        if(el.textContent == ""){
    
        }else{
            if(moblie == true){
                el.textContent = hoursStart;
            }else{
                el.textContent = hoursStart +":00";
            }
            
        }
        hoursStart++;
    }
    
    );
};


