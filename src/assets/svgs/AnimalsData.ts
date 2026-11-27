import { Template } from '../../domain/entities/Template';
import { 
  catPaths, dogPaths, fishPaths, birdPaths, butterflyPaths, 
  rabbitPaths, turtlePaths, elephantPaths, lionPaths, frogPaths 
} from './animals/index';

export const ANIMALS: Template[] = [
  { id:'cat', names:{en:'Cat',fr:'Chat',de:'Katze'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Cats',fr:'Chats',de:'Katzen'}, category:'Animals', paths: catPaths },
  { id:'dog', names:{en:'Dog',fr:'Chien',de:'Hund'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Dogs',fr:'Chiens',de:'Hunde'}, category:'Animals', paths: dogPaths },
  { id:'fish', names:{en:'Fish',fr:'Poisson',de:'Fisch'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Fish',fr:'Poissons',de:'Fische'}, category:'Animals', paths: fishPaths },
  { id:'bird', names:{en:'Bird',fr:'Oiseau',de:'Vogel'}, articles:{en:'A',fr:'L\'',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Birds',fr:'Oiseaux',de:'Vögel'}, category:'Animals', paths: birdPaths },
  { id:'butterfly', names:{en:'Butterfly',fr:'Papillon',de:'Schmetterling'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Butterflies',fr:'Papillons',de:'Schmetterlinge'}, category:'Animals', paths: butterflyPaths },
  { id:'rabbit', names:{en:'Rabbit',fr:'Lapin',de:'Kaninchen'}, articles:{en:'A',fr:'Le',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Rabbits',fr:'Lapins',de:'Kaninchen'}, category:'Animals', paths: rabbitPaths },
  { id:'turtle', names:{en:'Turtle',fr:'Tortue',de:'Schildkröte'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Turtles',fr:'Tortues',de:'Schildkröten'}, category:'Animals', paths: turtlePaths },
  { id:'elephant', names:{en:'Elephant',fr:'Éléphant',de:'Elefant'}, articles:{en:'An',fr:'L\'',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Elephants',fr:'Éléphants',de:'Elefanten'}, category:'Animals', paths: elephantPaths },
  { id:'lion', names:{en:'Lion',fr:'Lion',de:'Löwe'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Lions',fr:'Lions',de:'Löwen'}, category:'Animals', paths: lionPaths },
  { id:'frog', names:{en:'Frog',fr:'Grenouille',de:'Frosch'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Frogs',fr:'Grenouilles',de:'Frösche'}, category:'Animals', paths: frogPaths },
];
