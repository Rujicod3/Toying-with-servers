
//State can look a lot of different ways: an array, a number, an object.
/* state is the current state of your application, 
 and whatever data is part of telling that full story. */
 // Any variable can be used to represent state.
// In this case our variable is just a number
let totalVotes = 0;

// Handle upvote events
function onUpvoteHandler() {
    // Update state: increase vote count
    totalVotes++;

    // Render to the DOM
    // Here, we're changing the text content of the <span id="vote-count">
    // element to show the newest value of totalVotes
   document.getElementById('Vote count').textContent = totalVotes;
}

// Handle downvote events
function onDownvoteHandler() {
    // Update state: decrease vote count
    totalVotes--;

    // Render to the DOM
    document.getElementById('vote-count').textContent = totalVotes;
}

/* Notice how there's duplicate logic for rendering in our event handlers? 
Let's pull that out into it's own function: */

// Handle upvote event
function onUpvoteHandler() {
    // Update state: increase vote count
    totalVotes++;

    // Render to the DOM
    render();
}

// Handle downvote event
function onDownvoteHandler() {
    // Update state: decrease vote count
    totalVotes--;

    // Render to the DOM
    render();
}

function render() {
    voteCountElement = document.getElementById('vote-count');
    voteCountElement.textContent = totalVotes;
}

// Create a state variable here:
// let state = ....;       // state can be anything!

function onReady() {
    // onReady is useful for setting up your app by running any initial code automatically
}

onReady()

// Handler Functions, Event Listeners, etc
function oneEventHandler() {
    // Update state...

    // Render your updated state
    render();
}

function anotherEventHandler() {
    // Update state...

    // Render your updated state
    render();
}

// The render function updates the DOM, 
// using the data in our state variable
function render() {
    // Use JavaScript Dom functions & properties to modify the DOM
}