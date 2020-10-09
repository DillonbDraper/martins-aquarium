import { Fish } from "./Fish.js"
import { holyFish, otherFish, soldierFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fish-info")
    const chosenOnes = holyFish()
    const soldiers = soldierFish()
    const others = otherFish()

    console.log(chosenOnes, soldiers, others)

    const htmlMaker = (fishArray, htmlRep) => {
        for (const fishie of fishArray) {
            htmlRep += Fish(fishie)
        }
        return htmlRep
    }

    const holyHTML = htmlMaker(chosenOnes, "")
    const soldierHTML = htmlMaker(soldiers, "")
    const otherHTML = htmlMaker(others, "")

    contentElement.innerHTML += `
        <article class="fish-list">
            ${holyHTML}
            ${soldierHTML}
            ${otherHTML}
        </article>
    `
}