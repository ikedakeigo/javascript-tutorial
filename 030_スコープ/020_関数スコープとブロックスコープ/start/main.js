function a(){
  let b = 0;
  console.log(b);
}

a();

{
  var c = 1;
  function d(){
    console.log('d is called');
  }

  d();
}
console.log(c);
