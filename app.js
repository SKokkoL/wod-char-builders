(function () {
  function calculateXp() {
    document.getElementById('xpDisplay').innerHTML = 'some number  ';
  }
  // Calculate XP button should display 'some number' on click (will need calculator applying at some point)
  document.getElementById('calculateXp').onclick=calculateXp;
}) ();

(function () {
  function validateStarterSetup() {
    document.getElementById('validateCheck').innerHTML = 'check  ';
  }
  // Validate starter character setup should display 'check' on click (will need checks applying at some point)
  document.getElementById('validateStarterSetup').onclick=validateStarterSetup;
}) ();

(function () {
  function testAttributes() {
    document.getElementById('testAttributesOutput').innerHTML = physicalattribute;
    //get the value of the selected radio in group strength
    var str=document.querySelector('input[name="strength"]:checked').value;
    //get the value of the selected radio in group dexterity
    var dex=document.querySelector('input[name="dexterity"]:checked').value;
    //get the value of the selected radio in group stamina
    var sta=document.querySelector('input[name="stamina"]:checked').value;
    //add the 3 values together
    var physicalattribute = Number(str) + Number(dex) + Number(sta) ;
    //return value as a number not a string
    console.log(physicalattribute);
    //it prints a string where it expects a number - console prints NaN
  }
  // Validate attributes setup should display a a number between 0 and 12
  document.getElementById('testAttributes').onclick=testAttributes;
}) ();


/*


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










XP Costs for Mortals Calculator
OLD/C WORLD
  New Ability
    3
  Ability Increase
    New Rating * 2
  Attribute Increase
      (1st level is free as is mandatory)
    New Rating * 4
  Willpower
    New Rating * 1
  Background
    New Rating * 3
  Influences
    New Rating * 1
  Power/Aspect
      (1st level is free as is mandatory)
    New Rating * 8

MAGE: Ascension
  Arete = Power/Aspect
    New Rating * 8
  New Spere
    10
  Tradition Sphere
    New Rating * 7
  Other Sphere
    New Rating * 8

DICE ROLLS:
  Attribute + Skill + Specialities (and other bonuses if required)
    Success = 8, 9, 0  (Merits/flaws may modify)
    Reroll = 10        (Merits may modify)
    Failiure = No sucesses + 1's



NEW WORLD
  Attribute
    New Rating * 5
  Skill
    New Rating * 3
  Skill Speciality
    3
  Merit
    New Rating * 2
  Willpower
    New Rating * 1
      (Can only buy 'lost' dots)

WERWOLF: Forsaken
  Affinity Gift (Auspice, Common, Tribe)
    New Rating * 5
  Non Affinity Gift
    New Rating * 7
  Rituals Skill
    New Rating * 5
  Rites
    New Rating * 2
  Totem Merit
    Per dot = 3
  Primal Urge
    New Rating * 8
  Affinity Renown
    New Rating * 6
  Non Affinity Renown
    New Rating * 8
  Harmony
    New Rating * 3



















    
*/

// 20180429 Don't forget to come back and re read and tidy code     
