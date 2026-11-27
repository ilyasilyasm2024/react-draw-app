import { Template } from '../../domain/entities/Template';
import { 
  pencilPaths, bookPaths, rulerPaths, scissorsPaths, eraserPaths, 
  backpackPaths, globePaths, calculatorPaths, paintbrushPaths, notebookPaths 
} from './school/index';

export const SCHOOL: Template[] = [
  { id:'pencil', names:{en:'Pencil',fr:'Crayon',de:'Bleistift'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Pencils',fr:'Crayons',de:'Bleistifte'}, category:'School', paths: pencilPaths },
  { id:'book', names:{en:'Book',fr:'Livre',de:'Buch'}, articles:{en:'A',fr:'Le',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Books',fr:'Livres',de:'Bücher'}, category:'School', paths: bookPaths },
  { id:'ruler', names:{en:'Ruler',fr:'Règle',de:'Lineal'}, articles:{en:'A',fr:'La',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Rulers',fr:'Règles',de:'Lineale'}, category:'School', paths: rulerPaths },
  { id:'scissors', names:{en:'Scissors',fr:'Ciseaux',de:'Schere'}, articles:{en:'',fr:'Les',de:'Die'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Scissors',fr:'Ciseaux',de:'Scheren'}, category:'School', paths: scissorsPaths },
  { id:'eraser', names:{en:'Eraser',fr:'Gomme',de:'Radiergummi'}, articles:{en:'An',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Erasers',fr:'Gommes',de:'Radiergummis'}, category:'School', paths: eraserPaths },
  { id:'backpack', names:{en:'Backpack',fr:'Sac à dos',de:'Rucksack'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Backpacks',fr:'Sacs à dos',de:'Rucksäcke'}, category:'School', paths: backpackPaths },
  { id:'globe', names:{en:'Globe',fr:'Globe',de:'Globus'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Globes',fr:'Globes',de:'Globen'}, category:'School', paths: globePaths },
  { id:'calculator', names:{en:'Calculator',fr:'Calculatrice',de:'Taschenrechner'}, articles:{en:'A',fr:'La',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Calculators',fr:'Calculatrices',de:'Taschenrechner'}, category:'School', paths: calculatorPaths },
  { id:'paintbrush', names:{en:'Paintbrush',fr:'Pinceau',de:'Pinsel'}, articles:{en:'A',fr:'Le',de:'Der'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Paintbrushes',fr:'Pinceaux',de:'Pinsel'}, category:'School', paths: paintbrushPaths },
  { id:'notebook', names:{en:'Notebook',fr:'Cahier',de:'Heft'}, articles:{en:'A',fr:'Le',de:'Das'}, pluralArticles:{en:'',fr:'Les',de:'Die'}, plurals:{en:'Notebooks',fr:'Cahiers',de:'Hefte'}, category:'School', paths: notebookPaths },
];
