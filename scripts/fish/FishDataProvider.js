const fishCollection = [
    {
        name: "Super Poseidon",
        species: "Carassius auratus",
        length: 10,
        origin: "Wal-Mart",
        diet: "Shelled peas, blanched greens, and bloodworms",
        image: "https://www.meijer.com/content/dam/meijer/product/0000/00/0009/26/0000000009268_1200.png"

    },

    {
        name: "Poseidon",
        species: "Carassius auratus",
        length: 6,
        origin: "Wal-Mart",
        diet: "Shelled peas, blanched greens, and bloodworms",
        image: "https://www.meijer.com/content/dam/meijer/product/0000/00/0009/26/0000000009268_1200.png"

    },

    {
        name: "Poseidon",
        species: "Carassius auratus",
        length: 6,
        origin: "Wal-Mart",
        diet: "Shelled peas, blanched greens, and bloodworms",
        image: "https://www.meijer.com/content/dam/meijer/product/0000/00/0009/26/0000000009268_1200.png"

    },

    {
        name: "Dumb Poseidon",
        species: "Carassius auratus",
        length: 8,
        origin: "Wal-Mart",
        diet: "Shelled peas, blanched greens, and bloodworms",
        image: "https://www.meijer.com/content/dam/meijer/product/0000/00/0009/26/0000000009268_1200.png"

    }
]

// export const useFish = () => {
//     return fishCollection.slice()
// }

export const holyFish = () => {
    return fishCollection.filter(fish => fish.length % 3 === 0)
}

export const soldierFish = () => {
    return fishCollection.filter(fish => fish.length % 5 === 0 && fish.length % 3 !== 0)
}

export const otherFish = () => {
    return fishCollection.filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0)
}
