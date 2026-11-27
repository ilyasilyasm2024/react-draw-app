import { Template } from '../../domain/entities/Template';
import { 
  carrotPaths, tomatoPaths, pepperPaths, cornPaths, potatoPaths, 
  onionPaths, broccoliPaths, mushroomPaths, peaPaths, lettucePaths 
} from './vegetables/index';

export const VEGETABLES: Template[] = [
  { id:'carrot', names:{en:'Carrot',fr:'Carotte',de:'Karotte'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Carrots',fr:'Carottes',de:'Karotten'}, category:'Vegetables', paths: carrotPaths },
  { id:'tomato', names:{en:'Tomato',fr:'Tomate',de:'Tomate'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Tomatoes',fr:'Tomates',de:'Tomaten'}, category:'Vegetables', paths: tomatoPaths },
  { id:'pepper', names:{en:'Pepper',fr:'Poivron',de:'Paprika'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Peppers',fr:'Poivrons',de:'Paprikas'}, category:'Vegetables', paths: pepperPaths },
  { id:'corn', names:{en:'Corn',fr:'Maïs',de:'Mais'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Corn',fr:'Maïs',de:'Mais'}, category:'Vegetables', paths: cornPaths },
  { id:'potato', names:{en:'Potato',fr:'Pomme de terre',de:'Kartoffel'}, articles:{en:'A',fr:'La',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Potatoes',fr:'Pommes de terre',de:'Kartoffeln'}, category:'Vegetables', paths: potatoPaths },
  { id:'onion', names:{en:'Onion',fr:'Oignon',de:'Zwiebel'}, articles:{en:'An',fr:'L\'',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Onions',fr:'Oignons',de:'Zwiebeln'}, category:'Vegetables', paths: onionPaths },
  { id:'broccoli', names:{en:'Broccoli',fr:'Brocoli',de:'Brokkoli'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Broccoli',fr:'Brocolis',de:'Brokkoli'}, category:'Vegetables', paths: broccoliPaths },
  { id:'mushroom', names:{en:'Mushroom',fr:'Champignon',de:'Pilz'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Mushrooms',fr:'Champignons',de:'Pilze'}, category:'Vegetables', paths: mushroomPaths },
  { id:'pea', names:{en:'Pea',fr:'Petit pois',de:'Erbse'}, articles:{en:'A',fr:'Le',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Peas',fr:'Petits pois',de:'Erbsen'}, category:'Vegetables', paths: peaPaths },
  { id:'lettuce', names:{en:'Lettuce',fr:'Laitue',de:'Salat'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Lettuces',fr:'Laitues',de:'Salate'}, category:'Vegetables', paths: lettucePaths },
];
