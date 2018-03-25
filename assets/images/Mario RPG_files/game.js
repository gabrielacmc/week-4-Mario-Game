
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

    $(".characters").on("click", "#mario", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#yoshi"));
        $("#enemys").append($("#boo"));
        $("#enemys").append($("#bowser"));
        $(".characters").addClass("hidden");
    }).on("click", "#yoshi", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#mario"));
        $("#enemys").append($("#boo"));
        $("#enemys").append($("#bowser"));
        $(".characters").addClass("hidden");
    }).on("click", "#boo", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#mario"));
        $("#enemys").append($("#yoshi"));
        $("#enemys").append($("#bowser"));
        $(".characters").addClass("hidden");
    }).on("click", "#bowser", function () {
        $("#chosenCharacter").html(this);
        yourChar = ($(this).attr("id"));
        $("#enemys").append($("#mario"));
        $("#enemys").append($("#yoshi"));
        $("#enemys").append($("#boo"));
        $(".characters").addClass("hidden");
    })

    $("#enemys").on("click", "#mario", function () {
        $("#defender").html(this);
        attacker = ($(this).attr("id"));
        $("#defender").removeClass("hidden");
    }).on("click", "#yoshi", function () {
        $("#defender").html(this);
        attacker = ($(this).attr("id"));
        $("#defender").removeClass("hidden");
    }).on("click", "#boo", function () {
        $("#defender").html(this);
        attacker = ($(this).attr("id"));
        $("#defender").removeClass("hidden");
    }).on("click", "#bowser", function () {
        $("#defender").html(this);
        attacker = ($(this).attr("id"));
        $("#defender").removeClass("hidden");
    })

    $("#fight").on("click", function () {
        if (yourChar === "mario") {
            if (mario.live > 0) {
                
                if (attacker === "yoshi") {
                    yoshi.live = yoshi.live - mario.power;
                    if (yoshi.live <= 0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Yoshi! </p>")

                    }
                    else {
                        mario.live = mario.live - yoshi.power;
                        $("#text").html("<p> You attacked Yoshi for " + mario.power + " demage</p><p>Yoshi attacked you back for " + yoshi.power + " demage </p>")
                        mario.power = mario.power + 20;
                        $("#chosenCharacter .health").text(mario.live);
                        $("#defender .health").text(yoshi.live);
                        
                        if (mario.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")

                        }
                    }

                }
                if (attacker === "boo") {
                    boo.live = boo.live - mario.power;
                    if (boo.live <=0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Boo! </p>")

                    }
                    else {
                        mario.live = mario.live - boo.power;
                        $("#text").html("<p> You attacked Boo for " + mario.power + " demage</p><p>Boo attacked you back for " + boo.power + " demage </p>")
                        mario.power = mario.power + 20;
                        $("#chosenCharacter .health").text(mario.live);
                        $("#defender .health").text(boo.live);
                        if (mario.live <=0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                            
                        }
                    }

                }
                if (attacker === "bowser") {
                    bowser.live = bowser.live - mario.power;
                    if (bowser.live <=0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Bowser! </p>")

                    }
                    else {
                        mario.live = mario.live - bowser.power;
                        $("#text").html("<p> You attacked Bowser for " + mario.power + " demage</p><p>Bowser attacked you back for " + bowser.power + " demage </p>")
                        mario.power = mario.power + 20;
                        $("#chosenCharacter .health").text(mario.live);
                        $("#defender .health").text(bowser.live);
                        if (mario.live <=0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        }
                    }
                    

                }
            }

        }

        if (yourChar === "yoshi") {

            if (yoshi.live > 0) {
            
            if (attacker === "mario") {
                mario.live = mario.live - yoshi.power;
                if (mario.live <= 0) {
                    $("#defender").addClass("hidden");
                    $("#text").html("<p>You defeated Mario! </p>")

                }
                else {
                    yoshi.live = yoshi.live - mario.power;
                    $("#text").html("<p> You attacked Mario for " + yoshi.power + " demage</p><p>Mario attacked you back for " + mario.power + " demage </p>")
                    yoshi.power = yoshi.power + 10;
                    $("#chosenCharacter .health").text(yoshi.live);
                    $("#defender .health").text(mario.live);
                    if (yoshi.live <= 0) {
                        $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                    }
                }

            }
            if (attacker === "boo") {
                boo.live = boo.live - yoshi.power;
                if (boo.live <=0) {
                    $("#defender").addClass("hidden");
                    $("#text").html("<p>You defeated Boo! </p>")

                }
                else {
                    yoshi.live = yoshi.live - boo.power;
                    $("#text").html("<p> You attacked Boo for " + yoshi.power + " demage</p><p>Boo attacked you back for " + boo.power + " demage </p>")
                    yoshi.power = yoshi.power + 10;
                    $("#chosenCharacter .health").text(yoshi.live);
                    $("#defender .health").text(boo.live);
                    if (yoshi.live <= 0) {
                        $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                    }
                }

            }
            if (attacker === "bowser") {
                bowser.live = bowser.live - yoshi.power;
                if (bowser.live <= 0) {
                    $("#defender").addClass("hidden");
                    $("#text").html("<p>You defeated Bowser! </p>")

                }
                else {
                    yoshi.live = yoshi.live - bowser.power;
                    $("#text").html("<p> You attacked Bowser for " + yoshi.power + " demage</p><p>Bowser attacked you back for " + bowser.power + " demage </p>")
                    yoshi.power = yoshi.power + 10;
                    $("#chosenCharacter .health").text(yoshi.live);
                    $("#defender .health").text(bowser.live);
                    if (yoshi.live <= 0) {
                        $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                    }
                }
            }
            }
        }




        if (yourChar === "boo") {
            if (boo.live > 0) {
                
                if (attacker === "mario") {
                    mario.live = mario.live - boo.power;
                    if (mario.live <= 0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Mario! </p>")

                        
                    }
                    else {
                        boo.live = boo.live - mario.power;
                        boo.power = boo.power + 15;
                        $("#text").html("<p> You attacked Mario for " + boo.power + " demage</p><p>Mario attacked you back for " + mario.power + " demage </p>")
                        $("#chosenCharacter .health").text(boo.live);
                        $("#defender .health").text(mario.live);
                        if (boo.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        }
                    }
                }
                if (attacker === "yoshi") {
                    yoshi.live = yoshi.live - boo.power;
                    if (yoshi.live <= 0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Yoshi! </p>")

                    }
                    else {
                        boo.live = boo.live - yoshi.power;
                        $("#text").html("<p> You attacked Yoshi for " + boo.power + " demage</p><p>Yoshi attacked you back for " + yoshi.power + " demage </p>")
                        boo.power = boo.power + 15;
                        $("#chosenCharacter .health").text(boo.live);
                        $("#defender .health").text(yoshi.live);
                        if (boo.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        }
                    }
                }
                if (attacker === "bowser") {
                    bowser.live = bowser.live - boo.power;
                    if (bowser.live <= 0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Bowser! </p>")

                    }
                    else {
                        boo.live = boo.live - bowser.power;
                        $("#text").html("<p> You attacked Bowser for " + boo.power + " demage</p><p>Bowser attacked you back for " + bowser.power + " demage </p>")
                        boo.power = boo.power + 15;
                        $("#chosenCharacter .health").text(boo.live);
                        $("#defender .health").text(bowser.live);
                        if (boo.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        }
                    }
                }

            }
        }

        if (yourChar === "bowser") {
            if (bowser.live > 0) {
        
                if (attacker === "mario") {
                    mario.live = mario.live - bowser.power;
                    if (mario.live <= 0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Mario! </p>")

                    }
                    else {
                        bowser.live = bowser.live - mario.power;
                        $("#text").html("<p> You attacked Mario for " + bowser.power + " demage</p><p>Mario attacked you back for " + mario.power + " demage </p>")
                        bowser.power = bowser.power + 25;
                        $("#chosenCharacter .health").text(bowser.live);
                        $("#defender .health").text(mario.live);
                        if (bowser.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        }
                    }
                }
                if (attacker === "yoshi") {
                    yoshi.live = yoshi.live - bowser.power;
                    if (yoshi.live <= 0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Yoshi! </p>")

                    }
                    else {
                        bowser.live = bowser.live - yoshi.power;
                        bowser.power = bowser.power + 25;
                        $("#text").html("<p> You attacked Yoshi for " + bowser.power + " demage</p><p>Yoshi attacked you back for " + yoshi.power + " demage </p>")
                        $("#chosenCharacter .health").text(bowser.live);
                        $("#defender .health").text(yoshi.live);
                        if (bowser.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        }
                    }
                }
                if (attacker === "boo") {
                    boo.live = boo.live - bowser.power;
                    if (boo.live <= 0) {
                        $("#defender").addClass("hidden");
                        $("#text").html("<p>You defeated Boo! </p>")

                    }
                    else {
                        bowser.live = bowser.live - boo.power;
                        $("#text").html("<p> You attacked Boo for " + bowser.power + " demage</p><p>Boo attacked you back for " + boo.power + " demage </p>")
                        bowser.power = bowser.power + 25;
                        $("#chosenCharacter .health").text(bowser.live);
                        $("#defender .health").text(boo.live);
                        if (bowser.live <= 0) {
                            $("#text").html("<p>GAME OVER! You have been defeated! </p>")
                        }
                    }
                }
            }
        }
    })

});
