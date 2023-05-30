const inputGoalDay = document.querySelector(".input-goal-day");
const inputGoalMonth = document.querySelector(".input-goal-month");
const inputGoalYear = document.querySelector(".input-goal-year");
const newGoalName = document.querySelector(".new-goal-name");
const gearGoal = document.querySelector(".gear-goal");
const inputGoalTime = document.querySelector(".input-goal-time");

const addNewGoalBtn = document.querySelector(".add-newGoal-button");
const goalList = document.querySelector(".goal-list");


inputGoalDay.addEventListener('change', function(){
    if(this.value < 1){
        this.value = 1;
    }else if(this.value > 31){
        this.value = 31;
    }
});
inputGoalMonth.addEventListener('change', function(){
    if(this.value < 1){
        this.value = 1;
    }else if(this.value > 12){
        this.value = 12;
    }
});
inputGoalYear.addEventListener('change', function(){
    if(this.value < 2021){
        this.value = 2021;
    }
});

function correctnessDate(day, month, year,hours,minutes) {
    const today = new Date();
    month = month-1;
    const d = new Date(year,month,day,hours,minutes,0);
    if(d < today ){
        alert('podaj prawidłową datę222');
        return false;
    }else{
        if (day==d.getDate() && month==d.getMonth() && year==d.getFullYear() && hours==d.getHours() && minutes==d.getMinutes())
            return true;
        else
            alert('podaj prawidłową datę');
            return false;
    }
    
}

function calculateNum(day, month, year,hours,minutes,corectDate=false) {
    if(corectDate==false){
        month = month-1;
    }
    const d = new Date(year,month,day,hours,minutes,0).getTime();
    return d;
}
  
addNewGoalBtn.addEventListener('click', function(){
    createGoal(true);
});


const createGoal =(automatically,name,dateS,dateE,goalID,expired,done)=>{
    let time = inputGoalTime.value.split(':');
    let hours = time[0];
    let minutes = time[1];

    if(automatically){
        if(correctnessDate(inputGoalDay.value,inputGoalMonth.value,inputGoalYear.value,hours,minutes)){

            let givenDate =inputGoalYear.value +'-'+inputGoalMonth.value+'-'+inputGoalDay.value+" "+hours+":"+minutes+":00";
            let dateNum =calculateNum(inputGoalDay.value,inputGoalMonth.value,inputGoalYear.value,hours,minutes);
            let NewGoal =new goal(newGoalName.value,givenDate,dateNum);
            convertedGoals.push(NewGoal);
            newGoalName.value ='';
            inputGoalMonth.value='';
            inputGoalDay.value =''; 
            inputGoalTime.value =''; 
            NewGoal.addEventLis();
            saveDataOnServer.style.display = "flex";
        };
    }else{

        let dateNumE =new Date(dateE).getTime();
        let dateNumS =new Date(dateS).getTime();
        if(expired== '1'){
            expired= true;
        }else{
            expired= false;
        }
        let NewGoal =new goal(name,dateE,dateNumE,done,expired,false,goalID,dateS,dateNumS);
        convertedGoals.push(NewGoal);
        goalsDateFromServer.push(NewGoal);
        if(!NewGoal.expired && !NewGoal.done == '0'){
            NewGoal.addEventLis();
        }
        
    }

};
const IDGoalSelection =()=>{
    if(AllIDGoal.length >= 95){
        alert('wykorzystales limit celi usun kilka');
        return -1;
    }else{
        let ID;
        do{  
            ID = Math.floor(Math.random() * 98);
        }while(AllIDGoal.indexOf(ID) != -1);
        AllIDGoal.push(ID);
        return ID;
    }
};


class goal {
    constructor(name,date,dateNum,done='0',expired=false,auto=true,goalID,dateS,dateNumS){
        const curDate =new Date();
        this.name = name;
        this.endDate = date;
        this.endDateNum = dateNum;
        if(auto){
            this.startDate = curDate.getFullYear() +'-'+ new Intl.DateTimeFormat('pl-US', { month: 'numeric'}).format(curDate)+'-'+curDate.getDate()+" "+curDate.getHours()+":"+curDate.getMinutes()+":00";
            this.startDateNum = curDate.getTime();
            this.id = IDGoalSelection();
        }else{
            this.startDate = dateS;
            this.startDateNum = dateNumS;
            this.id = goalID;
            AllIDGoal.push(goalID);
        }
        this.done = done;
        this.expired = expired;//przedawnione
        if(!expired){
            this.appendToList();
        }
      
    }

