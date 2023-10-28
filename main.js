class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateUniqueId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some(product => product.code === code)) {
        throw new Error("El código del producto ya está en uso.");
      }
  
      const product = {
        id: this.generateUniqueId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      return product;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error("Producto no encontrado.");
      }
      return product;
    }
  }
  

  const productManager = new ProductManager();
  

  const products = productManager.getProducts();
  console.log("Productos iniciales:", products);
  

  const newProduct = productManager.addProduct("Producto Prueba", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
  console.log("Producto agregado:", newProduct);
  

  const updatedProducts = productManager.getProducts();
  console.log("Productos actualizados:", updatedProducts);
  

  try {
    productManager.addProduct("Producto Duplicado", "Este producto tiene un código duplicado", 150, "Sin imagen", "abc123", 10);
  } catch (error) {
    console.error("Error al agregar producto duplicado:", error.message);
  }
  

  const productId = newProduct.id;
  try {
    const foundProduct = productManager.getProductById(productId);
    console.log("Producto encontrado por ID:", foundProduct);
  } catch (error) {
    console.error("Error al buscar producto por ID:", error.message);
  }
