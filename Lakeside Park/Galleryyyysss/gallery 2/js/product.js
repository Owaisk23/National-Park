// Sample data for product titles and descriptions
const products = [{
        title: "Fox",
        description: "Foxes are found in all continents of the world except Antarctica.Fox’s skin is generally reddish in colour but some foxes have brown skin"
    },
    {
        title: "Rinho",
        description: "Rhinoceroses are endangered, meaning there are very few left, because they have been hunted for the horns on their nose. "
    },
    {
        title: "Lion",
        description: " The lion is a wild terrestrial animal called the king of the forest. Female lions have an average lifespan of about 15-16 years in the   wild, while males live 8-10 years."
    },
    {
        title: "Crocodile",
        description: "You must have seen a crocodile of you have ever visited any Zoo or a wild-life reserve. Watching them is a fun. Reading about them is as much fun as watching them."
    },
    {
        title: "Elephant",
        description: " Elephants are wild animals that are always found in herds. They are very intelligent and social animals.10"
    },
    {
        title: "Zebra",
        description: "   Zebras are one of the most peculiar species due to the presence of black and white stripes on their back.  Lifespan of Zebra varies between 20 to 30 years."
    }, {
        title: "Horse",
        description: " Horses have four powerful legs, two eyes, a nose, ears and a tail. Unlike other ungulates, they don't have horns.        "
    }, {
        title: "Hippopotamus",
        description: "Hippos are large semi-aquatic mammals, with a large barrel-shaped body, short legs, a short tail and an enormous head!"
    }, {
        title: "Leopard",
        description: "The leopard is so comfortable up there that it often stalks prey and even hauls its kills up into the branches."
    }, {
        title: "Wolf",
        description: "  The head is broad with a long muzzle, strong jaws, and large canine teeth. Its strength, long legs, and large feet help the gray wolf to pursue large prey animals."
    }, {
        title: "Tiger",
        description: " Elevate your strength training routine with this weight bench. Featuring adjustable incline settings, it allows you to target various muscle groups for a versatile workout."
    }, {
        title: "Snake",
        description: "Snake are reptile which resembles like lizards and they have the ability to go anywhere. Snakes can also climb to the high rise buildings and trees."
    }, {
        title: "Gorrila",
        description: "gorillas are stocky animals with broad chests and shoulders, large, human-like hands, and small eyes set into hairless faces .  "
    }, {
        title: "Girrafe",
        description: "A giraffe's neck is too short to reach the ground. As a result, it has to awkwardly spread its front legs or kneel to reach the ground for a drink of water."
    }, {
        title: "Turtle",
        description: "  Freshwater turtles are being kept as pets by the many people. (The most common species famous for captivity is red-eared sliders)."
    }, {
        title: "Squiral",
        description: " The squirrel family also includes groundhogs, prairie dogs, and chipmunks. There are more than 250 different animals in the family. "
    }, {
        title: "Parrot",
        description: " They’re social creatures and love hanging out with their flock.Parrots are found in tropical and subtropical regions worldwide."
    }, {
        title: "Vulture",
        description: "Vulture, any of 22 species of large carrion-eating birds that live predominantly in the tropics and subtropics, classified in the families Accipitridae."
    }, {
        title: "Peacock",
        description: "Peacocks are very beautiful birds of this world. They are mostly found in the jungle, in zoos, or in any agricultural land."
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
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", function() {
            const imageSrc = card.querySelector(".product-image").src;
            const title = card.querySelector(".card-title").textContent;
            console.log("Clicked title:", title); // Check the extracted title
            handleCardClick(imageSrc, title);
        });
    });

});