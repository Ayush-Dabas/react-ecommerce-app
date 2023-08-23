import analogClock from "./analog-clock.jpg";
import boatEarphone from "./boat-earphones.jpg";
import egoEnemy from "./Ego-enemy.jpg";
import keyBoard from "./Keyboard.jpg";
import onePlusEarphone from "./oneplus-earphones-wireless.jpg";
import redSuitcase from "./red-suitcase.jpg";
import technoPhone from "./techno-phone.jpg";
import tsGrewal from "./TS-grewal.jpg";

function ProductDetails(
  id,
  price,
  image,
  name,
  available,
  producer,
  description
) {
  this.id = id;
  this.price = price;
  this.image = image;
  this.name = name;
  this.available = available;
  this.producer = producer;
  this.description = description;
}

const prod1 = new ProductDetails(
  1000,
  4999,
  redSuitcase,
  "American tourister Jamaican Polyester",
  true,
  "American Tourister",
  "Outer Material: Polyester, Casing: Soft, Color: Wine Red"
);

const prod2 = new ProductDetails(
  1003,
  2299,
  onePlusEarphone,
  "OnePlus Bullets Wireless Z2 ANC bluetooth Earphones",
  true,
  "OnePlus",
  "45dB Hybrid Active Noise Cancellation combines both FeedForward and FeedBack microphones to maximize frequency range of noise that can be reduced, performing up to 45dB."
);

const prod3 = new ProductDetails(
  1006,
  15999,
  technoPhone,
  "TECNO pova 5 pro 5G",
  true,
  "TECNO",
  "Upto 16GB Expandable RAM with memory fusion"
);

const prod4 = new ProductDetails(
  1009,
  1299,
  boatEarphone,
  "Boat Airpodes 141 Bluetooth Headphones",
  true,
  "Boat",
  "The earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge"
);

const prod5 = new ProductDetails(
  1012,
  599,
  analogClock,
  "Solimo 12 inch plastic & glass wall clock",
  true,
  "Amazon Brand",
  "12 inches in diameter, Makes no sound while tracking time, sweep movement"
);

const prod6 = new ProductDetails(
  1015,
  449,
  keyBoard,
  "Wired Keyboard for windows",
  true,
  "Amazon",
  "Compatible and works well with most PC/Mac/Laptop/Smartphone/Tablet"
);

const prod7 = new ProductDetails(
  1018,
  586,
  egoEnemy,
  "Ego is the enemy",
  true,
  "Tim Ferris",
  "I've found that history is also made by individuals who fought their egos at every turn, who eschewed the spotlight, and who put their higher goals above their desire for recognition"
);

const prod8 = new ProductDetails(
  1021,
  357,
  tsGrewal,
  "T.S. Grewal Double Entry Book Keeping",
  true,
  "T.S. Grewal",
  "This Volume has been prepared as per the CBSE syllabus for the Academic Year 2023–24 following the treatments by the NCERT"
);

export { prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8 };
