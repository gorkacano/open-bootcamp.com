  let shoopingList = [ 'leche', 'pan', 'queso', 'manzanas', 'detergente' ];
  shoopingList.push('Aceite de girasol');
  console.log(shoopingList);

  let shoppingList2 = shoopingList.filter(v => v !== 'Aceite de girasol');  
  console.log(shoppingList2);

  let favouriteFilms = [
    {
      name: 'la vida es bella',
      director: 'Roberto Benigni',
      date: 1997,
    },
    {
      name: 'start wars',
      director: 'George Lucas',
      date: 1977,
    },
    {
      name: 'avatar',
      director: 'James Cameron',
      date: 2009,
    }
  ];

  let newFilms = favouriteFilms.filter(f => f.date > 2010);
  console.log(newFilms);

  let directors = favouriteFilms.map(d => d.director);
  console.log(directors);

  let filmsNames = favouriteFilms.map(f => f.name);
  console.log(filmsNames);

  let filmsAndDirectors = directors.concat(filmsNames);
  console.log(filmsAndDirectors);

  let filmsAndDirectors2 = [...directors,...filmsNames];
  console.log(filmsAndDirectors2);