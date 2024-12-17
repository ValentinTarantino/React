
const productos = [
    {
        id: "svgr200",
        nombre: "Placa de video 4060 TI",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/4060ti.jpg",
        precio: "400000$",
        stock: 2,
        categoria: "Placas de video",
    },
    {
        id: "svgr201",
        nombre: "Placa de video 3060",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/3060.jpg",
        precio: "320000$",
        stock: 3,
        categoria: "Placas de video",
    },
    {
        id: "svgr202",
        nombre: "Procesador Intel I5 12400",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/i5.jpg",
        precio: "170000$",
        stock: 5,
        categoria: "Procesadores",
    },
    {
        id: "svgr203",
        nombre: "Procesador Intel I3 12100F",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/i3.jpg",
        precio: "150000$",
        stock: 12,
        categoria: "Procesadores",
    },
    {
        id: "svgr204",
        nombre: "Memoria Ram Viper DDR4 3200hz",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/viper.jpg",
        precio: "80000$",
        stock: 4,
        categoria: "Memorias Ram",
    },
    {
        id: "svgr205",
        nombre: "Memoria Ram Geil DDR4 3000hz",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/geil.jpg",
        precio: "45000$",
        stock: 15,
        categoria: "Memorias Ram",
    },
    {
        id: "svgr206",
        nombre: "Fuente XPG 800W 80 Plus Bronce",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/fuente.jpg",
        precio: "85000$",
        stock: 3,
        categoria: "Fuentes",
    },
    {
        id: "svgr207",
        nombre: "Fuente Be Quiet! 500W 80 Plus Bronce",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vestibulum sapien, duis eu integer sed felis ornare inceptos laoreet morbi, porta dictum class himenaeos cursus vivamus orci euismod aliquam. Curae dis ullamcorper torquent blandit facilisis risus, dapibus cubilia ante luctus et ac aenean, tristique congue urna mattis nascetur. Sem sagittis quisque potenti ac nisi nibh magnis class hac, vehicula orci facilisi cursus malesuada habitasse aptent varius, molestie mi scelerisque vulputate libero maecenas fames fringilla.",
        Img: "/img/quiet.jpg",
        precio: "65000$",
        stock: 5,
        categoria: "Fuentes",
    },
]

const getProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

export { getProductos }