
class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    mostrarProducto() {
        console.log("Hola, soy producto")
    }
}

const producto1 = new Producto("igloo", "waterdog",500, 20,)
const producto2 = new Producto("conservadora", "coleman", 120, 50)
const producto3 = new Producto("bolsa de dormir", "Nat Geo", 540, 10)
const producto4 = new Producto("linterna", "lexus", 310, 20)
const producto5 = new Producto("mochila", "doite", 200, 40)

const productos = [producto1, producto2, producto3, producto4, producto5]

localStorage.setItem('carrito', JSON.stringify(productos)) 


botonProductos.addEventListener('click', () => {
    const productoStorage = JSON.parse(localStorage.getItem("carrito")) 
    divProductos.innerHTML = ""
    productoStorage.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card" id="producto${indice}" style="width: 18rem;margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.marca}</p>
                <p class="card-text">$${producto.precio}</p>
                <p class="card-text">${producto.stock}</p>
                <button class="btn btn-danger">Eliminar Producto</button>
            </div>
        </div>
        
        `
    });
})
