export const Fish = (fish) => {
    return `
        <section class="fish-item">
            <div><img  class="fish-photo" src="${fish.image}" /></div>
            <div class="fish-name">Name: ${fish.name}</div>
            <div class="fish-species">Species: ${fish.species}</div>
            <div class="fish-length">Length: ${fish.length}cm</div>
            <div class="fish-origin">Harvested at: ${fish.origin}</div>
            <div class="fish-diet">Diet: ${fish.diet}</div>
        </section>
    `
}