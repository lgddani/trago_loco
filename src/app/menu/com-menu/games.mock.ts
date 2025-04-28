export const gamesList: Game[] = [
    {
        id: 1,
        img: "assets/img/menu/menu-1.jpg",
        alt: "Trago Loco - biela rusa - juegos",
        title: "Biela Rusa",
        category: ['sano']
    },
    {
        id: 2,
        img: "assets/img/menu/menu-2.jpg",
        alt: "Trago Loco - verdad/reto o shot - juegos",
        title: "Verdad/Reto o Shot",
        category: ['sano', 'picante']
    },
    {
        id: 3,
        img: "assets/img/menu/menu-3.jpg",
        alt: "Trago Loco - yo nunca nunca - juegos",
        title: "Yo nunca nunca",
        category: ['sano', 'picante']
    },
    {
        id: 4,
        img: "assets/img/menu/menu-4.jpg",
        alt: "Trago Loco - mi barquito de papel - juegos",
        title: "Mi barquito de papel",
        category: ['sano']
    },
    {
        id: 5,
        img: "assets/img/menu/menu-5.jpg",
        alt: "Trago Loco - quien es más probable - juegos",
        title: "Quién es más probable",
        category: ['sano', 'picante']
    },
]

export interface Game {
    id: number;
    img: String;
    alt: String;
    title: String;
    category: Array<String>;
}