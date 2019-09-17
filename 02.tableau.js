var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach((ville) => {
    console.log(ville);
})

villes.every((ville) => {
    return console.log(`lettreADansToutesLesVilles = ${ville.includes('a')}`);
})

var someVilles = villes.some((ville) => {
    return ville.includes('-');
})
console.log(`auMoinsUneVilleAvecUnTiret = ${someVilles}`);

var villesSansTiretSansEspace = villes.filter((ville) => {
    return !ville.includes('-') && !ville.includes(' ');
});
console.log('villesSansTiretSansEspace', villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter((ville) => {
    return ville.endsWith('s');
}).map((ville) => { return ville.toUpperCase()});

console.log('villesMajusculeSeTerminantParS', villesMajusculeSeTerminantParS);