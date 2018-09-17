var character1 = "https://3.bp.blogspot.com/-3klKyfh_d8E/VslywJs1vLI/AAAAAAAABQQ/x5LirkggCig/s1600/Padawan%2BKebobi%2BLightsaber%2B2.jpg";
var character2 = "https://vignette.wikia.nocookie.net/playstationallstarsbattleroyale/images/9/97/Lego_Luke_Skywalker.jpg/revision/latest?cb=20130123223344";
var character3 = "https://vignette.wikia.nocookie.net/lego/images/d/d0/Sidious_img2.jpg/revision/latest?cb=20110218203507";
var character4 = "https://i.ytimg.com/vi/vCQCKsTQkMY/maxresdefault.jpg";

var characters = [character1, character2, character3, character4];

var characterIds = ["ObiWan", "Luke", "Sidious", "Maul"];
var alt = ["Obi-Wan Kenobi", "Luke Skywalker", "Darth Sidious", "Darth Maul"];

var obiWan = {
    healthPoints: 120,
    attackPower: 8,
    counterAttackPower: 10
};
var lukeSkywalker = {
    healthPoints: 100,
    attackPower: 8,
    counterAttackPower: 5
};
var dSidious = {
    healthPoints: 150,
    attackPower: 8,
    counterAttackPower: 20
};
var dMaul= {
    healthPoints: 500,
    attackPower: 8,
    counterAttackPower: 19
};

var dataPower = [obiWan, lukeSkywalker, dSidious, dMaul];

for (var i = 0; i < characters.length; i++) {

    var characterBtn = $("<img>");     // Create image tags

    // Adding attributes to the images
    characterBtn.attr("src", characters[i]);
    // characterBtn.attr("id", characterIds[i]);
    characterBtn.attr("style", "height:150px; width: 200px");
    characterBtn.attr("alt", alt[i]);
    // characterBtn.addClass("image");
    // characterBtn.data("power", dataPower[i]);

    $("#initialPosition").append(characterBtn);    // Finally, append each crystal images
    
    characterBtn.wrap( "<div style= 'float: left; position: relative' class='image' id='"+ characterIds[i] + "'></div>" );
    // characterBtn.wrap( "<div></div>" );

    $("#"+characterIds[i]).append($("<h4 style='text-align:center'>"+alt[i]+"</h4>"));
    $("#"+characterIds[i]).data("power", dataPower[i]);
    $("#"+characterIds[i]).append($("<p style='text-align:center'>"+dataPower[i].healthPoints+"</p>"));
}



var id;
var id2;
var id3;
var id4;


