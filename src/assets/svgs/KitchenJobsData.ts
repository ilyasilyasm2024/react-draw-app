import { Template } from '../../domain/entities/Template';
import { 
  cupPaths, platePaths, forkPaths, spoonPaths, knifePaths, 
  potPaths, bottlePaths, glassPaths, bowlPaths, panPaths 
} from './kitchen/index';
import { 
  doctorPaths, teacherPaths, firefighterPaths, policePaths, chefPaths, 
  pilotPaths, farmerPaths, painterPaths, musicianPaths, astronautPaths 
} from './jobs/index';

export const KITCHEN: Template[] = [
  { id:'cup', names:{en:'Cup',fr:'Tasse',de:'Tasse'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Cups',fr:'Tasses',de:'Tassen'}, category:'Kitchen', paths: cupPaths },
  { id:'plate', names:{en:'Plate',fr:'Assiette',de:'Teller'}, articles:{en:'A',fr:'L\'',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Plates',fr:'Assiettes',de:'Teller'}, category:'Kitchen', paths: platePaths },
  { id:'fork', names:{en:'Fork',fr:'Fourchette',de:'Gabel'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Forks',fr:'Fourchettes',de:'Gabeln'}, category:'Kitchen', paths: forkPaths },
  { id:'spoon', names:{en:'Spoon',fr:'Cuillère',de:'Löffel'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Spoons',fr:'Cuillères',de:'Löffel'}, category:'Kitchen', paths: spoonPaths },
  { id:'knife', names:{en:'Knife',fr:'Couteau',de:'Messer'}, articles:{en:'A',fr:'Le',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Knives',fr:'Couteaux',de:'Messer'}, category:'Kitchen', paths: knifePaths },
  { id:'pot', names:{en:'Pot',fr:'Casserole',de:'Topf'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Pots',fr:'Casseroles',de:'Töpfe'}, category:'Kitchen', paths: potPaths },
  { id:'bottle', names:{en:'Bottle',fr:'Bouteille',de:'Flasche'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Bottles',fr:'Bouteilles',de:'Flaschen'}, category:'Kitchen', paths: bottlePaths },
  { id:'glass', names:{en:'Glass',fr:'Verre',de:'Glas'}, articles:{en:'A',fr:'Le',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Glasses',fr:'Verres',de:'Gläser'}, category:'Kitchen', paths: glassPaths },
  { id:'bowl', names:{en:'Bowl',fr:'Bol',de:'Schüssel'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Bowls',fr:'Bols',de:'Schüsseln'}, category:'Kitchen', paths: bowlPaths },
  { id:'pan', names:{en:'Pan',fr:'Poêle',de:'Pfanne'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Pans',fr:'Poêles',de:'Pfannen'}, category:'Kitchen', paths: panPaths },
];

export const JOBS: Template[] = [
  { id:'doctor', names:{en:'Doctor',fr:'Docteur',de:'Arzt'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Doctors',fr:'Docteurs',de:'Ärzte'}, category:'Jobs', paths: doctorPaths },
  { id:'teacher', names:{en:'Teacher',fr:'Professeur',de:'Lehrer'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Teachers',fr:'Professeurs',de:'Lehrer'}, category:'Jobs', paths: teacherPaths },
  { id:'firefighter', names:{en:'Firefighter',fr:'Pompier',de:'Feuerwehrmann'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Firefighters',fr:'Pompiers',de:'Feuerwehrmänner'}, category:'Jobs', paths: firefighterPaths },
  { id:'police', names:{en:'Police',fr:'Policier',de:'Polizist'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Police',fr:'Policiers',de:'Polizisten'}, category:'Jobs', paths: policePaths },
  { id:'chef', names:{en:'Chef',fr:'Chef cuisinier',de:'Koch'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Chefs',fr:'Chefs',de:'Köche'}, category:'Jobs', paths: chefPaths },
  { id:'pilot', names:{en:'Pilot',fr:'Pilote',de:'Pilot'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Pilots',fr:'Pilotes',de:'Piloten'}, category:'Jobs', paths: pilotPaths },
  { id:'farmer', names:{en:'Farmer',fr:'Fermier',de:'Bauer'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Farmers',fr:'Fermiers',de:'Bauern'}, category:'Jobs', paths: farmerPaths },
  { id:'painter', names:{en:'Painter',fr:'Peintre',de:'Maler'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Painters',fr:'Peintres',de:'Maler'}, category:'Jobs', paths: painterPaths },
  { id:'musician', names:{en:'Musician',fr:'Musicien',de:'Musiker'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Musicians',fr:'Musiciens',de:'Musiker'}, category:'Jobs', paths: musicianPaths },
  { id:'astronaut', names:{en:'Astronaut',fr:'Astronaute',de:'Astronaut'}, articles:{en:'An',fr:'L\'',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Astronauts',fr:'Astronautes',de:'Astronauten'}, category:'Jobs', paths: astronautPaths },
];
