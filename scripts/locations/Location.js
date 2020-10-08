export const Location = (locationObj) => {
    return  `
        <section class=location-item>
            <div><img class="location-pic" src="${locationObj.image}"/> </div>
            <div class="location-name">Pictured: ${locationObj.name}</div>
            <div class="location-bio">${locationObj.bio}</div>
    `
}