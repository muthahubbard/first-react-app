var getFamilyData = function() {

  var family = [
    {name: 'Andy', age: 35, tags:  {sex: 'male', type: 'adult'}},
    {name: 'Emily', age: 33},
    {name: 'William', age: 4},
    {name: 'Lizzie', age: 1},
    {name: 'Barbara', age: 0 },
    {name: 'Brian', age: 0 },
    {name: 'Debbie', age: 50 },
    {name: 'Dean', age: 48 },   
    {name: 'Ben', age: 20 },   
    {name: 'Zoe', age: 18 }   
  ];

  var p = new Promise( (resolve,reject) => {
    setTimeout( () => {
      resolve(family);  
    }, 1000);
  });

  return p; 

}

export { getFamilyData }