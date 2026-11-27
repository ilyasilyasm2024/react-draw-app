import { Template } from '../../domain/entities/Template';
import { 
  applePaths, bananaPaths, orangePaths, strawberryPaths, grapePaths, 
  watermelonPaths, pearPaths, cherryPaths, lemonPaths, pineapplePaths 
} from './fruits/index';

export const FRUITS: Template[] = [
  { id:'apple', names:{en:'Apple',fr:'Pomme',de:'Apfel'}, articles:{en:'An',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Apples',fr:'Pommes',de:'Äpfel'}, category:'Fruits', paths: applePaths },
  { id:'banana', names:{en:'Banana',fr:'Banane',de:'Banane'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Bananas',fr:'Bananes',de:'Bananen'}, category:'Fruits', paths: bananaPaths },
  { id:'orange', names:{en:'Orange',fr:'Orange',de:'Orange'}, articles:{en:'An',fr:'L\'',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Oranges',fr:'Oranges',de:'Orangen'}, category:'Fruits', paths: orangePaths },
  { id:'strawberry', names:{en:'Strawberry',fr:'Fraise',de:'Erdbeere'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Strawberries',fr:'Fraises',de:'Erdbeeren'}, category:'Fruits', paths: strawberryPaths },
  { id:'grape', names:{en:'Grape',fr:'Raisin',de:'Traube'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Grapes',fr:'Raisins',de:'Trauben'}, category:'Fruits', paths: grapePaths },
  { id:'watermelon', names:{en:'Watermelon',fr:'Pastèque',de:'Wassermelone'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Watermelons',fr:'Pastèques',de:'Wassermelonen'}, category:'Fruits', paths: watermelonPaths },
  { id:'pear', names:{en:'Pear',fr:'Poire',de:'Birne'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Pears',fr:'Poires',de:'Birnen'}, category:'Fruits', paths: pearPaths },
  { id:'cherry', names:{en:'Cherry',fr:'Cerise',de:'Kirsche'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Cherries',fr:'Cerises',de:'Kirschen'}, category:'Fruits', paths: cherryPaths },
  { id:'lemon', names:{en:'Lemon',fr:'Citron',de:'Zitrone'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Lemons',fr:'Citrons',de:'Zitronen'}, category:'Fruits', paths: lemonPaths },
  { id:'pineapple', names:{en:'Pineapple',fr:'Ananas',de:'Ananas'}, articles:{en:'A',fr:'L\'',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Pineapples',fr:'Ananas',de:'Ananas'}, category:'Fruits', paths: pineapplePaths },
];
