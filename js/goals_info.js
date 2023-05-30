const goalInformationTitle = document.querySelector(".goal-information-title");
const goalInformation = document.querySelector(".goal-information");
const goalInformationCloseButton = document.querySelector(".goal-information-close-button");
const goalInformationContainer = document.querySelector(".goal-information-container");

let clickDrawChart = false;
let openTasks = true;
let currentKind = 'toDoTasks';
const swiperContainer = document.querySelector(".goal-information-swiper-container");

goalInformationTitle.addEventListener('click', function(){
    assigningTasks();
    fillGoalsInfo(currentKind,true);

    goalInformation.classList.remove("hideInfo");
    goalInformation.classList.add("animAppearInfo");

    goalInformationTitle.classList.remove("appearTitle");
    goalInformationTitle.classList.add("animTitle");

    setTimeout(function(){
        if(clickDrawChart == false){
            drawChart();
            clickDrawChart = true;
        }
      
        goalInformationCloseButton.classList.remove("hideButton"); 
        goalInformationCloseButton.style.visibility = "visible";
        goalInformationCloseButton.classList.add("animButton");
        goalInformation.style.height = goalInformation.offsetHeight+"px";
        goalInformationContainer.style.display = 'flex';
        swiperContainer.style.display = 'block';
    },400);
    goalInformation.classList.remove("hideInfo");
});


goalInformationCloseButton.addEventListener('click', function(){
    goalInformationContainer.style.display = 'none';
    swiperContainer.style.display = 'none';
    goalInformation.classList.remove("animAppearInfo");
    goalInformation.classList.add("hideInfo");

    goalInformationCloseButton.classList.remove("animButton");
    goalInformationCloseButton.classList.add("hideButton"); 

    goalInformationTitle.classList.remove("animTitle");
    goalInformationTitle.classList.add("appearTitle");
    setTimeout(function(){
        goalInformation.style.height = goalInformation.offsetHeight+"px";
    },400);
   
});

    let counter = 1;
    const swiperSlide = document.querySelectorAll(".swiper-slide");

    for (const element of swiperSlide) {
    element.id = counter;
    element.addEventListener('click' ,function (){
    for (const el of swiperSlide) {
        el.classList.remove("active-slide");  
    }
    element.classList.add("active-slide");  
    if(element.id == '1'){
        if(openTasks){
            currentKind = 'expiredTasks';
            fillGoalsInfo('expiredTasks',true);
        }else{
            currentKind = 'expiredGoals';
            fillGoalsInfo('expiredGoals',false);
        }
        swiperContainer.style.transform = "translateX("+swiperContainer.offsetWidth/3+"px)";
    }else if(element.id == '2'){
        if(openTasks){
            currentKind = 'toDoTasks';
            fillGoalsInfo('toDoTasks',true);
        }else{
            currentKind = 'toDoGoals';
            fillGoalsInfo('toDoGoals',false);
        }
        swiperContainer.style.transform = "translateX(0px)";
    }else{
        if(openTasks){
            currentKind = 'doneTasks';
            fillGoalsInfo('doneTasks',true);
        }else{
            currentKind = 'doneGoals';
            fillGoalsInfo('doneGoals',false);
        }
     
        swiperContainer.style.transform = "translateX(-"+swiperContainer.offsetWidth/3+"px)";
    }
    
    
    });
    counter++;
}

