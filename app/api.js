var getFamilyData = function() {

  var family = [
    {name: 'Andy', age: 35},
    {name: 'Emily', age: 33},
    {name: 'William', age: 4},
    {name: 'Lizzie', age: 1}
  ];

  var p = new Promise( (resolve,reject) => {
    setTimeout( () => {
      resolve(family);  
    }, 1000);
  });

  return p; 

}

export { getFamilyData }