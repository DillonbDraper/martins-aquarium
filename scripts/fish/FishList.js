import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fish-info")
    const fishes = useFish();

    let htmlFishRepresentations = ""

    for (const fishie of fishes) {
        htmlFishRepresentations += Fish(fishie)
    }

    contentElement.innerHTML += `
        <article class="fish-list">
            ${htmlFishRepresentations}
        </article>
    `
}