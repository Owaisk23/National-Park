// Sample data for product titles and descriptions
const products = [
    {
        title: "Fox",
        description: "Foxes are found in all continents of the world except Antarctica.Fox’s skin is generally reddish in colour but some foxes have brown skin"
    },
    {
        title: "White Tiger",
        description: "White tigers are a rare subspecies, and it’s believed that a white tiger hasn’t been seen in the wild for around 50 years, making them endangered."
    },
    {
        title: "White Lion",
        description: " Let’s dive into some white lion facts that are specifically female white lion facts! We can begin by talking about size!"
    },
    {
        title: "Polar Bear",
        description: "Polar bears are found in the frozen wilds of the Arctic, in Canada, Alaska (US), Greenland, Russia and Norway.  "
    },
    {
        title: "Deer",
        description: " Deer is an animal that is very attractive in appearance.  The average lifespan of a deer is about 10-20 years."
    },
    {
        title: "Zebra",
        description: "   Zebras are one of the most peculiar species due to the presence of black and white stripes on their back.  Lifespan of Zebra varies between 20 to 30 years."
    }, {
        title: "Penguin",
        description: "  Penguins are the birds which are especially found in cold regions of Antarctic islands. The word or name ‘penguin’ is derived from two words.        "
    }, {
        title: "12 Horn Deer",
        description: "Deer is an animal that is very attractive in appearance.  The average lifespan of a deer is about 10-20 years.Deer is an animal that is very attractive in appearance.  The average lifespan of a deer is about 10-20 years."
    }, {
        title: "Porcupine",
        description: "The porcupine is the prickliest of rodents, though its Latin name means “quill pig.”."
    }, {
        title: "Chimpanzee",
        description: " Chimpanzees are the animals belonging to the category of “Pan” with presence in all across the globe except Antarctica."
    }, {
        title: "Turtle",
        description: " Freshwater turtles are being kept as pets by the many people. (The most common species famous for captivity is red-eared sliders)."
    }, {
        title: "Puma",
        description: " Mountain lion, puma, cougar, panther—this cat is known by more names than just about any other mammal!"
    }, {
        title: "Cheetah",
        description: "Uniquely adapted for speed, the cheetah is capable of reaching speeds greater than 110 kilometers per hour in just over three seconds."
    }, {
        title: "White Horse",
        description: "Horses are magnificent animals domesticated by humankind for thousands of years. "
    }, {
        title: "Panda",
        description: "  It fills its stomach by eating grasses and leaves."
    }, {
        title: "Wood Stork",
        description: " Wood storks are tall, white denizens of freshwater or brackish wetlands and swamps. They can be identified by their long legs, featherless heads, and prominent bills."
    }, {
        title: "Jaguar",
        description: " Jaguars are the largest of South America's big cats and the third largest cats in the world."
    }, {
        title: "Horn Bill",
        description: " Improve core stability and balance with this gym ball. Use it for a wide range of exercises that engage your muscles and enhance flexibility."
    }, {
        title: "Squiral",
        description: " The squirrel family also includes groundhogs, prairie dogs, and chipmunks. There are more than 250 different animals in the family. "
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
