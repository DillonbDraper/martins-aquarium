import { Tip } from "./Tip.js"
import { useTip } from "./TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".travel-tips")
    const tips = useTip() 

    let htmlTipRepresentation = ""

    for (const tip of tips) {
        htmlTipRepresentation += Tip(tip);
    }

    contentElement.innerHTML += `
        <ul>${htmlTipRepresentation}</ul>
    `

}