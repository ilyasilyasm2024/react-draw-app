import { Template } from '../../domain/entities/Template';
import { 
  doorPaths, windowPaths, chairPaths, tablePaths, bedPaths, 
  lampPaths, clockPaths, keyPaths, sofaPaths, televisionPaths 
} from './house/index';
import { 
  flowerPaths, treePaths, cactusPaths, leafPaths, tulipPaths, 
  sunflowerPaths, rosePaths, palmPaths, grassPaths, mushroom2Paths 
} from './plants/index';

export const HOUSE: Template[] = [
  { id:'door', names:{en:'Door',fr:'Porte',de:'Tür'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Doors',fr:'Portes',de:'Türen'}, category:'House', paths: doorPaths },
  { id:'window', names:{en:'Window',fr:'Fenêtre',de:'Fenster'}, articles:{en:'A',fr:'La',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Windows',fr:'Fenêtres',de:'Fenster'}, category:'House', paths: windowPaths },
  { id:'chair', names:{en:'Chair',fr:'Chaise',de:'Stuhl'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Chairs',fr:'Chaises',de:'Stühle'}, category:'House', paths: chairPaths },
  { id:'table', names:{en:'Table',fr:'Table',de:'Tisch'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Tables',fr:'Tables',de:'Tische'}, category:'House', paths: tablePaths },
  { id:'bed', names:{en:'Bed',fr:'Lit',de:'Bett'}, articles:{en:'A',fr:'Le',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Beds',fr:'Lits',de:'Betten'}, category:'House', paths: bedPaths },
  { id:'lamp', names:{en:'Lamp',fr:'Lampe',de:'Lampe'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Lamps',fr:'Lampes',de:'Lampen'}, category:'House', paths: lampPaths },
  { id:'clock', names:{en:'Clock',fr:'Horloge',de:'Uhr'}, articles:{en:'A',fr:'L\'',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Clocks',fr:'Horloges',de:'Uhren'}, category:'House', paths: clockPaths },
  { id:'key', names:{en:'Key',fr:'Clé',de:'Schlüssel'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Keys',fr:'Clés',de:'Schlüssel'}, category:'House', paths: keyPaths },
  { id:'sofa', names:{en:'Sofa',fr:'Canapé',de:'Sofa'}, articles:{en:'A',fr:'Le',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Sofas',fr:'Canapés',de:'Sofas'}, category:'House', paths: sofaPaths },
  { id:'television', names:{en:'Television',fr:'Télévision',de:'Fernseher'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Televisions',fr:'Télévisions',de:'Fernseher'}, category:'House', paths: televisionPaths },
];

export const PLANTS: Template[] = [
  { id:'flower', names:{en:'Flower',fr:'Fleur',de:'Blume'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Flowers',fr:'Fleurs',de:'Blumen'}, category:'Plants', paths: flowerPaths },
  { id:'tree', names:{en:'Tree',fr:'Arbre',de:'Baum'}, articles:{en:'A',fr:'L\'',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Trees',fr:'Arbres',de:'Bäume'}, category:'Plants', paths: treePaths },
  { id:'cactus', names:{en:'Cactus',fr:'Cactus',de:'Kaktus'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Cacti',fr:'Cactus',de:'Kakteen'}, category:'Plants', paths: cactusPaths },
  { id:'leaf', names:{en:'Leaf',fr:'Feuille',de:'Blatt'}, articles:{en:'A',fr:'La',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Leaves',fr:'Feuilles',de:'Blätter'}, category:'Plants', paths: leafPaths },
  { id:'tulip', names:{en:'Tulip',fr:'Tulipe',de:'Tulpe'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Tulips',fr:'Tulipes',de:'Tulpen'}, category:'Plants', paths: tulipPaths },
  { id:'sunflower', names:{en:'Sunflower',fr:'Tournesol',de:'Sonnenblume'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Sunflowers',fr:'Tournesols',de:'Sonnenblumen'}, category:'Plants', paths: sunflowerPaths },
  { id:'rose', names:{en:'Rose',fr:'Rose',de:'Rose'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Roses',fr:'Roses',de:'Rosen'}, category:'Plants', paths: rosePaths },
  { id:'palm', names:{en:'Palm',fr:'Palmier',de:'Palme'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Palms',fr:'Palmiers',de:'Palmen'}, category:'Plants', paths: palmPaths },
  { id:'grass', names:{en:'Grass',fr:'Herbe',de:'Gras'}, articles:{en:'',fr:'L\'',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Grass',fr:'Herbes',de:'Gräser'}, category:'Plants', paths: grassPaths },
  { id:'mushroom2', names:{en:'Mushroom',fr:'Champignon',de:'Pilz'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Mushrooms',fr:'Champignons',de:'Pilze'}, category:'Plants', paths: mushroom2Paths },
];
