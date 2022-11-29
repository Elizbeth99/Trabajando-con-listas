let ListaCompra=("Mayonesa","Rollo","Cereal","Aceite","sal")
ListaCompra .push("Aceite de girasol")
ListaCompra.pop("Aceite de girasol")

let peliculas=
[ 
  {
    Titulo: "Motichoor Chaknachoor",
    Director: "Debamitra Biswal",
    Fecha: (15, 11, 2019 )
  },

  {
    Titulo: "Amélie",
    Director: "Jean-Pierre Jeunet",
    Fecha: (22, 02, 2002 )
  },

  {
    Titulo: "Santa Claus",
    Director: "René Cardona",
    Fecha: (26, 11, 1959)
  }
]

let peliculasPosteriores=peliculas.filter(pelicula=> pelicula.fecha> (1,1,2010))

let director= peliculas.map(pelicula=>{return pelicula.director})

let titulo=peliculas.map(pelicula=>{return pelicula.director})

let directortitulo=director.concat(titulo)
let directortituloProp=[director,titulo]