    appendToList() {
        //ten makaron jett tylko poto zeby zamiast np =0:2 wyswietlalo sie 00:02
        if(this.startDate.split(" ")[1].split(":")[0].length == 1 && this.startDate.split(" ")[1].split(":")[1].length == 1){
            this.startDate = this.startDate.split(" ")[0] +" "+ "0"+this.startDate.split(" ")[1].split(":")[0] +":0"+this.startDate.split(" ")[1].split(":")[1]+":00";
        }else if(this.startDate.split(" ")[1].split(":")[0].length == 1){
            this.startDate = this.startDate.split(" ")[0] +" "+ "0"+this.startDate.split(" ")[1].split(":")[0] +":"+this.startDate.split(" ")[1].split(":")[1]+":00";
        }else if(this.startDate.split(" ")[1].split(":")[1].length == 1){
            this.startDate = this.startDate.split(" ")[0] +" "+ this.startDate.split(" ")[1].split(":")[0] +":0"+this.startDate.split(" ")[1].split(":")[1]+":00";
        }

        let dateFrom = this.startDate.split(" ")[0] +" / "+ this.startDate.split(" ")[1].split(":")[0] +":"+ this.startDate.split(" ")[1].split(":")[1];
        let dateTo = this.endDate.split(" ")[0] +" / "+ this.endDate.split(" ")[1].split(":")[0] +":"+ this.endDate.split(" ")[1].split(":")[1];
        goalList.insertAdjacentHTML("beforeend",
        `<div class="goal" id='goal-${this.id}'>
            <div class="goal-top-container">
                <div class="goal-title">${this.name}</div>

                <div class="belt">
                    <div class="fat-belt" id='goal-fatBelt-${this.id}'></div>
                </div>

                <div class="time-to-end active-goal-div" id='goal-time-to-end-${this.id}'>14h10min</div>

                <button class="check-goal"  id='goal-check-${this.id}'>✔️</button>
                <div class="gear-goal"  id='goal-gear-${this.id}'></div>
                <div class="remove-goal-button" id='goal-removeBtn-${this.id}'></div>
            </div>
            <div class="date-conteiner">
                <div class="date-from" >${dateFrom}</div>
                <div class="date-to" >${dateTo}</div>
            </div>

        </div>
        `); 
        this.goalDiv =document.querySelector("#goal-"+this.id);
        this.goalFatBelt = document.querySelector("#goal-fatBelt-"+this.id);
        this.goalTimeToEnd = document.querySelector("#goal-time-to-end-"+this.id);

        this.checkBtn = document.querySelector("#goal-check-"+this.id);
        this.removeBtn = document.querySelector("#goal-removeBtn-"+this.id);
        this.gearBtn = document.querySelector("#goal-gear-"+this.id);

        this.howMuchToEnd();
    }
    addEventLis(){
        let goalProperty = this;

        this.checkBtn.addEventListener('click', function(){
            goalProperty.done = '1';
            AllDoneGoal.push(goalProperty);
            goalProperty.goalDiv.remove();
            saveDataOnServer.style.display = "flex";
        });

        this.removeBtn.addEventListener('click', function(){
            goalProperty.goalDiv.remove();
            console.log(goalProperty.id);
            AllDeleteGoal.push(goalProperty.id);
            // AllIDGoal[AllIDGoal.indexOf(convertedGoals[convertedGoals.indexOf(goalProperty)].id)] ='';
            convertedGoals[convertedGoals.indexOf(goalProperty)] = '';
            saveDataOnServer.style.display = "flex";
        });

        this.gearBtn.addEventListener('click', function(){
            goalProperty.checkBtn.classList.toggle('active-goal-div');
            goalProperty.removeBtn.classList.toggle('active-goal-div');
            goalProperty.goalTimeToEnd.classList.toggle('active-goal-div');
        });
        this.update();
    }
    update(){
        if(this.done =='0' && this.expired ==false){
            this.howMuchToEnd();
            this.udpdateBelt();
        }
    }
    udpdateBelt(){
        const d = new Date()
        const w =parseInt( 100 -((this.endDateNum -d.getTime() )/ (this.endDateNum - this.startDateNum )) *100);
        if(w > 100 || w < 0){

        }else{
            this.goalFatBelt.style.width = w+"%";
        }

    }
    howMuchToEnd(){
        let curD = new Date().getTime();
        let newText ='';
        if(new Date(this.endDateNum -curD).getDate() - 1 != 0){

            if(new Date(this.endDateNum).getMonth() > new Date(curD).getMonth()){

                if(new Date(this.endDateNum).getDate() < new Date(curD).getDate()){
                    newText = (new Date(this.endDateNum -curD).getDate() - 1)+"dni";
                }else{
                    newText = (new Date(this.endDateNum).getMonth() - new Date(curD).getMonth())+"msc";
                }
               

            }else{
                newText = (new Date(this.endDateNum -curD).getDate() - 1)+"dni";
            }
            
        }else if((new Date(this.endDateNum -curD).getHours()- 1) != 0){
            newText =(new Date(this.endDateNum -curD).getHours()- 1)+"h"+new Date(this.endDateNum -curD).getMinutes()+"min";
        }else{
            newText =new Date(this.endDateNum -curD).getMinutes()+"min";
        }
        this.goalTimeToEnd.textContent = newText;
        // console.log(newText);
    }
}

setInterval(function(){
    convertedGoals.forEach(e =>{
        if(e!=''){
            let d = new Date();
            if(e.endDateNum < d.getTime()){
                e.expired = true;
                e.goalDiv.remove();
            }else{
                e.update();
            }
            
        }else{
           
        }
    });
}, 3000);
///////////////////////////////////////////////////////////////wszystko co z php zwiazane///////////////////////////////////////////////////////////
let goalsFromServer = document.querySelectorAll(".loading-from-the-database-goal");
goalsFromServer.forEach(element =>{
    createGoal(
        false,
        element.querySelector(".nazwa").textContent.trim(),
        element.querySelector(".dataRozpoczecia").textContent.trim(),
        element.querySelector(".dataZakonczenia").textContent.trim(),
        element.querySelector(".IDCelu").textContent.trim(),
        element.querySelector(".wykonane").textContent.trim()
    );
}); 

