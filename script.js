$(document).ready(function(){
    var magicBall = {};
    magicBall.listofanswers = ["It is certain", "Yes - definitely", "Better not tell you now", "Don't count on it", "Very doubtful", "Cannot predict now", "My reply is no", "Ask again later"];
    $("#answer").hide();
    magicBall.shake = function (question) {
        $("#answer").fadeIn(4000);
        var index = Math.floor(Math.random() * this.listofanswers.length);
        var answer = (this.listofanswers[index]);
        $("#answer").text( answer );
        console.log(question);
        console.log(answer);
    };
    
    $("#answer").hide();
    
    
        
    setTimeout(
        function(){
            //show prompt
        var onClick = function (){
        var question = prompt("Ask a yes or no question");
        magicBall.shake(question);
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#8ball").effect("shake");
        
            
    };
    
    $("#questionButton").click( onClick );
    
    }, 500);
    
    var resetBall = function () {
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        $("#answer").hide();
    };

    $("#8ball").click( resetBall );
    

    
    
        
    });
    
    
        