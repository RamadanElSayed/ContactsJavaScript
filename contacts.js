var contactsObj=new ContactList();
var flagAdding=0;
var flagAddingEditing=0;
var submitBtn = document.getElementById('submitId');
var idTEXTnAME=document.getElementById('nameId');
var Contact=function(){

    this.id=Math.random;
    this.name="";
    this.email="";
    this.phone="";
};

function ContactList()
{

this.name="contactsValues";

this.objectsOFContacts=[];
this.addContact=function(contact)
{
    var i = -1;

    while (this.objectsOFContacts[++i] != undefined);
    this.objectsOFContacts[i] = contact;
    console.log(contact.email);
} 

this.removeContact=function(id)
{
    for(var i=0; i < this.objectsOFContacts.length; i++) {
        if(this.objectsOFContacts[i].id ==id)
        {
            this.objectsOFContacts.splice(i,1);
            break;
        }
     }
} 
this.editContact=function(id,contact)
{
      
    for(var i=0; i < this.objectsOFContacts.length; i++) {
        if(this.objectsOFContacts[i].id ==id)
        {
            this.objectsOFContacts[i] = contact;
            break;
        }
     }
} 
this.getContact=function(id)
{
    var filterObj = this.objectsOFContacts.filter(function(e) {
        return e.id == id;
      });
      console.log("filterObj"+filterObj[0].name);
    //return contact
} 
this.getAllContacts=function()
{
    return this.objectsOFContacts.length;
} 

}

function uniqueNumber() {
    var date = Date.now();
    
    if (date <= uniqueNumber.previous)
        date = ++uniqueNumber.previous;
      else 
        uniqueNumber.previous = date;
    
    return date;
}

uniqueNumber.previous = 0;

function ID(){
  return uniqueNumber();
};

function submitFuction()
{
    flagAdding++;
    var flagName=false;
    var flagEmail=false;
    var flagPhone=false;
    var valueOfName=document.getElementById('nameId').value;
    var valueOfEmail=document.getElementById('emailId').value;
    var valueOfPhone=document.getElementById('phoneId').value;
    if(!valueOfName=="")
    {
        for(var i=0;i<valueOfName.length;i++)
    {
       if(valueOfName.charAt(i)==" ")
      {
        valueOfName= valueOfName.charAt(0)+"."+valueOfName.substr(i+1,valueOfName.length-1);
           break;
           }

       }
       flagName=true;
    }
    if(!valueOfEmail=="")
    {
        flagEmail=true;
    }

    if(valueOfPhone.length==11)
     {
          flagPhone=true;
       }

       if(flagName&&flagEmail&&flagPhone)
       {

        if(flagAddingEditing==0)
        {
         var contactObject=new Contact();
 
         contactObject.id=ID();
         contactObject.name=valueOfName;
         contactObject.email=valueOfEmail;
         contactObject.phone=valueOfPhone;
         contactsObj.addContact(contactObject);
         var table = document.getElementById('tableId');
 
             var rowCount = table.rows.length;
             var row = table.insertRow(rowCount);
             
             var cell1 = row.insertCell(0);
             cell1.innerHTML =contactObject.name;
 
             var cell2 = row.insertCell(1);
             cell2.innerHTML = contactObject.email;
             
             var cell2 = row.insertCell(2);
             cell2.innerHTML = contactObject.phone;
 
             var cell3 = row.insertCell(3);
             var element2 = document.createElement("input");
             element2.type = "button";
             element2.value = "edit";
             element2.textContent=contactObject.name+"/"+contactObject.email+"/"+contactObject.phone;
             element2.style.padding = "10px";
             element2.setAttribute("id",flagAdding);
             var element3 = document.createElement("input");
             element3.type = "button";
             element3.value = "remove";
             element3.textContent='remove';
             element3.style.margin = "20px";
 
             element3.style.padding = "10px";
             cell3.appendChild(element2);
             cell3.appendChild(element3);
             element2.addEventListener('click',someEditRowFunction);
 
             element3.addEventListener('click',someDeleteRowFunction);
 
 
       }
       }
       else
       {
           alert("Please enter the values of all inputs filelds")
       }
    }

       function someEditRowFunction(e)
       {

        var editValues=[];
        editValues=e.target.textContent.split("/");

        document.getElementById("nameId").valu=editValues[0];
       document.getElementById('emailId').value=editValues[1];
       document.getElementById('phoneId').value=editValues[2];
      console.log(editValues[0]);
      console.log(editValues[1]);
      console.log(editValues[2]);

        console.log(e.target.textContent);
      //  alert("You have clicked button id = "+f);

       }
       function someDeleteRowFunction() {
        // event.target will be the input element.
        var td = event.target.parentNode; 
        var tr = td.parentNode;
        tr.parentNode.removeChild(tr);
  }
       /*

       function deleteRow(tableID) {
			try {
			var table = document.getElementById(tableID);
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) {
				var row = table.rows[i];
				var chkbox = row.cells[0].childNodes[0];
				if(null != chkbox && true == chkbox.checked) {
					if(rowCount <= 1) {
						alert("Cannot delete all the rows.");
						break;
					}
					table.deleteRow(i);
					rowCount--;
					i--;
				}


			}
			}catch(e) {
				alert(e);
			}
		}
       */
    
submitBtn.addEventListener('click',submitFuction);
