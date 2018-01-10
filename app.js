(function () {

  // Calculatee XP button (will need calculator applying at some point)
  document.getElementById('calculateXp').onclick = calculateXp;

  function calculateXp() {
    document.getElementById('xpDisplay').innerHTML = 'some number';
  }


  //pop up window to start character generation
  document.getElementById('build').onclick = build

  function build() {
    var txt;
    if (confirm("Would you like to use the guided build method?") == true) {
      txt = "You pressed OK! Let's build a character!";
      //Should prompt here for player name.
      var player = window.prompt("What is your name?", "Your name");
      if (person == null || person == "") {
        txt = "Unnamed Player.";
      } else {
        txt = person; //need to find a away to input this to input field
        //Character name
        window.prompt("What is your character's name?", "Character name here");
        if (name == null || name == "") {
          txt = "Unnamed Character.";
        } else {
          txt = name;
          //Character virtue
          window.prompt("What is your character's virtue?",
            "Chastity, Temperance, Charity, Diligence, Patience, Kindness or Humility");
          if (person == null || person == "") {
            txt = "Unnamed Character.";
          } else {
            txt = person;
            //Character vice
            window.prompt("What is your character's vice?",
              "Lust, Gluttony, Greed, Soth, Wrath, Envy or Pride");
            if (person == null || person == "") {
              txt = "Unnamed Character.";
            } else {
              txt = person;
              //auspice
              window.prompt("What moon did your character change under?",
                "Character name here");
              if (person == null || person == "") {
                txt = "Unnamed Character.";
              } else {
                txt = person;
                //Tribe y/n
                window.prompt("Does your character belong to a tribe?",
                  "Yes / No");
                if (person == null || person == "") {
                  txt = "Unnamed Character.";
                } else {
                  txt = person;
                  // tribe choice
                  window.prompt("What is your character's tribe?",
                    "Blood Talon, Bone Shadow, Hunter in Darkness, Iron Master or Storm Lord");
                  if (person == null || person == "") {
                    txt = "Unnamed Character.";
                  } else {
                    txt = person;

                  } else {
                    txt = "You cancelled the guided build option.";
                  }
                  document.getElementById("buildDisplay").innerHTML = txt;
                }




              }) ();
