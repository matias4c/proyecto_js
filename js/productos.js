//Un arreglo con todos los productos y sus propiedades.
const productos = [
    //Mouse
        {id: "producto-01", tipo: 'mouse', marca: "redragon", nombre: "Mouse Redragon Rgb Centrophorus 2 M601", precio:18500, imagen: "./img/componentes/centrophorus.jpg", vendido: "DISPONIBLE"},
        {id: "producto-02", tipo: 'mouse', marca: "redragon", nombre: "Mouse Redragon Griffin White", precio:20500, imagen: "./img/componentes/griffin.jpg", vendido: "DISPONIBLE"},
        {id: "producto-03", tipo: 'mouse', marca: "redragon", nombre: "Mouse Gamer Redragon Impact M908", precio:29200, imagen: "./img/componentes/impact.jpg", vendido: "DISPONIBLE"},
        {id: "producto-04", tipo: 'mouse', marca: "redragon", nombre: "Mouse Gamer Redragon Cobra Fps M711 Negro", precio:34600, imagen: "./img/componentes/cobra.jpg", vendido: "DISPONIBLE"},
        {id: "producto-05", tipo: 'mouse', marca: "t-dagger", nombre: "Mouse T-Dagger Private TGM106", precio: 10200, imagen: "./img/componentes/private.jpg", vendido: "DISPONIBLE"},
        {id: "producto-06", tipo: 'mouse', marca: "t-dagger", nombre: "Mouse T-Dagger Recruit 2 TGM108", precio: 13350, imagen: "./img/componentes/recruit2.jpg", vendido: "DISPONIBLE"},
        {id: "producto-07", tipo: 'mouse', marca: "t-dagger", nombre: "Mouse T-Dagger Beifadier T-tgm206 Negro", precio: 14050, imagen: "./img/componentes/beifadier-white.jpg", vendido: "DISPONIBLE"},
        {id: "producto-08", tipo: 'mouse', marca: "t-dagger", nombre: "Mouse T-Dagger Beifadier White RGB TGM206W", precio: 14050, imagen: "./img/componentes/beifadier-black.jpg", vendido: "DISPONIBLE"},
    //Teclados
        {id: "producto-09", tipo: 'teclado', marca: "redragon", nombre: "Teclado Redragon k618w Horus Fs Wireless White Switch Red SP", precio:89000, imagen: "./img/componentes/horus.jpg", vendido: "DISPONIBLE"},
        {id: "producto-10", tipo: 'teclado', marca: "redragon", nombre: "Teclado Gamer Redragon Shiva K512 White", precio:39650, imagen: "./img/componentes/shiva.jpg", vendido: "DISPONIBLE"},
        {id: "producto-11", tipo: 'teclado', marca: "redragon", nombre: "Teclado Redragon Fizz Pro White/Pink k616-Rgb", precio:64550, imagen: "./img/componentes/fizz.jpg", vendido: "DISPONIBLE"},
        {id: "producto-12", tipo: 'teclado', marca: "redragon", nombre: "Teclado Redragon Horus Mini White K632W-RGB Cable", precio:61150, imagen: "./img/componentes/horusmini.jpg", vendido: "DISPONIBLE"},
        {id: "producto-13", tipo: 'teclado', marca: "t-dagger", nombre: "Teclado T-Dagger Tanker Black Esp T-TGK106", precio: 19600, imagen: "./img/componentes/tanker.jpg", vendido: "DISPONIBLE"},
        {id: "producto-14", tipo: 'teclado', marca: "t-dagger", nombre: "Teclado T-dagger Bora Black T-tgk315-rd Swtich Blue Rainbow", precio: 29350, imagen: "./img/componentes/bora-black.jpg", vendido: "DISPONIBLE"},
        {id: "producto-15", tipo: 'teclado', marca: "t-dagger", nombre: "Teclado T-dagger Bora White Switch Red Rgb T-TGK315W-RD", precio: 41850, imagen: "./img/componentes/bora-white.jpg", vendido: "DISPONIBLE"},
        {id: "producto-16", tipo: 'teclado', marca: "t-dagger", nombre: "Teclado Mecanico T-Dagger Naxos Rainbow T-tgk310 Blue", precio: 33800, imagen: "./img/componentes/naxos.jpg", vendido: "DISPONIBLE"},
        
    //Auriculares
        {id: "producto-17", tipo: 'auriculares', marca: "redragon", nombre: "Auricular Redragon H260 Hylas RGB Black", precio: 32250, imagen: "./img/componentes/hylas.jpg", vendido: "DISPONIBLE"},
        {id: "producto-18", tipo: 'auriculares', marca: "redragon", nombre: "Auricular Redragon Ire Wireless H848 Blanco Gris", precio: 58950, imagen: "./img/componentes/ire.jpg", vendido: "DISPONIBLE"},
        {id: "producto-19", tipo: 'auriculares', marca: "redragon", nombre: "Auricular Redragon Zeus X PINK RGB", precio: 82600, imagen: "./img/componentes/zeus.jpg", vendido: "DISPONIBLE"},
        {id: "producto-20", tipo: 'auriculares', marca: "redragon", nombre: "Auricular Redragon Pandora 7.1 H350 White Rgb", precio: 53550, imagen: "./img/componentes/pandora.jpg", vendido: "DISPONIBLE"},
        {id: "producto-21", tipo: 'auriculares', marca: "t-dagger", nombre: "Auricular T-dagger Sona Pink 7.1 Rgb T-RGH304P Rosa", precio: 32050, imagen: "./img/componentes/sona-pink.jpg", vendido: "DISPONIBLE"},
        {id: "producto-22", tipo: 'auriculares', marca: "t-dagger", nombre: "Auricular T-dagger Sona Black 7.1 Rgb T-RGH304", precio: 32050, imagen: "./img/componentes/sona-black.jpg", vendido: "DISPONIBLE"},
        {id: "producto-23", tipo: 'auriculares', marca: "t-dagger", nombre: "Auricular T-dagger Sona White 7.1 Rgb T-RGH304W Blanco", precio: 32050, imagen: "./img/componentes/sona-white.jpg", vendido: "DISPONIBLE"},
        {id: "producto-24", tipo: 'auriculares', marca: "t-dagger", nombre: "Auricular T-dagger Eiger Black T-RGH208", precio: 34700, imagen: "./img/componentes/eiger.jpg", vendido: "DISPONIBLE"},
    
    //Mouse pads
        {id: "producto-25", tipo: 'mousepad', marca: "redragon", nombre: "Mouse Pad Gamer Redragon P003 Suzaku XL", precio: 12500, imagen: "./img/componentes/suzaku.jpg", vendido: "DISPONIBLE"},
        {id: "producto-26", tipo: 'mousepad', marca: "redragon", nombre: "Mouse Pad Gamer Redragon Flick S", precio: 5300, imagen: "./img/componentes/flick-s.jpg", vendido: "DISPONIBLE"},
        {id: "producto-27", tipo: 'mousepad', marca: "redragon", nombre: "Mouse Pad Gamer Redragon Flick L", precio: 13300, imagen: "./img/componentes/flick-l.jpg", vendido: "DISPONIBLE"},
        {id: "producto-28", tipo: 'mousepad', marca: "redragon", nombre: "Mouse Pad Gamer Redragon Flick XL", precio: 25050, imagen: "./img/componentes/flick-xl.jpg", vendido: "DISPONIBLE"},
        {id: "producto-29", tipo: 'mousepad', marca: "t-dagger", nombre: "Mouse Pad Gamer T-dagger Geometry S Speed", precio: 7100, imagen: "./img/componentes/geometry-s.jpg", vendido: "DISPONIBLE"},
        {id: "producto-30", tipo: 'mousepad', marca: "t-dagger", nombre: "Mouse Pad Gamer T-dagger Geometry L Speed", precio: 16250, imagen: "./img/componentes/geometry-l.jpg", vendido: "DISPONIBLE"},
        {id: "producto-31", tipo: 'mousepad', marca: "t-dagger", nombre: "Mouse pad T-DAGGER Lava S T-tmp100", precio: 6700, imagen: "./img/componentes/lava-s.jpg", vendido: "DISPONIBLE"},
        {id: "producto-32", tipo: 'mousepad', marca: "t-dagger", nombre: "Mouse pad T-DAGGER Lava M T-tmp200", precio: 7750, imagen: "./img/componentes/lava-m.jpg", vendido: "DISPONIBLE"},
    ]