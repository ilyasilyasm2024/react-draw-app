import { Template } from '../../domain/entities/Template';
import { zeroPaths } from './numbers/zero';
import { ninePaths } from './numbers/nine';
import { 
  onePaths, twoPaths, threePaths, fourPaths, fivePaths, sixPaths, sevenPaths, eightPaths 
} from './numbers/index';

export const DIGITAL_NUMBERS: Template[] = [
  { id:'zero', names:{en:'Zero',fr:'Zéro',de:'Null'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Zeros',fr:'Zéros',de:'Nullen'}, category:'Numbers', paths: zeroPaths },
  { id:'one', names:{en:'One',fr:'Un',de:'Eins'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Ones',fr:'Uns',de:'Einsen'}, category:'Numbers', paths: onePaths },
  { id:'two', names:{en:'Two',fr:'Deux',de:'Zwei'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Twos',fr:'Deux',de:'Zweien'}, category:'Numbers', paths: twoPaths },
  { id:'three', names:{en:'Three',fr:'Trois',de:'Drei'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Threes',fr:'Trois',de:'Dreien'}, category:'Numbers', paths: threePaths },
  { id:'four', names:{en:'Four',fr:'Quatre',de:'Vier'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Fours',fr:'Quatres',de:'Vieren'}, category:'Numbers', paths: fourPaths },
  { id:'five', names:{en:'Five',fr:'Cinq',de:'Fünf'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Fives',fr:'Cinqs',de:'Fünfen'}, category:'Numbers', paths: fivePaths },
  { id:'six', names:{en:'Six',fr:'Six',de:'Sechs'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Sixes',fr:'Six',de:'Sechsen'}, category:'Numbers', paths: sixPaths },
  { id:'seven', names:{en:'Seven',fr:'Sept',de:'Sieben'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Sevens',fr:'Septs',de:'Siebenen'}, category:'Numbers', paths: sevenPaths },
  { id:'eight', names:{en:'Eight',fr:'Huit',de:'Acht'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Eights',fr:'Huits',de:'Achten'}, category:'Numbers', paths: eightPaths },
  { id:'nine', names:{en:'Nine',fr:'Neuf',de:'Neun'}, articles:{en:'',fr:'',de:''}, pluralArticles:{en:'',fr:'',de:''}, plurals:{en:'Nines',fr:'Neufs',de:'Neunen'}, category:'Numbers', paths: ninePaths },
];