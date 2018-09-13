var character1 = "https://3.bp.blogspot.com/-3klKyfh_d8E/VslywJs1vLI/AAAAAAAABQQ/x5LirkggCig/s1600/Padawan%2BKebobi%2BLightsaber%2B2.jpg";
var character2 = "https://vignette.wikia.nocookie.net/playstationallstarsbattleroyale/images/9/97/Lego_Luke_Skywalker.jpg/revision/latest?cb=20130123223344";
var character3 = "https://vignette.wikia.nocookie.net/lego/images/d/d0/Sidious_img2.jpg/revision/latest?cb=20110218203507";
var character4 = "https://i.ytimg.com/vi/vCQCKsTQkMY/maxresdefault.jpg";

var characters = [character1, character2, character3, character4];

var characterIds = ["ObiWan", "Luke", "Sidious", "Maul"];
var alt = ["Obi-Wan", "Luke", "Sidious", "Maul"];


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
    healthPoints: 180,
    attackPower: 8,
    counterAttackPower: 25
};





var dataPower = [obiWan, lukeSkywalker, dSidious, dMaul];


for (var i = 0; i < characters.length; i++) {

    var characterBtn = $("<img>");     // Create image tags

    // Adding attributes to the images
    characterBtn.attr("src", characters[i]);
    characterBtn.attr("id", characterIds[i]);
    characterBtn.attr("style", "height:150px; width: 200px");
    characterBtn.attr("alt", alt[i]);
    characterBtn.addClass("image");
    characterBtn.data("power", dataPower[i]);

    $("#initialPosition").append(characterBtn);    // Finally, append each crystal images

  }

var id;
var id2;

$(document).one("click", ".image", function(e) {
    id = $(e.currentTarget).attr("id");
    console.log(id);

  
    $("#player").append($("#"+id));          // Selects the player
    characterIds.forEach(function(character) {
        if(id === character) {             // player is not enemy. So do nothing!
        return;
    }
    
    $("#enemies").append($("#"+character));   // Selects the enemies
    });

    $(document).one("click", ".image", function(e) {
        id2 = $(e.currentTarget).attr("id");
        console.log(id2);
        $("#defender").append($("#"+id2));

  })
});


$("#attack").on("click", function(e){

    var idData = $("#"+id).data("power");
    var id2Data = $("#"+id2).data("power");

    idData.healthPoints -= id2Data.counterAttackPower;

    id2Data.healthPoints -= idData.attackPower;

    idData.attackPower = idData.attackPower * 2;

    console.log(idData.healthPoints);
    console.log(id2Data.healthPoints);
    console.log(idData.attackPower);

    checkResult();

});

function checkResult(){
    var idData = $("#"+id).data("power");
    var id2Data = $("#"+id2).data("power");

        if (idData.healthPoints <= 0){
        $("#result").html("You been defeated... GAME OVER!!!")
    }
    
};
