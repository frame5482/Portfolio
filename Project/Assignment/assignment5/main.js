window.onload = function() {
    document.getElementById("top").innerHTML = "Welcome to the Forum";
    var postCount = 0;

    window.postFunction = function() {
        postCount++;
        if (postCount == 1) {
           var topic =   document.getElementById("topic");
             topic.innerHTML = "topic";
        } 
        
        else if (postCount == 2) {
           var reply1 =  document.getElementById("reply1");
             reply1.innerHTML = "reply1";
        } 
        
        else if (postCount == 3) {
        var reply2 =   document.getElementById("reply2");
          reply2.innerHTML = "reply2";
        }
        
    }
window.clearFunction = function() {
      
             topic.innerHTML = "";

             reply1.innerHTML = "";
    
          reply2.innerHTML = "";
        postCount = 0;
    

}
}