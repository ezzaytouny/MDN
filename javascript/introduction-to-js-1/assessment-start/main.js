const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX=['Willy the Goblin','Big Daddy','Father Christmas'];
const insertY=['the soup kitchen','Disneyland','the White House'];
const insertZ=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
randomize.addEventListener('click', result);

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function result() {
  let NewStory=storyText;   
  let xItem=randomValueFromArray(insertX);
  let yItem=randomValueFromArray(insertY);
  let zItem=randomValueFromArray(insertZ);

  NewStory=NewStory.replaceAll(':insertx:',xItem);
  NewStory=NewStory.replaceAll(':inserty:',yItem);
  NewStory=NewStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    NewStory=NewStory.replaceAll('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32)*5/9);
    NewStory=NewStory.replaceAll("300 pounds",weight+" Stones");
    NewStory=NewStory.replaceAll("94 fahrenheit",temperature+ " Celsius");
  }

  story.textContent = NewStory;
  story.style.visibility = 'visible';
}
