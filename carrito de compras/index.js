const ListaDeProductos = [
    {
        id: '1',
        nombre: 'Igloo Waterdog Aral 8 personas',
        precio: 15.600,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img:"https://nauticaelanzuelo2.mercadoshops.com.ar/MLA-658837605-carpa-familiar-waterdog-aral-8-persona-300-x-615-x-200-cm-_JM",
        categoria: 'carpas',
        stock: 15
    },
    {
        id: '2',
        nombre: 'Bolsa de dormir Nat Geo climb -10º',
        precio: 13.700,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://listado.mercadolibre.com.ar/bolsa-de-dormir-climb-national-geographic',
        categoria: 'Bolsas de dormir',
        stock:10
    },
    {
        id: '3',
        nombre: 'Conservadora coleman',
        precio: 15.000,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://www.fusion4x4.com.ar/productos/conservadora-coleman-extreme-gris-naranja/',
        categoria: 'conservadoras',
        stock: 5
    },
    {
        id: '4',
        nombre: 'Linterna Farol Lexus Led USB',
        precio: 1800,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://buenpique.com.ar/producto/linterna-lexus-con-farol-led-jc4001/',
        categoria: 'linternas',
       stock:20
    },
    {
        id: '5',
        nombre: 'Mochila Doite Leonera 40L',
        precio: 23.000,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://www.doiteargentina.com.ar/producto/mochila-doite-fastpacking-leonera-50/',
        categoria: 'mochilas',
        stock:10
    },
];

/* Clase */
class Producto{
    constructor(id, nombre, precio, descripcion, img, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.categoria = categoria;
    }
    obtenerInfo(){
        return `ID: ${this.id} | ${this.nombre} $${this.precio}`;
    }
    obtenerAviso(emoji){
        return `${this.nombre} precio del producto $${this.precio}`;
    }
}
/* variables */
const carrito = [];
/* funciones */
const obtenerInfoProductos = (productosArray) => {
    return productosArray.map(   (elemento)=>  elemento.obtenerInfo()  ).join('\n');
}
const agregarAlCarritoById = (productos) => {
    const infoProductos = obtenerInfoProductos(productos);
    const id = prompt('Ingrese el ID del producto que desea agregar al carrito:\n' + infoProductos);
    const producto = productos.find((producto) => producto.id === id);
    if (!producto) return;
    carrito.push(producto);
    alert('Producto agregado al carrito');
}
const imprimirCarrito = (carritoDeProductos) => {
    carritoDeProductos.forEach((producto) => {
        console.log(producto.obtenerAviso('💰'));
    });
}
const obtenerTotal = (productosArray) => {
    let total = 0;
    productosArray.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}
/* Ejecucion */
const productos = ListaDeProductos.map(producto => new Producto(
    producto.id,
    producto.nombre,
    producto.precio,
    producto.descripcion,
    producto.img,
    producto.categoria
));

agregarAlCarritoById(productos);
agregarAlCarritoById(productos);
agregarAlCarritoById(productos);

alert('Abre la consola para ver tu compra');
imprimirCarrito(carrito);
console.log('TOTAL: ' , obtenerTotal(carrito));



console.log(document.getElementById(carta))




let darkMode

if(localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode")
} else {
    localStorage.setItem("darkMode", "light") 
}

if(darkMode == "dark") {
    document.body.classList.add('darkMode')
}

const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")
const botonProductos = document.getElementById("botonProductos")
const divProductos = document.getElementById("divProductos")

botonDarkMode.addEventListener('click', () => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
   document.body.classList.add('darkMode')
   localStorage.setItem("darkMode", "dark")
})

botonLightMode.addEventListener('click', () => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
   document.body.classList.remove('darkMode')
   localStorage.setItem("darkMode", "light")
})

