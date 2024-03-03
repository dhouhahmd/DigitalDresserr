const articlesHommes = [
    { nom: "costume",prix: 25, image: "costume1" },
    { nom: "costume",prix: 25, image: "costume2" },
    { nom: "costume",prix: 25, image: "costume3" },
    { nom: "costume",prix: 25, image: "costume4" },
    { nom: "costume ",prix: 25, image: "costume5" },
    { nom: "survettement ",prix: 25, image: "survett1" },
    { nom: "Chemise pour hommes",prix: 25, image: "imagepull" },
    { nom: "Chemise pour hommes", prix: 25, image: "chemise1" },
    { nom: "Chemise pour hommes", prix: 25, image: "chemise2" },
    
    { nom: "Pantalon pour hommes", prix: 45, image: "pantalon1" },
    { nom: "Pantalon pour hommes", prix: 50, image: "pantalon2" },
    { nom: "Pantalon pour hommes", prix: 35, image: "pantalon3" },
    { nom: "Veste pour hommes", prix: 60, image: "veste1" },
    { nom: "Veste pour hommes", prix: 60, image: "veste2" },
    { nom: "Veste pour hommes", prix: 60, image: "veste3"},
    ];
    
    const articlesFemmes = [
    { nom: "Robe mariée", prix: 1000, image: "robemariage5" },
    { nom: "Robe mariée ", prix: 1500, image: "robemariage1" },
    { nom: "Robe mariée", prix: 2000, image: "robemariage2" },
    { nom: "Robe mariée", prix: 1600, image: "robemariage3" },
    { nom: "Robe mariée", prix: 1800, image: "robemariage4" },
    { nom: "Robe pour femmes", prix: 35, image: "robe1" },
    { nom: "Robe pour femmes", prix: 45, image: "robe2" },
    { nom: "Robe pour femmes", prix: 60, image: "robe3" },
    { nom: "Jupe pour femmes", prix: 65, image: "jupe1" },
    { nom: "Jupe pour femmes", prix: 45, image: "jupe2 "},
    { nom: "Jupe pour femmes", prix: 35, image: "jupe3" },
    { nom: "Blouse pour femmes", prix: 50, image: "blouse1" },
    { nom: "Blouse pour femmes", prix: 55, image: "blouse2" },
    { nom: "Blouse pour femmes", prix: 75, image: "blouse3" },
    { nom: "robe soirée", prix: 750, image: "robesoirée" },
    ];
    
    const articlesEnfants = [
    { nom: "T-shirt pour enfants", prix: 15, image: "tshirt1" },
    { nom: "T-shirt pour enfants", prix: 17, image: "tshirt2" },
    { nom: "T-shirt pour enfants", prix: 20, image: "tshirt4" },
    { nom: "T-shirt pour enfants", prix: 30, image: "tshirt5"},
    { nom: "T-shirt pour enfants", prix: 32, image: "tshirt6" },
    { nom: "Short pour enfants", prix: 33, image: "short1"},
    { nom: "Short pour enfants", prix: 24, image: "short2" },
    { nom: "Short pour enfants", prix: 12, image: "short3" },
    { nom: "Short pour enfants", prix: 15, image: "short4" },
    { nom: "Short pour enfants", prix: 20, image: "short5" },
    { nom: "Pull pour enfants", prix: 25, image: "pull11" },
    { nom: "Pull pour enfants", prix: 30, image: "pull2" },
    { nom: "Pull pour enfants", prix: 35, image: "pull3" },
    { nom: "Pull pour enfants", prix: 30, image: "pull4" },
    { nom: "Pull pour enfants", prix: 18, image: "pull5"},
    ];
    
    // Déclaration de la variable panier
    let panier = [];
    
    // Fonction pour afficher les articles dans une section donnée
    function afficherArticles(sectionId, articles) {
        const section = document.getElementById(sectionId);
        const itemsDiv = section.querySelector(".items");
    
        articles.forEach((article, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
            itemDiv.innerHTML = `<img src="${article.image}" alt="${article.nom}"><h3>${article.nom}</h3><p>Prix: ${article.prix} $</p>`;
            itemDiv.addEventListener("click", () => {
                ajouterAuPanier(sectionId, index);
            }); // Ajout de l'événement de clic pour chaque article
            itemsDiv.appendChild(itemDiv);
        });
    }
    
    // Fonction pour ajouter un article au panier
    function ajouterAuPanier(sectionId, index) {
        let article;
        switch (sectionId) {
            case "hommes":
                article = articlesHommes[index];
                break;
            case "femmes":
                article = articlesFemmes[index];
                break;
            case "enfants":
                article = articlesEnfants[index];
                break;
            default:
                return;
        }
    
        panier.push(article);
        afficherPanier();
        calculerTotal();
    }
    
    // Fonction pour afficher le contenu du panier
    function afficherPanier() {
        const panierDiv = document.getElementById("panier-content");
        panierDiv.innerHTML = "";
        
        if (panier.length === 0) {
            panierDiv.innerHTML += "<p>Le panier est vide.</p>";
        } else {
            panier.forEach((article) => {
                panierDiv.innerHTML += `<p>${article.nom} - ${article.prix} $</p>`;
            });
        }
    }
    
    // Fonction pour calculer le total du panier
    function calculerTotal() {
        let total = 0;
        panier.forEach((article) => {
            total += article.prix;
        });
        console.log("Total du panier:", total);
        return total;
    }
    
    // Appel de la fonction pour afficher les articles
    afficherArticles("hommes", articlesHommes);
    afficherArticles("femmes", articlesFemmes);
    afficherArticles("enfants", articlesEnfants);