var GENERATED_COMMAND_STRING = "";


// Main Processing Unite
function generate() {

    // Variables
    //var npcName = document.getElementById("npcName").value;
    var playerName = document.getElementById("playerName").value;
    var playerIdea = document.getElementById("playerIdea").value;

    var jsonBuilder = "";
    var output = document.getElementById("output").value;

    playerIdea = playerIdea.replace(/'/g, "\\'");

    var title = "\'{\"text\":\"" + playerName + "\\'s Idea\",\"color\":\"gold\"}\'";
    var description = "\'{\"text\":\"" + playerIdea + "\"}\'";

    jsonBuilder = "/popup " + playerName + " " + title + " " + description;

    if(GENERATED_COMMAND_STRING == "") GENERATED_COMMAND_STRING = jsonBuilder;
    
    else GENERATED_COMMAND_STRING = GENERATED_COMMAND_STRING + "\n" + jsonBuilder;

    const jsonMessage = JSON.stringify(jsonBuilder);
    document.getElementById("output").value = GENERATED_COMMAND_STRING;


}

// Copy To Clipboard Button
function copyOutput() {
    $("#output").select();
    document.execCommand('copy');
}

// Clear Output Button
function clearOutput() {
    console.log("BOOM");
    var o = $("#output").val("");
    GENERATED_COMMAND_STRING = "";
}
