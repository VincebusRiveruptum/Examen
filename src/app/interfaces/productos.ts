export interface Productos {
    id:number;
    precio:number;
    marca:string;
    nombre:string;
    descripcion:string;    
    especificaciones:string[];
    categoria:number;
    tags:string[];
    foto:string;
    puntuacion:number;
}

export interface Carrito{
    idproducto:number;
    cantidad:number;
}

export interface Tienda{
    idseleccionado:number;
}

export let tienda:Tienda = {idseleccionado:0};

export let carrito:Array<Carrito> = [];

export let productos:Array<Productos> = [
    {
        id:1,
        precio:529000,
        marca:"Apple",
        nombre:"iPhone 11 64 GB Blanco",
        descripcion:"iPhone Apple 11 con tecnología IP68 resiste hasta 2 metros de profundidad durante un maximo de 30 minutos.",
        especificaciones:["Conectivilidad:Bluetooth 5.0/WiFi 802.11ax con MIMO 2x2", "Memoria RAM: 4GB", "Procesador: Hexa-Core", "Duración Bateria: 3110 mA/h", "Ancho: 7.57 cm"],
        categoria:1,
        tags:["celular","iphone","apple"],
        foto:"phone.png",
        puntuacion:3
    },
    {
        id:2,
        precio:330000,
        marca:"Intel",
        nombre:"Procesador Intel i5-12600K",
        descripcion:"Procesador Intel de 12va Generación de 6 núcleos de rendimiento y 4 de eficiencia Desbloqueado",
        especificaciones:["Núcleos: 6 núcleos de rendimiento + 4 de eficiencia (10 Núcleos / 16 Hilos", "Gráficos Integrados: UHD 770", "Caché: 9.5 MB", "TDP Máximo: 125W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "intel", "core", "ultima generación"],
        foto:"i512600k.jpg",
        puntuacion:5
    },
    {
        id:3,
        precio:330000,
        marca:"Intel",
        nombre:"Procesador Intel i7-12700K",
        descripcion:"Procesador Intel de 12va Generación de 8 núcleos de rendimiento y 6 de eficiencia Desbloqueado",
        especificaciones:["Núcleos: 8 núcleos de rendimiento + 4 de eficiencia (12 Núcleos / 20 Hilos", "Gráficos Integrados: UHD 770", "Caché: 12 MB", "TDP Máximo: 190W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "intel", "core", "ultima generación"],
        foto:"i712700k.jpg",
        puntuacion:4
    },
    {
        id:4,
        precio:330000,
        marca:"Intel",
        nombre:"Procesador Intel i9-12900K",
        descripcion:"Procesador Intel de 12va Generación de 8 núcleos de rendimiento y 8 de eficiencia Desbloqueado",
        especificaciones:["Núcleos: 8 núcleos de rendimiento + 8 de eficiencia (16 Núcleos / 24 Hilos", "Gráficos Integrados: UHD 770", "Caché: 30 MB", "TDP Máximo: 250W", "Frecuencia: 3,9 GHz"],
        categoria:2,
        tags:["procesador", "intel", "core", "ultima generación"],
        foto:"phone.png",
        puntuacion:4
    },
    {
        id:5,
        precio:360000,
        marca:"AMD",
        nombre:"Procesador AMD Ryzen 5 5600G",
        descripcion:"Procesador AMD Ryzen de 4ta 6 múcleos y 12 Hilos",
        especificaciones:["Núcleos: 8 núcleos y 16 Hilos", "Gráficos Integrados: Radeon", "Caché: 32 MB", "TDP Máximo: 125W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "amd", "core", "ultima generación", "ryzen", "fx"],
        foto:"ryzen5-5600.jpg",
        puntuacion:4
    },
    {
        id:6,
        precio:360000,
        marca:"AMD",
        nombre:"Procesador AMD Ryzen 7 5800X",
        descripcion:"Procesador AMD Ryzen de 4ta 8 múcleos y 16 Hilos",
        especificaciones:["Núcleos: 8 núcleos y 16 Hilos", "Gráficos Integrados: No", "Caché: 32 MB", "TDP Máximo: 125W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "amd", "core", "ultima generación", "ryzen", "fx"],
        foto:"phone.png",
        puntuacion:4
    },
    {
        id:7,
        precio:360000,
        marca:"AMD",
        nombre:"Procesador AMD Ryzen 9 5900",
        descripcion:"Procesador AMD Ryzen de 4ta 16 múcleos y 32 Hilos",
        especificaciones:["Núcleos: 8 núcleos y 16 Hilos", "Gráficos Integrados: No", "Caché: 32 MB", "TDP Máximo: 125W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "amd", "core", "ultima generación", "ryzen", "fx"],
        foto:"phone.png",
        puntuacion:5
    },
    {
        id:8,
        precio:200000,
        marca:"AMD",
        nombre:"Procesador AMD Ryzen 5 3600",
        descripcion:"Procesador AMD Ryzen de 3ra 16 múcleos y 32 Hilos",
        especificaciones:["Núcleos: 8 núcleos y 16 Hilos", "Gráficos Integrados: No", "Caché: 32 MB", "TDP Máximo: 125W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "amd", "core", "ultima generación", "ryzen", "fx"],
        foto:"phone.png",
        puntuacion:4
    },
    {
        id:9,
        precio:270000,
        marca:"AMD",
        nombre:"Procesador AMD Ryzen 7 3700",
        descripcion:"Procesador AMD Ryzen de 3ra 16 múcleos y 32 Hilos",
        especificaciones:["Núcleos: 8 núcleos y 16 Hilos", "Gráficos Integrados: No", "Caché: 32 MB", "TDP Máximo: 125W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "amd", "core", "ryzen", "fx"],
        foto:"phone.png",
        puntuacion:4
    },
    {
        id:10,
        precio:350000,
        marca:"AMD",
        nombre:"Procesador AMD Ryzen 9 3900",
        descripcion:"Procesador AMD Ryzen de 3ra 16 múcleos y 32 Hilos",
        especificaciones:["Núcleos: 8 núcleos y 16 Hilos", "Gráficos Integrados: No", "Caché: 32 MB", "TDP Máximo: 125W", "Frecuencia: 3,8 GHz"],
        categoria:2,
        tags:["procesador", "amd", "core", "ryzen", "fx"],
        foto:"phone.png",
        puntuacion:5
    }
];

