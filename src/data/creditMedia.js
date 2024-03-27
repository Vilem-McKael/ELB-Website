import CreditsPage from "../pages/CreditsPage/CreditsPage"

export const CreditCategory = {
    Artists: 'Artists',
    Film: 'Film',
    TV: 'TV',
    // All: 'All'
}

export const r = { // Roles
    Contractor: 'Vocal Contractor',
    Vocalist: 'Vocalist',
    Conductor: 'Conductor',
}

/*

BLANK MEDIA TEMPLATE

{
    title: "",
    img: require('../creditImages/'),
    roles: [r.],
    notes: ""
}

*/

export const AllMedia = {
    Artists: [
        {
            title: "Madonna",
            img: '/creditImages/madonna.jpeg',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Linda Ronstadt",
            img: '/creditImages/lindaRonstadt.jpeg',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Rosalía",
            img: '/creditImages/rosalia.jpeg',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Michael Bublé",
            img: '/creditImages/michaelBuble.webp',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Stevie Wonder",
            img: '/creditImages/stevieWonder.jpeg',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Aretha Franklin",
            img: '/creditImages/arethaFranklin.webp',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Michael Jackson",
            img: '/creditImages/michaeljackson2.jpeg',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Whitney Houston",
            img: '/creditImages/whitneyHouston.webp',
            roles: [r.Vocalist],
            notes: ""
        },
        {
            title: "Chicago",
            img: '/creditImages/chicago.jpeg',
            roles: [r.Vocalist],
            notes: ""
        },
    ],
    Film: [
        {
            title: "Nope",
            img: '/creditImages/nope.jpeg',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Dune 2",
            img: '/creditImages/dune2.webp',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Dune",
            img: '/creditImages/dune.jpeg',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Avatar: The Way of Water",
            img: '/creditImages/avatar2.webp',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Encanto",
            img: '/creditImages/encanto.webp',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "The Creator",
            img: '/creditImages/thecreator.webp',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Spider-Man: No Way Home",
            img: '/creditImages/spidermannowayhome.jpeg',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "The Lorax",
            img: '/creditImages/thelorax.jpeg',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Avengers: Endgame",
            img: '/creditImages/avengersendgame.jpeg',
            roles: [r.Vocalist],
            notes: ""
        },
    ],
    TV: [
        {
            title: "The Voice",
            img: '/creditImages/thevoice.webp',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "The Simpsons",
            img: '/creditImages/thesimpsons.webp',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Fuller House",
            img: '/creditImages/fullerhouse.png',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Glee",
            img: '/creditImages/glee.jpeg',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Family Guy",
            img: '/creditImages/familyguy2.webp',
            roles: [r.Contractor, r.Vocalist],
            notes: ""
        },
        {
            title: "When We Rise",
            img: '/creditImages/whenwerise2.jpeg',
            role: [r.Contractor],
            notes: ""
        },
        {
            title: "Gravity Falls",
            img: '/creditImages/gravityfalls3.webp',
            roles: [r.Contractor],
            notes: ""
        },
        {
            title: "Batman Beyond",
            img: '/creditImages/batmanbeyond.jpeg',
            roles: [r.Contractor, r.Vocalist],
            notes: ""
        },
        {
            title: "Amphibia",
            img: '/creditImages/amphibia.jpeg',
            roles: [r.Contractor],
            notes: ""
        },
    ],
    // All: [
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    //     {
    //         title: "",
    //         img: null,
    //         roles: [],
    //         notes: ""
    //     },
    // ]
}