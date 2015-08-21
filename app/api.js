var getFamilyData = function() {

  var family = [
    {name: 'Andy', age: 35, tags:  ['male','adult']},
    {name: 'Emily', age: 33, tags: ['female', 'adult']},
    {name: 'William', age: 4, tags: ['male', 'superhero']},
    {name: 'Lizzie', age: 1, tags: ['female', 'baby']},
    {name: 'Barbara', age: 70, tags: ['female', 'adult']},
    {name: 'Brian', age: 75, tags: ['male', 'adult']},
    {name: 'Debbie', age: 49, tags: ['female', 'adult']},
    {name: 'Dean', age: 48, tags: ['male', 'adult']},   
    {name: 'Ben', age: 20, tags: ['male', 'adult']},   
    {name: 'Zoe', age: 18, tags: ['female', 'adult']}   
  ];

  var p = new Promise( (resolve,reject) => {
    setTimeout( () => {
      resolve(family);  
    }, 500);
  });

  return p; 

}

export { getFamilyData }