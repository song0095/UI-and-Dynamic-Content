/*Save the reference to text-field into a variable. | <input type="text">
Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
Save the reference to paragraph for feedback | <p class="feedback"></p>
*/

let input = document.querySelector(".input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let feedback = document.querySelector(".feedback");


// Start function addItem.

function addItem () {
    

//Create list item and store output in a variable.
	let li = document.createElement("li");
//Check if user entered the value in input text-field.
		if (input.value ) {

		
    //If so:
        
        //Use textContent property on created list-item and assign it with the value of the text written in the text-field
li.textContent = input.value;
        //Append list item to unordered list.
ul.appendChild(li);
        //Clear a feedback-message.
feedback.textContent = "";
        //Clear the text-field.
input.value = "";
        //Put the cursor back to text-field 
    input.focus();
    
   //End if.  
   } else {


    //Otherwise:
     
        //Print the message nothing entered in the paragraph "feedback"
        feedback.textContent = "Nothing";
    //End otherwise.
}
//End function addItem.
}
//Register your function addItem for click event on button.
btn.addEventListener("click", addItem);




