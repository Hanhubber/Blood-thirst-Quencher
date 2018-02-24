/* firebase configuration and initialization 

var config = {  }; 

firebase.initializeApp(config); 
*/
var name = "" ;

var email = "";
var age = 0 ; 
var bloodType = "O+";
var comment = "";

$("addUser").on("click",function(){ 
    
    name = $("#nameInput").val().trim();
    email = $("#emailInput").val().trim();
    age =  $("#age").val().trim();
    bloodType = $("#bloodtypeInput").val().trim();
    comment = $("#commentInput").val().trim();
    
    firebase.database().ref().push({ 
         name:name,
         email:email,
         age:age, 
         bloodType:bloodType,
         comment:comment,

         })
  


})