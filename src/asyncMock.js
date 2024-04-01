const products = [
    {
        id: "1",
        name: "iPhone 15",
        price: 800,
        category: "celulares",
        img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673189/Croma%20Assets/Communication/Mobiles/Images/300652_0_ncocr2.png",
        stock: 3,
        description: "Nuevo iphone 15 excelente calidad de materiales",
    },
    {
        id: "2",
        name: "iPhone 15 pro",
        price: 1200,
        category: "celulares",
        img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677095/Croma%20Assets/Communication/Mobiles/Images/300749_0_hyore5.png",
        stock: 10,
        description: "Mejor telefono del mercado actualmente",
    },
    {
        id: "3",
        name: "Macbook Air",
        price: 1200,
        category: "computadoras",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP825/macbookair.png",
        stock: 6,
        description: "Mejor computadora del mercado",
    },
    {
        id: "4",
        name: "iPad Air",
        price: 1000,
        category: "tablets",
        img: "https://carrello.com.ar/ecom/wp-content/uploads/2022/05/ipad-air-select-cell-blue-202203.png",
        stock: 8,
        description: "Nuevo ipad, la mejor del mercado",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId))
        }, 1000);
    });
};

export const getProductsById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};