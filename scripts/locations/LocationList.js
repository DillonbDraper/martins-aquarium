import { giveLocation } from "./LocationDataProvider.js"
import { Location } from './Location.js'

export const LocationList = () => {
    const content = document.querySelector(".destinations")
    const locations = giveLocation()

    let htmlRepresentation = "";

    for (const location of locations) {
        htmlRepresentation += Location(location)
    }

    content.innerHTML += `${htmlRepresentation}`





}