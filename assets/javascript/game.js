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
}
var lukeSkywalker = {
    healthPoints: 100,
    attackPower: 8,
    counterAttackPower: 5
}
var dSidious = {
    healthPoints: 150,
    attackPower: 8,
    counterAttackPower: 20
}
var dMaul= {
    healthPoints: 180,
    attackPower: 8,
    counterAttackPower: 25
}

for (var i = 0; i < characters.length; i++) {

    // Inside the loop...

    // 2. Create image tags
    var characterBtn = $("<img>");

    // 3. adding attributes to the crystal images
    characterBtn.attr("src", characters[i]);
    characterBtn.attr("id", characterIds[i]);
    characterBtn.attr("style", "height:150px; width: 200px");
    characterBtn.attr("alt", alt[i]);

    
    // 4. Finally, append each crystal images
    $("#initialPosition").append(characterBtn);

  }



$("#ObiWan").on("click", function() {

    $("#player").append($("#ObiWan"));
    $("#enemies").append($("#Luke"));
    $("#enemies").append($("#Sidious"));
    $("#enemies").append($("#Maul"));
    
  });

$("#Luke").on("click", function() {

    $("#player").append($("#Luke"));
    $("#enemies").append($("#ObiWan"));
    $("#enemies").append($("#Sidious"));
    $("#enemies").append($("#Maul"));
    
  });

$("#Sidious").on("click", function() {

    $("#player").append($("#Sidious"));
    $("#enemies").append($("#ObiWan"));
    $("#enemies").append($("#Luke"));
    $("#enemies").append($("#Maul"));
    
  });

$("#Maul").on("click", function() {

    $("#player").append($("#Maul"));
    $("#enemies").append($("#ObiWan"));
    $("#enemies").append($("#Luke"));
    $("#enemies").append($("#Sidious"));
    
  });