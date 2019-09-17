function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = () => {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
    this.getInitiales = () => {
        return this.prenom.charAt(0) + this.nom.charAt(0);
    }
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77') ;

var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

console.log(jules.nom, jules.prenom, jules.pseudo, jules.getNomComplet());

function afficherPersonne(p) {
    console.log(p.nom, p.prenom, p.pseudo, p.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = 'jules44';

console.log(jules.getNomComplet());

console.log(`âge de jules = ${jules.age}`);

Personne.prototype.age = 'NON RENSEIGNE';

console.log(`âge de jules = ${jules.age}`);

jules.age = 30;

console.log(`âge de jules = ${jules.age}`);

console.log(`initiales de jules = ${jules.getInitiales()}`);

var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function() {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
}

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = () => {
        return this.numeroClient + ' ' + this.nom + ' ' + this.prenom;
    }
}

var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');

afficherPersonne(steve);

console.log(`numero de client de steve = ${steve.numeroClient}`);

console.log(`resultat de getInfos pour steve = ${steve.getInfos()}`);