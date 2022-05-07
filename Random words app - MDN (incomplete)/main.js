//Define variables and function

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//Create random variable
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

const insertY = ['the soup kitchen', 'Disneyland', 'the white house'];

const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//Event listener and partial function definition
randomize.addEventListener('click', result);

function result() {
  //Generate new random story
  const newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
   xItem.replace() = newStory;
   yItem.replace() = newStory;
   zItem.replace() = newStory;

  if(customName.value !== '') {
    const name = customName.value;
    name.replace();
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}