$(document).one("click", ".image", function(e) {
    id = $(e.currentTarget).attr("id");
    console.log(id);
    console.log($("#"+id).attr("class"))

    $("#player").append($("#"+id));          // Selects the player

    characterIds.forEach(function(character) {
        if(id === character) {             // player cannot also be enemy. So do nothing!
            return;
        }
    
        $("#enemies").append($("#"+character));   // Selects the enemies
        $("#"+character).addClass("opponents");

        console.log(character)
        console.log($("#"+character).attr("class"))
    });

    
    $(document).one("click", ".opponents", function(e) {
        id2 = $(e.currentTarget).attr("id");

        console.log(id2);

        $("#defender").append($("#"+id2));    // Selects the defender

        
        $("#attack").on("click", function(){           // Attack

            var idData = $("#"+id).data("power");
            var id2Data = $("#"+id2).data("power");
            var id2Character = $("#"+id2+"> img").attr("alt")
            
            // console.log(idData);
            // console.log(id2Data);

            if (id2Data.healthPoints < 1) {
                return;
            }
            if (idData.healthPoints < 1){
                return;
            } 
            
            idData.healthPoints -= id2Data.counterAttackPower;
        
            id2Data.healthPoints -= idData.attackPower;

            $("#"+id +"> p").html($("<p style='text-align:center'>"+idData.healthPoints+"</p>"));
            $("#"+id2 +"> p").html($("<p style='text-align:center'>"+id2Data.healthPoints+"</p>"));




            console.log(idData.healthPoints);
            console.log(id2Data.healthPoints);
            console.log(idData.attackPower);
        
            $("#result").html("You attacked " + id2Character + " for " + idData.attackPower + " damage. <br>"
            + id2Character + " attacked you back for " + id2Data.counterAttackPower + " damage.")
            
            idData.attackPower = idData.attackPower * 2;
            
            if (idData.healthPoints < 1){
                $("#result").html("You have been defeated... GAME OVER!!!")
                $("#restartDiv").html("<button id = 'restart'>Restart</button>")  
                restart();
            } else if (id2Data.healthPoints < 1) {
                $("#result").html("You have defeated " + id2Character + ", you can choose to fight another enemy.");
                $("#"+id2).hide();
                choseOpponent() 

            } 
        });
            
    })
    
    function choseOpponent(){
        $(document).one("click", ".opponents", function(e) {
            id3 = $(e.currentTarget).attr("id");

            console.log(id3);

            $("#defender").append($("#"+id3));    // Selects the defender
            $("#result").html("");

            
            $("#attack").on("click", function(){           // Attack

                var idData = $("#"+id).data("power");
                var id3Data = $("#"+id3).data("power");
                var id3Character = $("#"+id3+"> img").attr("alt")
                
                // console.log(idData);
                // console.log(id3Data);

                if (id3Data.healthPoints < 1) {
                    return;
                }
                if (idData.healthPoints < 1){
                    return;
                } 
                
                idData.healthPoints -= id3Data.counterAttackPower;
            
                id3Data.healthPoints -= idData.attackPower;

                $("#"+id +"> p").html($("<p style='text-align:center'>"+idData.healthPoints+"</p>"));
                $("#"+id3 +"> p").html($("<p style='text-align:center'>"+id3Data.healthPoints+"</p>"));


                console.log(idData.healthPoints);
                console.log(id3Data.healthPoints);
                console.log(idData.attackPower);
            
                $("#result").html("You attacked " + id3Character + " for " + idData.attackPower + " damage. <br>"
                + id3Character + " attacked you back for " + id3Data.counterAttackPower + " damage.")
                
                idData.attackPower = idData.attackPower * 2;
                
                if (idData.healthPoints < 1){
                    $("#result").html("You have been defeated... GAME OVER!!!")
                    $("#restartDiv").html("<button id = 'restart'>Restart</button>")  
                    restart();
                } else if (id3Data.healthPoints < 1) {
                    $("#result").html("You have defeated " + id3Character + ", you can choose to fight another enemy.");
                    $("#"+id3).hide();
                    choseOpponent2() 
                } 
            });
            
        })
    }

    function choseOpponent2(){
        $(document).one("click", ".opponents", function(e) {
            id4 = $(e.currentTarget).attr("id");

            console.log(id4);

            $("#defender").append($("#"+id4));    // Selects the defender
            $("#result").html("");
            
            $("#attack").on("click", function(){           // Attack

                var idData = $("#"+id).data("power");
                var id4Data = $("#"+id4).data("power");
                var id4Character = $("#"+id4+"> img").attr("alt")
                
                // console.log(idData);
                // console.log(id4Data);

                if (id4Data.healthPoints < 1) {
                    return;
                }
                if (idData.healthPoints < 1){
                    return;
                } 
                
                idData.healthPoints -= id4Data.counterAttackPower;
            
                id4Data.healthPoints -= idData.attackPower;

                $("#"+id +"> p").html($("<p style='text-align:center'>"+idData.healthPoints+"</p>"));
                $("#"+id4 +"> p").html($("<p style='text-align:center'>"+id4Data.healthPoints+"</p>"));


                console.log(idData.healthPoints);
                console.log(id4Data.healthPoints);
                console.log(idData.attackPower);


            
                $("#result").html("You attacked " + id4Character + " for " + idData.attackPower + " damage. <br>"
                + id4Character + " attacked you back for " + id4Data.counterAttackPower + " damage.")
                
                idData.attackPower = idData.attackPower * 2;
                
                if (idData.healthPoints < 1){
                    $("#result").html("You have been defeated... GAME OVER!!!")
                    $("#restartDiv").html("<button id = 'restart'>Restart</button>")  
                    restart();
                } else if (id4Data.healthPoints < 1) {
                    $("#result").html("You Won!!!! GAME OVER!!!");
                    $("#restartDiv").html("<button id = 'restart'>Restart</button>") 
                    restart();                                  
                } 
            });
            
            
        })
    }
});



function restart() { 
    $('#restart').on("click", function() {
        location.reload();
    });
};

