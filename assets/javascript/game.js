$(document).ready(function () {



    //Assign the wins and losses
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);
    
        //Create a random variable
    var randomNumber = (Math.floor(Math.random() * 120) + 20);
        //Append a number to the div in HTMl
     $("#random-number").text(randomNumber);

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
            //$(".heart-shape").append(userScore);
            console.log(heartScore);
            console.log(userScore);
            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                alert("You Won");


            } else if (userScore > randomNumber) {
                losses++;
                $("#losses").text(losses);
                userScore = 0;
                $("#user-score").text(userScore);
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
            //$(".clubs-shape").append(userScore);
            console.log(clubScore);
            console.log(userScore);
            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                alert("You Won");

            } else if (userScore > randomNumber) {
                losses++;
                userScore = 0;
                $("#losses").text(losses);
                
                $("#user-score").text(userScore);
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
            // $(".diamond-shape").append(userScore);

            console.log(diamondScore);
            console.log(userScore);
            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                alert("You Won");

            } else if (userScore > randomNumber) {
                losses++;
                userScore = 0;
                $("#losses").text(losses);
                
                $("#user-score").text(userScore);
                alert("You lose");

            }
        });


        console.log(diamondScore);


        var spadeScore = (Math.floor(Math.random() * 12) + 1);
        $(".spade-shape").on("click", function () {
            $(".spade-shape").animate({
                height: "150px"
            });
            $(".spade-shape").animate({
                height: "120px"
            });
            userScore = spadeScore + userScore;
            //$(".spade-shape").append(userScore);
            console.log(spadeScore);
            console.log(userScore);
            $("#user-score").text(userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#wins").text(wins);
                userScore = 0;
                $("#user-score").text(userScore);
                alert("You Won");


            } else if (userScore > randomNumber) {
                losses++;
                userScore = 0;
                $("#losses").text(losses);
               
                $("#user-score").text(userScore);
                alert("You lose");

            }
        });
    } else {
        userScore = 0;
    }
});