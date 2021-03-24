//create variables for each element
const nameInput = document.getElementById('name-input');
const changeNameButton = document.getElementById('change-name-button');
const nameToChange = document.getElementById('name-to-change');

//add listeners
changeNameButton.addEventListener ('click', () => {
    //do the action
    nameToChange.textContent = nameInput.value;

});

//the colors
const pinkButton = document.getElementById('pink-button');
const greenButton = document.getElementById('lightgreen-button');
const blueButton = document.getElementById('lightblue-button');
const tagColor = document.getElementById('tag');

//the actions
pinkButton.addEventListener ('click', () => {
    tagColor.style.background = 'pink';
});
greenButton.addEventListener ('click', () => {
    tagColor.style.background = 'lightgreen';
});
blueButton.addEventListener ('click', () => {
    tagColor.style.background = 'lightblue';
});