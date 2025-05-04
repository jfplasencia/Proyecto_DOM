const navbar = document.createElement('div');
    navbar.className = 'navbar';

    // Logo
    const logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = 'img/f.png'

    // Contenedor de enlaces
    const navLinks = document.createElement('div');
    navLinks.className = 'nav-links';

    const links = [
      { text: 'Soporte Cliente', href: '#'},
      { text: 'Contacto', href: '#'},
      { text: 'Carrito', href: '#'},
    ];

    links.forEach(link => {
      const a = document.createElement('a');
      a.textContent = link.text;
      a.href = link.href;
      navLinks.appendChild(a);
    });

    // Botón de menú hamburguesa
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    for (let i = 0; i < 3; i++) {
      const bar = document.createElement('span');
      menuToggle.appendChild(bar);
    }

    // Agregar interactividad al botón
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Armar navbar
    navbar.appendChild(logo);
    navbar.appendChild(navLinks);
    navbar.appendChild(menuToggle);

    // Agregar al body
    document.body.insertBefore(navbar, document.body.firstChild);

const main = document.createElement('main')
main.classList.add('main-container')
const sectionCategorias = document.createElement('section')
sectionCategorias.classList.add('section-categorias')
main.appendChild(sectionCategorias)
const sectionProductos = document.createElement('section')
sectionProductos.classList.add('section-productos')
main.appendChild(sectionProductos)
document.body.appendChild(main)

//sección categorías
const ulCategorias = document.createElement('ul')
ulCategorias.classList.add('ul-categorias')

const tituloCategorias = document.createElement('h2')
tituloCategorias.classList.add('h2-categorias')
tituloCategorias.textContent = 'Categorias'

const categorias = [
  'Disney',
  'Marvel',
  'Star Wars',
  'DC Comics',
  'Video Games',
  'Harry Potter',
]

for (const categoria of categorias) {
  let li = document.createElement('li')
  let a = document.createElement('a')
  a.href = '#'
  a.textContent = categoria
  li.appendChild(a)
  ulCategorias.appendChild(li)
}

sectionCategorias.appendChild(tituloCategorias)
sectionCategorias.appendChild(ulCategorias)

const tituloProductos = document.createElement('h1')
tituloProductos.classList.add('h1-productos')
tituloProductos.textContent = 'Nuevos Productos'

sectionProductos.appendChild(tituloProductos)

const productos = [
  {
    name: 'Stitch',
    price: '16€',
    stars: 3,
    reviews: 250,
    seller: 'Funkoeurope',
    image:
      'https://th.bing.com/th/id/OIP.XuvCT0lJgKln1PiwrlKH5QHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7',
    url: 'https://funkoeurope.com/products/stitch-lilo-and-stitch'
  },

  {
    name: 'The Beast',
    price: '16€',
    stars: 4.2,
    reviews: 128,
    seller: 'Funkoeurope',
    image: 'https://th.bing.com/th/id/OIP.nGej5Na-mec8CHkgfXRh8AHaJR?rs=1&pid=ImgDetMain',
    url: 'https://funkoeurope.com/products/the-beast-disney?nosto_source=cmp&nosto=275880474'
  },
  {
    name: 'Spiderman-Miles Morales',
    price: '16€',
    stars: 4.6,
    reviews: 264,
    seller: 'Funkoeuropa',
    image:
      'https://th.bing.com/th/id/OIP.C23Vda_ZJF9Ai06e0JwkkAHaHa?rs=1&pid=ImgDetMain',
    url: 'https://funkoeurope.com/products/miles-morales-bodega-cat-suit-spider-man-miles-morales?nosto_source=cmp&nosto=1466616387'
  },
  {
    name: 'Capitan America-Civil War',
    price: '16€',
    stars: 4.5,
    reviews: 152,
    seller: 'Funkoeuropa',
    image:
      'https://img.pccomponentes.com/articles/1081/10813958/1107-funko-pop-marvel-civil-war-capitan-america.jpg',
    url: 'https://funkoeurope.com/products/civil-war-captain-america?nosto_source=cmp&nosto=1466616387'
  },
  {
    name: 'Hulk',
    price: '16€',
    stars: 4.4,
    reviews: 126,
    seller: 'Funkoeuropa',
    image:
      'https://s7.orientaltrading.com/is/image/OrientalTrading/PDP_VIEWER_THUMB$NOWA$/funko-pop-marvel-new-classics-hulk-1420~14540840-a01$NOWA$',
    url: 'https://funkoeurope.com/products/hulk-marvel-new-classics?nosto_source=cmp&nosto=1466616387'
  },
  {
    name: 'Luke Skywalker',
    price: '16€',
    stars: 4.6,
    reviews: 19,
    seller: 'Funkoeuropa',
    image:
      'https://th.bing.com/th/id/OIP.oB3ETvSWQKAG_BZcr8AS7wHaMp?rs=1&pid=ImgDetMain',
    url: 'https://funkoeurope.com/products/luke-skywalker-star-wars-episode-iv-a-new-hope?nosto_source=cmp&nosto=1994951207'
  },

  {
    name: 'Din Grogu',
    price: '16€',
    stars: 4.5,
    reviews: 157,
    seller: 'Funkoeuropa',
    image:
      'https://th.bing.com/th/id/OIP.50UF_Yo_zaidzDZinU7yMAHaHa?rs=1&pid=ImgDetMain',
    url: 'https://funkoeurope.com/products/din-grogu-with-armor-star-wars-the-mandalorian?nosto_source=cmp&nosto=1994951207'
  }
]

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i]

  let a = document.createElement('a')
  a.href = producto.url
  a.target = '_blank'
  a.classList.add('card-link')

  let article = document.createElement('article')
  article.classList.add('card')

  let img = document.createElement('img')
  img.src = producto.image
  img.alt = producto.name
  article.appendChild(img)

  let name = document.createElement('h3')
  name.textContent = producto.name
  article.appendChild(name)

  let price = document.createElement('p')
  price.textContent = `Price: ${producto.price}`
  article.appendChild(price)

  let stars = document.createElement('p')
  stars.textContent = `Rating: ${producto.stars} ⭐`
  article.appendChild(stars)

  let reviews = document.createElement('p')
  reviews.textContent = `${producto.reviews} reviews`
  article.appendChild(reviews)

  let seller = document.createElement('p')
  seller.textContent = `Seller: ${producto.seller}`
  article.appendChild(seller)

  a.appendChild(article)
  sectionProductos.appendChild(a)
}

//footer section
const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');

// Añadir contenido al footer
const parrafo = document.createElement('p')
parrafo.textContent = 'Funko Pop © 2025, Todos los derechos reservados' 
footerContainer.appendChild(parrafo)
document.body.appendChild(footerContainer)