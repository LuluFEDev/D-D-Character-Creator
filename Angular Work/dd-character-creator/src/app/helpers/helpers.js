export const dragonAncestryConstants = {
    blackDragon: 'Black',
    blueDragon: 'Blue',
    brassDragon: 'Brass',
    bronzeDragon: 'Bronze',
    copperDragon: 'Copper',
    goldDragon: 'Gold',
    greenDragon: 'Green',
    redDragon: 'Red',
    silverDragon: 'Silver',
    whiteDragon: 'White',
}

export const backgroundConstants = {
    acolyte: 'Acolyte',
    charlatan: 'Charlatan',
    criminal: 'Criminal',
    entertainer: 'Entertainer',
    folkHero: 'Folk Hero',
    guildArtisan: 'Guild Artisan',
    hermit: 'Hermit',
    noble: 'Noble',
    outlander: 'Outlander',
    sage: 'Sage',
    sailor: 'Sailor',
    soldier: 'Soldier',
    urchin: 'Urchin',
}
export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}