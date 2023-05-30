
let AllID= [];
let AllDeleteID= [];
let AllDoneID= [];
let convertedTasks = [];
let TaskFromServer = [];
const form = document.querySelector("form");
const SaveOnServerBt = document.querySelector(".save-on-server");

//////////////////////////////////////

let AllIDGoal = [];
let AllDoneGoal = [];
let AllDeleteGoal = [];
let convertedGoals = [];
let convertedLinks= [];
let AllIDLink = [];
let fromServerLinks = [];
let AllDeleteIDL =[];
let goalsDateFromServer = [];

////////////////////////////////////////////////

class task {

    constructor(id,name,description,date,done,from,time){
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.done = done;
        this.from = from;
        this.time = time;
    }
}
let taskList = document.querySelectorAll(".loading-from-the-database-task");
taskList.forEach(element =>{
    convertedTasks.push(new task(element.querySelector(".IDZadania").textContent.trim(),
    element.querySelector(".nazwa").textContent.trim(),
    element.querySelector(".szczegoly").textContent.trim(),
    element.querySelector(".data").textContent.trim(),
    element.querySelector(".wykonane").textContent.trim(),
    element.querySelector(".from").textContent.trim(),
    element.querySelector(".time").textContent.trim()
    ));
    AllID.push(element.querySelector(".IDZadania").textContent.trim());
    console.log(1);
}); 





const generateTableOnServer = () => {
    console.log(convertedTasks , TaskFromServer);
    let list = [];
    console.log(TaskFromServer);
    convertedTasks.forEach(el=>{
        if(TaskFromServer.indexOf(el) != -1){
        }else{
            list.push(el);
        }
        
    });
    return list;
    
};
const genTableGoalsOnServer = () => {
    let list = [];
    convertedGoals.forEach(el=>{
        if(el !=""){
            console.log(el);
            if(goalsDateFromServer.includes(el)){
                
            }else{
                list.push(el);
                console.log(el);
              
            }
        }
        
        
    });
    return list;
    
};

const genTableLinksOnServer = () => {
    let list = [];
    convertedLinks.forEach(el=>{
        if(el !=""){
            if(fromServerLinks.includes(el)){
                
            }else{
                list.push(el);
            }
        }
        
        
    });
    return list;
    
};


let gate=true;
SaveOnServerBt.addEventListener('click',function(){
    
  counter = 1;
    if(gate){
        event.preventDefault();
    let generateTable = generateTableOnServer();
    
    console.log(generateTable);
    generateTable.forEach(el=>{
        form.insertAdjacentHTML("afterbegin",
        `<input type="text" name="IDZadania${counter}T" value="${el.id}"> 
        <input type="text" name="nazwa${counter}T" value="${el.name}"> 
        <input type="text" name="szczegoly${counter}T" value="${el.description}"> 
        <input type="text" name="data${counter}T" value="${el.date}"> 
        <input type="text" name="wykonane${counter}T" value="${el.done}"> 
       `);
       counter++;
    });
    counter=counter-1;
    let TextDeleteID = "";
    AllDeleteID.forEach((element, index) => {
        if(index == 0){
            TextDeleteID =" IDZadania = "+ element;
        }else{
            TextDeleteID = TextDeleteID +" OR IDZadania = "+ element;
        }
        
    });
    let TextDoneID = "";
    AllDoneID.forEach((element, index) => {
        if(AllDeleteID.indexOf(element) == -1){
            if(index == 0){
                TextDoneID =" IDZadania = "+ element;
            }else{
                TextDoneID = TextDoneID +" OR IDZadania = "+ element;
            }
            
        }
    });
    console.log(TextDoneID);
    form.insertAdjacentHTML("afterbegin",`
    <input type="text" name="licznikT" value="${counter}"> 
    <input type="text" name="DeleteIDTask" value="${TextDeleteID}"> 
    <input type="text" name="DoneIDTask" value="${TextDoneID}"> 
    `);

 
    document.querySelector(".save-animation").classList.add("cover");
////////////////////////////////////////////////////////////////////teraz czesc na cele ///////////////////////////////////////////////////////////////
        let generateTableGoals = genTableGoalsOnServer();
        counter = 0;
        generateTableGoals.forEach(el=>{
            form.insertAdjacentHTML("afterbegin",
            `<input type="text" name="IDCelu${counter}G" value="${el.id}"> 
            <input type="text" name="nazwa${counter}G" value="${el.name}"> 
            <input type="text" name="dataRozpoczecia${counter}G" value="${el.startDate}"> 
            <input type="text" name="dataZakonczenia${counter}G" value="${el.endDate}"> 
            <input type="text" name="wykonane${counter}G" value="${el.done}"> 
        `);
        counter++;
        });
        let TextDeleteIDG = "";
        AllDeleteGoal.forEach((element, index) => {
            if(index == 0){
                TextDeleteIDG =" IDCelu = "+ element;
            }else{
                TextDeleteIDG = TextDeleteIDG +" OR IDCelu = "+ element;
            }
            
        });
        let TextDoneIDG = "";
        AllDoneGoal.forEach((element, index) => {
            if(AllDeleteGoal.indexOf(element.id) == -1){
                if(index == 0){
                    TextDoneIDG =" IDCelu =  "+ element.id;
                }else{
                    TextDoneIDG = TextDoneIDG +" OR IDCelu = "+ element.id;
                }
            }
        });

        form.insertAdjacentHTML("afterbegin",`
        <input type="text" name="licznikG" value="${counter}"> 
        <input type="text" name="DeleteIDGoal" value="${TextDeleteIDG}"> 
        <input type="text" name="DoneIDGoal" value="${TextDoneIDG}"> 
        `);
///////////////////////////////////////////////////////////////////czesc na linki////////////////////////////////////////////////////////////////////

        let generateTableLinks = genTableLinksOnServer();
        counter = 0;
        generateTableLinks.forEach(el=>{
            form.insertAdjacentHTML("afterbegin",
            `<input type="text" name="IDLinku${counter}L" value="${el.id}"> 
            <input type="text" name="nazwa${counter}L" value="${el.name}"> 
            <input type="text" name="link${counter}L" value="${el.link}"> 
        `);
        counter++;
        });
        let TextDeleteIDL = "";
        AllDeleteIDL.forEach((element, index) => {
            if(index == 0){
                TextDeleteIDL =" IDLinku = "+ element;
            }else{
                TextDeleteIDL = TextDeleteIDL +" OR IDLinku = "+ element;
            }
            
        });
        form.insertAdjacentHTML("afterbegin",`
        <input type="text" name="licznikL" value="${counter}"> 
        <input type="text" name="DeleteIDL" value="${TextDeleteIDL}"> 
        `);
        setTimeout(() => {
            gate= false;
            SaveOnServerBt.click();
        }, 250);

    }else{

    }

});
//new course('programowanie',20,100);
//krawiec.profit();


/////////////////////cos z datą jest nie tak odejmuje się jedno nie dobrez e