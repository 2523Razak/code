const note = [20,12,8,9];
a=4
moyenne(a)
function moyenne(a){
  var n=0;
  for(a=0;a<4;a++){
    n=note[a]+n;
    k=a+1;
  }
  moyenne= n/k;
  console.log('La moyenne des notes du tableau est: ',moyenne);
}