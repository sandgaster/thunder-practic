const users = [
    {
        name: "Rahul",
        age: 22,
        photo: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Priya",
        age: 24,
        photo: "https://i.pravatar.cc/150?img=47"
    },
    {
        name: "Aman",
        age: 21,
        photo: "https://i.pravatar.cc/150?img=13"
    },
    {
        name: "Sneha",
        age: 23,
        photo: "https://i.pravatar.cc/150?img=44"
    },
    {
        name: "Vikash",
        age: 25,
        photo: "https://i.pravatar.cc/150?img=14"
    }
];


const divelement = document.getElementById("div");



    // Empty fragment create
    const fragment = document.createDocumentFragment();

    for (let item of users) {

        // User card create
        const card = document.createElement("div");

        const name1 = document.createElement("h3");
        const age1 = document.createElement("p");
        const img1 = document.createElement("img");

        // Data add
        name1.innerText = item.name;
        age1.innerText = item.age;
        img1.src = item.photo;

        // Image styling
        img1.width = 100;

        // Elements card ke andar add
        card.append(name1, age1, img1);

        // Card fragment mein add
        fragment.append(card);
    }

    // Ek baar mein main DOM mein add
    divelement.append(fragment);



