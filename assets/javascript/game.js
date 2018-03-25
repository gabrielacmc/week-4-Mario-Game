
$(document).ready(function () {

    var mario = {
        power: 20,
        live: 120,
    }

    var yoshi = {
        power: 10,
        live: 100,
    }

    var boo = {
        power: 15,
        live: 130,
    }

    var bowser = {
        power: 25,
        live: 150,
    }

    var alive = true;
    var counter = 0;

    function reset(){
        
        mario.power = 20;
        mario.live = 120;
        $("#mario .health").text(mario.live);
        yoshi.power = 10;
        yoshi.live = 100;
        $("#yoshi .health").text(yoshi.live);
        boo.power = 15;
        boo.live = 130;
        $("#boo .health").text(boo.live);
        bowser.power = 25;
        bowser.live = 150;
        $("#bowser .health").text(bowser.live);
        alive = true;
        counter = 0 ;
        $(".characters").removeClass("hidden");
        $(".characters").append($("#mario"));
        $(".characters").append($("#yoshi"));
        $(".characters").append($("#boo"));
        $(".characters").append($("#bowser"));
        $("#text").html("<p> </p>")
    }

    $("#reset").on("click", function () {
        reset();
        $("#reset").addClass("hidden");
    });

    $(".characters").on("click", "#mario", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#yoshi"));
        $("#enemys").append($("#boo"));
        $("#enemys").append($("#bowser"));
    }).on("click", "#yoshi", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#mario"));
        $("#enemys").append($("#boo"));
        $("#enemys").append($("#bowser"));
    }).on("click", "#boo", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#mario"));
        $("#enemys").append($("#yoshi"));
        $("#enemys").append($("#bowser"));
    }).on("click", "#bowser", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#mario"));
        $("#enemys").append($("#yoshi"));
        $("#enemys").append($("#boo"));
    })


    if (alive) {
        $("#enemys").on("click", "#mario", function () {
            $("#defender").html(this);
            attacker = ($(this).attr("id"));
            $("#text").html("<p>You will fight against Mario! </p>")
            $("#defender").removeClass("hidden");
        }).on("click", "#yoshi", function () {
            $("#defender").html(this);
            attacker = ($(this).attr("id"));
            $("#text").html("<p>You will fight against Yoshi! </p>")
            $("#defender").removeClass("hidden");
        }).on("click", "#boo", function () {
            $("#defender").html(this);
            attacker = ($(this).attr("id"));
            $("#text").html("<p>You will fight against Boo! </p>")
            $("#defender").removeClass("hidden");
        }).on("click", "#bowser", function () {
            $("#defender").html(this);
            attacker = ($(this).attr("id"));
            $("#text").html("<p>You will fight against Bowser! </p>")
            $("#defender").removeClass("hidden");
        })
    };

    

    $("#fight").on("click", function () {
        if (yourChar === "mario") {
            if (mario.live > 0) {

                if (attacker === "yoshi") {
                    yoshi.live = yoshi.live - mario.power;
                    if ((yoshi.live <= 0) && (counter === 2)) {
                        $("#defender").addClass("hidden");
                        $(".characters").append($("#yoshi"));
                        $(".characters").addClass("hidden");
                        $("#text").html("<p>You WON! </p>")
                        $("#reset").removeClass("hidden");

                    }
                    else if (yoshi.live <= 0) {
                        $("#text").html("<p>You defeated Yoshi! </p>")
                        $(".characters").append($("#yoshi"));
                        $(".characters").addClass("hidden");
                        counter++

                    }
                    else {
                        mario.live = mario.live - yoshi.power;
                        $("#text").html("<p> You attacked Yoshi for " + mario.power + " demage</p><p>Yoshi attacked you back for " + yoshi.power + " demage </p>")
                        mario.power = mario.power + 20;
                        $("#chosenCharacter .health").text(mario.live);
                        $("#defender .health").text(yoshi.live);

                        if (mario.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false

                        }

                    }
                }

            }
            if (attacker === "boo") {
                boo.live = boo.live - mario.power;
                if ((boo.live <= 0) && (counter === 2)) {
                    $("#defender").addClass("hidden");
                    $("#text").html("<p>You WON! </p>")
                    $(".characters").append($("#boo"));
                    $(".characters").addClass("hidden");
                    $("#reset").removeClass("hidden");

                }
                else if (boo.live <= 0) {
                    $("#text").html("<p>You defeated Boo! </p>")
                    $("#defender").addClass("hidden");
                    $(".characters").append($("#boo"));
                    $(".characters").addClass("hidden");
                    counter++

                }
                else {
                    mario.live = mario.live - boo.power;
                    $("#text").html("<p> You attacked Boo for " + mario.power + " demage</p><p>Boo attacked you back for " + boo.power + " demage </p>")
                    mario.power = mario.power + 20;
                    $("#chosenCharacter .health").text(mario.live);
                    $("#defender .health").text(boo.live);
                    if (mario.live <= 0) {
                        $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        $("#reset").removeClass("hidden");
                        alive = false
                    }
                }

            }
            if (attacker === "bowser") {
                bowser.live = bowser.live - mario.power;
                if (bowser.live <= 0) {
                    if ((bowser.live <= 0) && (counter === 2)) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You WON! </p>")
                        $(".characters").append($("#bowser"));
                        $(".characters").addClass("hidden");
                        $("#reset").removeClass("hidden");

                    }
                    else if (bowser.live <= 0) {
                        $("#text").html("<p>You defeated Bowser! </p>")
                        $("#defender").addClass("hidden");
                        $(".characters").append($("#bowser"));
                        $(".characters").addClass("hidden");
                        counter++

                    }

                }
                else {
                    mario.live = mario.live - bowser.power;
                    $("#text").html("<p> You attacked Bowser for " + mario.power + " demage</p><p>Bowser attacked you back for " + bowser.power + " demage </p>")
                    mario.power = mario.power + 20;
                    $("#chosenCharacter .health").text(mario.live);
                    $("#defender .health").text(bowser.live);
                    if (mario.live <= 0) {
                        $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        $("#reset").removeClass("hidden");
                        
                        alive = false
                    }
                }


            }
        }



        if (yourChar === "yoshi") {

            if (yoshi.live > 0) {

                if (attacker === "mario") {
                    mario.live = mario.live - yoshi.power;
                        if ((mario.live <= 0) && (counter === 2)) {
                            $("#defender").addClass("hidden");
                            $("#text").html("<p>You WON! </p>")
                            $(".characters").append($("#mario"));
                            $(".characters").addClass("hidden");
                            $("#reset").removeClass("hidden");

                        }
                        else if (mario.live <= 0) {
                            $("#text").html("<p>You defeated Mario! </p>")
                            $("#defender").addClass("hidden");
                            counter++
                            $(".characters").append($("#mario"));
                            $(".characters").addClass("hidden");

                        }
                    else {
                        yoshi.live = yoshi.live - mario.power;
                        $("#text").html("<p> You attacked Mario for " + yoshi.power + " demage</p><p>Mario attacked you back for " + mario.power + " demage </p>")
                        yoshi.power = yoshi.power + 10;
                        $("#chosenCharacter .health").text(yoshi.live);
                        $("#defender .health").text(mario.live);
                        if (yoshi.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }

                }
                if (attacker === "boo") {
                    boo.live = boo.live - yoshi.power;
                    if ((boo.live <= 0) && (counter === 2)) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You WON! </p>")
                        $(".characters").append($("#boo"));
                        $(".characters").addClass("hidden");
                        $("#reset").removeClass("hidden");

                    }
                    else if (boo.live <= 0) {
                        $("#text").html("<p>You defeated Boo! </p>")
                        counter++
                        $(".characters").append($("#boo"));
                        $(".characters").addClass("hidden");

                    }
                    else {
                        yoshi.live = yoshi.live - boo.power;
                        $("#text").html("<p> You attacked Boo for " + yoshi.power + " demage</p><p>Boo attacked you back for " + boo.power + " demage </p>")
                        yoshi.power = yoshi.power + 10;
                        $("#chosenCharacter .health").text(yoshi.live);
                        $("#defender .health").text(boo.live);
                        if (yoshi.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }

                }
                if (attacker === "bowser") {
                    bowser.live = bowser.live - yoshi.power;
                    if (bowser.live <= 0) {
                        if ((bowser.live <= 0) && (counter === 2)) {
                            $("#defender").addClass("hidden");
                            $("#text").html("<p>You WON! </p>")
                            $(".characters").append($("#bowser"));
                            $(".characters").addClass("hidden");
                            $("#reset").removeClass("hidden");

                        }
                        else if (bowser.live <= 0) {
                            $("#text").html("<p>You defeated Bowser! </p>")
                            $("#defender").addClass("hidden");
                            $(".characters").append($("#bowser"));
                            $(".characters").addClass("hidden");
                            counter++

                        }

                    }
                    else {
                        yoshi.live = yoshi.live - bowser.power;
                        $("#text").html("<p> You attacked Bowser for " + yoshi.power + " demage</p><p>Bowser attacked you back for " + bowser.power + " demage </p>")
                        yoshi.power = yoshi.power + 10;
                        $("#chosenCharacter .health").text(yoshi.live);
                        $("#defender .health").text(bowser.live);
                        if (yoshi.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false;
                        }
                    }
                }
            }
        }




        if (yourChar === "boo") {
            if (boo.live > 0) {

                if (attacker === "mario") {
                    mario.live = mario.live - boo.power;
                        if ((mario.live <= 0) && (counter === 2)) {
                            $("#defender").addClass("hidden");
                            $("#text").html("<p>You WON! </p>")
                            $(".characters").append($("#mario"));
                            $(".characters").addClass("hidden");
                            $("#reset").removeClass("hidden");

                        }
                        else if (mario.live <= 0) {
                            $("#text").html("<p>You defeated Mario! </p>")
                            $("#defender").addClass("hidden");
                            $(".characters").append($("#mario"));
                            $(".characters").addClass("hidden");
                            counter++

                        }
                    
                    else {
                        boo.live = boo.live - mario.power;
                        boo.power = boo.power + 15;
                        $("#text").html("<p> You attacked Mario for " + boo.power + " demage</p><p>Mario attacked you back for " + mario.power + " demage </p>")
                        $("#chosenCharacter .health").text(boo.live);
                        $("#defender .health").text(mario.live);
                        if (boo.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }
                }
                if (attacker === "yoshi") {
                    yoshi.live = yoshi.live - boo.power;
                    if ((yoshi.live <= 0) && (counter === 2)) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You WON! </p>")
                        $(".characters").append($("#yoshi"));
                        $(".characters").addClass("hidden");
                        $("#reset").removeClass("hidden");

                    }
                    else if (yoshi.live <= 0) {
                        $("#text").html("<p>You defeated Yoshi! </p>")
                        $("#defender").addClass("hidden");
                        $(".characters").append($("#yoshi"));
                        $(".characters").addClass("hidden");
                        counter++

                    }
                    else {
                        boo.live = boo.live - yoshi.power;
                        $("#text").html("<p> You attacked Yoshi for " + boo.power + " demage</p><p>Yoshi attacked you back for " + yoshi.power + " demage </p>")
                        boo.power = boo.power + 15;
                        $("#chosenCharacter .health").text(boo.live);
                        $("#defender .health").text(yoshi.live);
                        if (boo.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }
                }
                if (attacker === "bowser") {
                    bowser.live = bowser.live - boo.power;
                    if (bowser.live <= 0) {
                        if ((bowser.live <= 0) && (counter === 2)) {
                            $("#defender").addClass("hidden");
                            $("#text").html("<p>You WON! </p>")
                            $(".characters").append($("#bowser"));
                            $(".characters").addClass("hidden");
                            $("#reset").removeClass("hidden");

                        }
                        else if (bowser.live <= 0) {
                            $("#text").html("<p>You defeated Bowser! </p>")
                            $("#defender").addClass("hidden");
                            $(".characters").append($("#bowser"));
                            $(".characters").addClass("hidden");
                            counter++

                        }

                    }
                    else {
                        boo.live = boo.live - bowser.power;
                        $("#text").html("<p> You attacked Bowser for " + boo.power + " demage</p><p>Bowser attacked you back for " + bowser.power + " demage </p>")
                        boo.power = boo.power + 15;
                        $("#chosenCharacter .health").text(boo.live);
                        $("#defender .health").text(bowser.live);
                        if (boo.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }
                }

            }
        }

        if (yourChar === "bowser") {
            if (bowser.live > 0) {

                if (attacker === "mario") {
                    mario.live = mario.live - bowser.power;
                    if ((mario.live <= 0) && (counter === 2)) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You WON! </p>")
                        $(".characters").append($("#mario"));
                        $(".characters").addClass("hidden");
                        $("#reset").removeClass("hidden");

                    }
                    else if (mario.live <= 0) {
                        $("#text").html("<p>You defeated Mario! </p>")
                        $("#defender").addClass("hidden");
                        $(".characters").append($("#mario"));
                        $(".characters").addClass("hidden");
                        counter++

                    }
                    else {
                        bowser.live = bowser.live - mario.power;
                        $("#text").html("<p> You attacked Mario for " + bowser.power + " demage</p><p>Mario attacked you back for " + mario.power + " demage </p>")
                        bowser.power = bowser.power + 25;
                        $("#chosenCharacter .health").text(bowser.live);
                        $("#defender .health").text(mario.live);
                        if (bowser.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }
                }
                if (attacker === "yoshi") {
                    yoshi.live = yoshi.live - bowser.power;
                    if ((yoshi.live <= 0) && (counter === 2)) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You WON! </p>")
                        $(".characters").append($("#yoshi"));
                        $(".characters").addClass("hidden");
                        $("#reset").removeClass("hidden");

                    }
                    else if (yoshi.live <= 0) {
                        $("#text").html("<p>You defeated Yoshi! </p>")
                        $("#defender").addClass("hidden");
                        $(".characters").append($("#yoshi"));
                        $(".characters").addClass("hidden");
                        counter++

                    }
                    else {
                        bowser.live = bowser.live - yoshi.power;
                        bowser.power = bowser.power + 25;
                        $("#text").html("<p> You attacked Yoshi for " + bowser.power + " demage</p><p>Yoshi attacked you back for " + yoshi.power + " demage </p>")
                        $("#chosenCharacter .health").text(bowser.live);
                        $("#defender .health").text(yoshi.live);
                        if (bowser.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }
                }
                if (attacker === "boo") {
                    boo.live = boo.live - bowser.power;
                    if ((boo.live <= 0) && (counter === 2)) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You WON! </p>")
                        $(".characters").append($("#boo"));
                        $(".characters").addClass("hidden");
                        $("#reset").removeClass("hidden");

                    }
                    else if (boo.live <= 0) {
                        $("#text").html("<p>You defeated Boo! </p>")
                        $("#defender").addClass("hidden");
                        $(".characters").append($("#boo"));
                        $(".characters").addClass("hidden");
                        counter++

                    }
                    else {
                        bowser.live = bowser.live - boo.power;
                        $("#text").html("<p> You attacked Boo for " + bowser.power + " demage</p><p>Boo attacked you back for " + boo.power + " demage </p>")
                        bowser.power = bowser.power + 25;
                        $("#chosenCharacter .health").text(bowser.live);
                        $("#defender .health").text(boo.live);
                        if (bowser.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            $("#reset").removeClass("hidden");
                            alive = false
                        }
                    }
                }
            }
        }
    })

});
