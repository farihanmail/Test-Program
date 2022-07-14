let giveCard = () =>{

    //Define input value field
    var noOfPerson = $("#noOfPerson").val();

    //Check input value
    if(!/^[0-9]+$/.test(noOfPerson)){

        //Alert error
        alert("Input value does not exist or value is invalid")

    } else{

        $("#personContainer").html("")

        //Define Card
        var types = ['S', 'H', 'D', 'C'];
        var numbers = ['A', '2', '3' , '4', '5', '6', '7', '8', '9', 'X','J', 'Q', 'K'] 
        var cardArr = [];

        //----Generate Card-----//

        //Go through each type in types array
        for (const type of types) {
            //Go through each number in number array
            for (number of numbers){
                //Combine each number for each type
                cardArr.push(type + number);
            }
        }

        //Define No. of card and card for each person.
        var noOfCard = cardArr.length;
        var cardPerPerson = Math.floor(noOfCard/noOfPerson);

        //-----Distribute to persons-----//

        //Define object called output
        var output = {};
        for (let z = 1; z <= noOfPerson; z++) {
            //Create array for each person
            if(!output[z]) output[z] = [];

            //Loop through each person
            for (let k = 1; k <= cardPerPerson ; k++) {

                //Random card
                var cardIndex = Math.floor(Math.random()*cardArr.length);

                //give card to person
                output[z].push(cardArr[cardIndex]);

                //remove given card from array
                cardArr.splice(cardIndex, 1)
            }
        }

        //-----Distribute remaining card-----//

        //Start from first 0 person
        var cnt = 0;

        //Go thorugh each person in cardArr
        cardArr.forEach((ele, idx) => {

            //Move to next person in cardArr
            cnt = cnt + 1;

            //Give card this specific person from cardArr
            output[cnt].push(ele);

            //If cnt more than no. of person, set it back to 0
            if(cnt > noOfPerson) cnt = 0;
        });

        //-----Draw persons and cards-----//
        
        //Loop thgough object called output
        for (const [key, value] of Object.entries(output)) {

            //ouptut log
            console.log(`person ${key} = ${value} (${value.length})`)

            // Draw person container/card
            $("#personContainer").append(`
                <div class="person card" >
                    <div class="card-header">Person ${key}</div>
                    <div class="card-body" id="cardBody_${key}">
        
                    </div>
                </div>
            `)

            //Go through each card given to a person and draw image into the person container/card
            for(v = 0; v < value.length; v++){
                $(`#cardBody_${key}`).append(`
                    <img src="images/cards/${v[val]}.png">
            `)
            }
                
        }
    }
}