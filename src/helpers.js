import moment from 'moment'

const YEAR = 2020
const CHRISTMAS_MONTH = 11 // (0-11 in moment)

// Check to see if you're allowed to open the box or not.
export const validDate = (nr) => (
    moment().year() === YEAR && 
    moment().month() === CHRISTMAS_MONTH &&
    moment().date() >= nr
  )
 
// to not get the calendar in order, thats boooooring
const shuffle = array => array.sort((a, b) => ( 0.5 - Math.random()))


// Bad one-liners from https://www.scotsman.com/lifestyle/christmas/50-jokes-christmas-2020-best-funny-festive-one-liners-riddles-and-puns-make-you-laugh-year-3044783
export const boxArray = [
  {
    id: "box-1",
    nr: 1,
    text: "Who’s Rudolph’s favourite pop star? Beyon-sleigh!",
    open: false
  },
  {
    id: "box-2",
    nr: 2,
    text: "What do monkeys sing at Christmas? Jungle bells!",
    open: false
  },
  {
    id: "box-3",
    nr: 3,
    text: "What do you get when you cross a snowman with a vampire? Frostbite!",
    open: false
  },
  {
    id: "box-4",
    nr: 4,
    text: "What do snowmen eat for lunch? Icebergers!",
    open: false
  },
  {
    id: "box-5",
    nr: 5,
    text: "What do you call buying a piano for the holidays? Christmas Chopin!",
    open: false
  },
  {
    id: "box-6",
    nr: 6,
    text: "Who delivers presents to cats? Santa Paws!",
    open: false
  },
  {
    id: "box-7",
    nr: 7,
    text: "What goes Ho Ho Whoosh, Ho Ho Whoosh? Santa going through a revolving door!",
    open: false
  },
  {
    id: "box-8",
    nr: 8,
    text: "Why don't you ever see Santa in hospital? Because he has private elf care!",
    open: false
  },
  {
    id: "box-9",
    nr: 9,
    text: "Why did the turkey cross the road? Because it was the chicken’s day off!",
    open: false
  },
  {
    id: "box-10",
    nr: 10,
    text: "What do you get if you cross Santa with a detective? Santa Clues!",
    open: false
  },
  {
    id: "box-11",
    nr: 11,
    text: "How does Darth Vader enjoy his Christmas Turkey? On the dark side!",
    open: false
  },
  {
    id: "box-12",
    nr: 12,
    text: "What does Miley Cyrus have at Christmas? Twerky!",
    open: false
  },
  {
    id: "box-13",
    nr: 13,
    text: "What do angry mice send to each other at Christmas? Cross-mouse cards!",
    open: false
  },
  {
    id: "box-14",
    nr: 14,
    text: "Who hides in the bakery at Christmas? A mince spy!",
    open: false
  },
  {
    id: "box-15",
    nr: 15,
    text: "What does Santa do with out of shape elves? Sends them to an elf farm.",
    open: false
  },
  {
    id: "box-16",
    nr: 16,
    text: "When is a boat just like snow? When it’s adrift!",
    open: false
  },
  {
    id: "box-17",
    nr: 17,
    text: "What did the stamp say to the Christmas card? Stick with me and we'll go places!",
    open: false
  },
  {
    id: "box-18",
    nr: 18,
    text: "Why is it getting harder to buy Advent calendars? Their days are numbered!",
    open: false
  },
  {
    id: "box-19",
    nr: 19,
    text: "Who is Santa’s favourite singer? Elf-is Presley!",
    open: false
  },
  {
    id: "box-20",
    nr: 20,
    text: "Why did Santa's helper see the doctor? Because he had a low elf esteem!",  
    open: false
  },
  {
    id: "box-21",
    nr: 21,
    text: "What do you get if you cross Santa with a duck? A Christmas Quacker!",
    open: false
  },
  {
    id: "box-22",
    nr: 22,
    text: "What does Santa suffer from if he gets stuck in a chimney? Claus-trophobia!",
    open: false
  },
  {
    id: "box-23",
    nr: 23,
    text: "What did Adam say the day before Christmas? -It’s Christmas, Eve!",
    open: false
  },
  {
    id: "box-24",
    nr: 24,
    text: "What kind of motorbike does Santa ride? A Holly Davidson!",
    open: false
  },
];

export const createCalendar = () => shuffle(boxArray);
