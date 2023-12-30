// Sample data for product titles and descriptions
const products = [
    {
        title: "Fox",
        description: "Foxes are found in all continents of the world except Antarctica.Fox’s skin is generally reddish in colour but some foxes have brown skin."
    },
    {
        title: "Turtle",
        description: " Freshwater turtles are being kept as pets by the many people. (The most common species famous for captivity is red-eared sliders).  "
    },
    {
        title: "Lion",
        description: " The lion is a wild terrestrial animal called the king of the forest. Female lions have an average lifespan of about 15-16 years in the   wild, while males live 8-10 years."
    },
    {
        title: "Bear",
        description: "Bears are the mammals belonging to the category of “Carnivora”. Bears usually have fear of attacked by the tigers or human."
    },
    {
        title: "Deer",
        description: " Deer is an animal that is very attractive in appearance.  The average lifespan of a deer is about 10-20 years."
    },
    {
        title: "Zebra",
        description: "   Zebras are one of the most peculiar species due to the presence of black and white stripes on their back.  Lifespan of Zebra varies between 20 to 30 years."
    }, {
        title: "Tiger",
        description: "   tiger is a wild animal that looks like a big cat. Tiger is the biggest flesh-eating animal in its cat family. "
    }, {
        title: "Jaguar",
        description: "Jaguars are the largest of South America's big cats and the third largest cats in the world."
    }, {
        title: "Leopard",
        description: "The leopard is so comfortable up there that it often stalks prey and even hauls its kills up into the branches."
    }, {
        title: "Cheetah",
        description: "   Uniquely adapted for speed, the cheetah is capable of reaching speeds greater than 110 kilometers per hour in just over three seconds."
    }, {
        title: "Rinho",
        description: " Rhinoceroses are endangered, meaning there are very few left, because they have been hunted for the horns on their nose. "
    }, {
        title: "Squiral",
        description: "The squirrel family also includes groundhogs, prairie dogs, and chipmunks. There are more than 250 different animals in the family.   "
    }, {
        title: "Giraffe",
        description: "A giraffe's neck is too short to reach the ground. As a result, it has to awkwardly spread its front legs or kneel to reach the ground for a drink of water."
    }, {
        title: "Panda",
        description: "It fills its stomach by eating grasses and leaves."
    }, {
        title: "Peacock",
        description: "  Peacocks are very beautiful birds of this world. They are mostly found in the jungle, in zoos, or in any agricultural land."
    }, {
        title: "Ostrich",
        description: " They are the heaviest and largest living birds, and lay the largest eggs of any living land animal. With the ability to run at 70 km/h (43.5 mph), "
    }, {
        title: "Talking Parrot",
        description: " They’re social creatures and love hanging out with their flock.Parrots are found in tropical and subtropical regions worldwide."
    }, {
        title: "Parrot",
        description: " Parrots are colorful and super cool birds. They come in various sizes, from small to big."
    }, {
        title: "Toco Toucan",
        description: " A toucan is a type of bird that has 40 different species all ranging in size - the smallest being seven inches and the largest two feet long."
    }, {
        title: "Filamango",
        description: " A flamingo’s nest looks like a mini mud volcano, with room for one large egg. Flamingos are monogamous."
    },
];

function handleCardClick(imageSrc, title) {
    console.log("Clicked title:", title);

    const modalImage = document.getElementById("modalProductImage");
    const modalDescription = document.getElementById("modalProductDescription");

    const product = products.find(product => {
        console.log("Product title:", product.title);
        return product.title === title;
    });

    modalImage.src = imageSrc;
    modalDescription.innerHTML = product ? product.description : "No description available.";

    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const imageSrc = card.querySelector(".product-image").src;
            const title = card.querySelector(".card-title").textContent;
            console.log("Clicked title:", title); // Check the extracted title
            handleCardClick(imageSrc, title);
        });
    });
    
});
