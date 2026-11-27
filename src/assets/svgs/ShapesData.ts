import { Template } from '../../domain/entities/Template';
import { 
  circlePaths, squarePaths, trianglePaths, rectanglePaths, starPaths, 
  heartPaths, diamondPaths, hexagonPaths, pentagonPaths, ovalPaths 
} from './shapes/index';

export const SHAPES: Template[] = [
  { id:'circle', names:{en:'Circle',fr:'Cercle',de:'Kreis'}, articles:{en:'A',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Circles',fr:'Cercles',de:'Kreise'}, category:'Shapes', paths: circlePaths },
  { id:'square', names:{en:'Square',fr:'Carré',de:'Quadrat'}, articles:{en:'A',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Squares',fr:'Carrés',de:'Quadrate'}, category:'Shapes', paths: squarePaths },
  { id:'triangle', names:{en:'Triangle',fr:'Triangle',de:'Dreieck'}, articles:{en:'A',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Triangles',fr:'Triangles',de:'Dreiecke'}, category:'Shapes', paths: trianglePaths },
  { id:'rectangle', names:{en:'Rectangle',fr:'Rectangle',de:'Rechteck'}, articles:{en:'A',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Rectangles',fr:'Rectangles',de:'Rechtecke'}, category:'Shapes', paths: rectanglePaths },
  { id:'star', names:{en:'Star',fr:'Étoile',de:'Stern'}, articles:{en:'A',fr:'Une',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Stars',fr:'Étoiles',de:'Sterne'}, category:'Shapes', paths: starPaths },
  { id:'heart', names:{en:'Heart',fr:'Cœur',de:'Herz'}, articles:{en:'A',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Hearts',fr:'Cœurs',de:'Herzen'}, category:'Shapes', paths: heartPaths },
  { id:'diamond', names:{en:'Diamond',fr:'Losange',de:'Raute'}, articles:{en:'A',fr:'Un',de:'Eine'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Diamonds',fr:'Losanges',de:'Rauten'}, category:'Shapes', paths: diamondPaths },
  { id:'hexagon', names:{en:'Hexagon',fr:'Hexagone',de:'Sechseck'}, articles:{en:'A',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Hexagons',fr:'Hexagones',de:'Sechsecke'}, category:'Shapes', paths: hexagonPaths },
  { id:'pentagon', names:{en:'Pentagon',fr:'Pentagone',de:'Fünfeck'}, articles:{en:'A',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Pentagons',fr:'Pentagones',de:'Fünfecke'}, category:'Shapes', paths: pentagonPaths },
  { id:'oval', names:{en:'Oval',fr:'Ovale',de:'Oval'}, articles:{en:'An',fr:'Un',de:'Ein'}, pluralArticles:{en:'',fr:'Des',de:'Die'}, plurals:{en:'Ovals',fr:'Ovales',de:'Ovale'}, category:'Shapes', paths: ovalPaths },
];
