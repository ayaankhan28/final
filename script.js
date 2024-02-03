var word =
     para = document.getElementById('mess'),
     button = document.getElementById("sendpost"),
     input  =document.getElementById("thought"),
     like = document.getElementById("like"),

     out = document.getElementById('output');
var del=document.getElementById("delete");
 button.onclick = function(){
      replaceStory(input.value);
      document.getElementById("right").appendChild(out);

      
      
 };
 var data = {1:{"user":"ayaan","message":"hello"}};
 var likedcon = false;
 function createmessage(){
    console.log("reached");
   
    document.getElementById('right')[0].appendChild(out);
 }
 

 var replaceStory = function(data) {
         
        

        return para.innerHTML = data;
 };

 like.onclick = function(){
     if(likedcon==true){
          likedcon=false;
          like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";

     }
     else{
          likedcon=true;
          like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
     }
     
 }
 del.onclick = function(){
     myFunction();
 }
 function myFunction() {
     var txt;
     if (confirm("Are you sure you want to permanently delete this tweet ?")) {
       txt = "Delete";
       out.remove();
     } else {
       txt = "Cancel";
     }
     document.getElementById("demo").innerHTML = txt;
   }