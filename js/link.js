const newLinkNameInput = document.querySelector(".new-link-name");
const newLinkInput = document.querySelector(".new-link");
const addNewLinkBtn = document.querySelector(".add-newLink-button");
const linkList = document.querySelector(".link-list");



  
addNewLinkBtn.addEventListener('click', function(){
    createLink(true);
    saveDataOnServer.style.display = "flex";
});


const createLink =(automatically,name,link)=>{

    if(automatically){
            if(newLinkNameInput.value == '' || newLinkInput.value == ''){
                alert('wypelnij pole formularza');
            }else{
                let NewLink =new Nlink(newLinkNameInput.value,newLinkInput.value,true);
                convertedLinks.push(NewLink);
                newLinkNameInput.value ='';
                newLinkInput.value='';
    
                NewLink.addEventLis();
            }
     
    }else{
        
        // let NewLink =new goal(newLinkNameInput.value,newLinkInput.value,automatically);
        //     convertedLinks.push(NewLink);
        //     newLinkNameInput.value ='';
        //     newLinkInput.value='';

        //     NewLink.addEventLis();
    }

};
const IDLinkSelection =()=>{
    if(AllIDLink.length >= 95){
        alert('wykorzystales limit linkow usun kilka');
        return -1;
    }else{
        let ID;
        do{  
            ID = Math.floor(Math.random() * 98);
        }while(AllIDLink.indexOf(ID) != -1);
        AllIDLink.push(ID);
        return ID;
    }
};


class Nlink {

    constructor(name,link,auto=false,id){
        if(auto){
            this.id = IDLinkSelection();
        }else{
            this.id = id;
        }
        this.name = name;
        this.link = link;
        this.appendToList();
    }

    appendToList() {
        linkList.insertAdjacentHTML("beforeend",
        `<div class="link" id="link-${this.id}">
            <a href="${this.link}" target="_blank" rel="noopener noreferrer">${this.name}</a>
            <button class="remove-list-button" id="link-btn-remove-${this.id}">usuń</button>
            <div class="belt"></div>
        </div>
        `); 
        this.linkDiv =document.querySelector("#link-"+this.id);
        this.removeBtn = document.querySelector("#link-btn-remove-"+this.id);

    }
    addEventLis(){
        let linkProperty = this;

        this.removeBtn.addEventListener('click', function(){
            AllDeleteIDL.push(convertedLinks[convertedLinks.indexOf(linkProperty)].id);
            // AllIDLink[AllIDLink.indexOf(convertedLinks[convertedLinks.indexOf(linkProperty)].id)] ='';
            convertedLinks[convertedLinks.indexOf(linkProperty)] = ''; 
            linkProperty.linkDiv.remove();
            saveDataOnServer.style.display = "flex";
        });
    }
    
}
//////////////////////////////////////////////////////////////////////////////////
let linksFromServer = document.querySelectorAll(".loading-from-the-database-link");
linksFromServer.forEach(element =>{
    let linkFromServer =new Nlink(
        element.querySelector(".nazwa").textContent.trim(),
        element.querySelector(".link").textContent.trim(),
        false,
        element.querySelector(".IDLinku").textContent.trim()
    );
    linkFromServer.addEventLis();
    convertedLinks.push(linkFromServer);
    fromServerLinks.push(linkFromServer);
    
}); 