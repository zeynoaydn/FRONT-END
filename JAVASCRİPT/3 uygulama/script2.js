var ogr1="zeynep";
var dtarih=2001;
var not_mat1=70;
var not_mat2=70;
var not_mat3=80;

var ogr2="bihter";
var dtarih2=2014;
var not_mat12=40;
var not_mat22=40;
var not_mat32=50;

var newYear=new Date().getFullYear();
var ogr1YasHesap=newYear-dtarih;
var ogr2YasHesap=newYear-dtarih2;

var ort1=(not_mat1+not_mat2+not_mat3)/3;
var ort2=(not_mat12+not_mat22+not_mat32)/3;

var gecme1=(ort1>50);
var gecme2=(ort2>50);
console.log(gecme1);
console.log(gecme2);