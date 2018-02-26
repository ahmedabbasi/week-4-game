$(document).ready(function () {



    //Assign the wins and losses
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);

        var randomNumber=(Math.floor(Math.random() * 120) + 1);
        $("#random-number").text(randomNumber);
    
        //function calRandom(){
        //var randomNumber = (Math.floor(Math.random() * 120) + 20);
        //$("#random-number").text(randomNumber);
        //};
        

    // Assign the values to shapes
    if (userScore < randomNumber) {

        var heartScore = (Math.floor(Math.random() * 12) + 1);
        $(".heart-shape").on("click", function () {
            $(".heart-shape").animate({
                height: "150px"
            });
            $(".heart-shape").animate({
                height: "120px"
            });
            userScore = heartScore + userScore;
            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                heartScore=(Math.floor(Math.random() * 12) + 1);
                alert("You Won");
                


            } else if (userScore > randomNumber) {
                losses++;
                $("#losses").text(losses);
                userScore = 0;
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                heartScore=(Math.floor(Math.random() * 12) + 1);
                alert("You lose");

            }
        });

        

        console.log(heartScore);


        var clubScore = (Math.floor(Math.random() * 12) + 1);
        $(".clubs-shape").on("click", function () {
            $(".clubs-shape").animate({
                height: "150px"
            });
            $(".clubs-shape").animate({
                height: "120px"
            });
            userScore = clubScore + userScore;
            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                clubScore = (Math.floor(Math.random() * 12) + 1);
                alert("You Won");

            } else if (userScore > randomNumber) {
                losses++;
                userScore = 0;
                $("#losses").text(losses);               
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                clubScore = (Math.floor(Math.random() * 12) + 1);
                alert("You lose");

            }
        });


        console.log(clubScore);

        var diamondScore = (Math.floor(Math.random() * 12) + 1);
        $(".diamond-shape").on("click", function () {
            $(".diamond-shape").animate({
                height: "150px"
            });
            $(".diamond-shape").animate({
                height: "120px"
            });
            userScore = diamondScore + userScore;
            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                diamondScore = (Math.floor(Math.random() * 12) + 1);
                alert("You Won");

                

            } else if (userScore > randomNumber) {
                losses++;
                userScore = 0;
                $("#losses").text(losses);                
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                diamondScore = (Math.floor(Math.random() * 12) + 1);
                alert("You lose");
                

            }
        });

        var spadeScore = (Math.floor(Math.random() * 12) + 1);
        $(".spade-shape").on("click", function () {
            $(".spade-shape").animate({
                height: "150px"
            });
            $(".spade-shape").animate({
                height: "120px"
            });
            userScore = spadeScore + userScore;

            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                spadeScore = (Math.floor(Math.random() * 12) + 1);
                alert("You Won");



            } else if (userScore > randomNumber) {
                losses++;
                userScore = 0;
                $("#losses").text(losses);
                $("#user-score").text(userScore);
                randomNumber = Math.floor(Math.random() * 120) + 1;
                $("#random-number").text(randomNumber);
                spadeScore = (Math.floor(Math.random() * 12) + 1);
                alert("You lose");


            }
        });
    } else {
        userScore = 0;

    }
});