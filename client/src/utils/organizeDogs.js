

export default function organizeDogs(filter, dogs) {
    dogs.sort((a, b) => {if (a.k9name > b.k9name) {return 1;
    }
    return 0;
});

    const organizedDogs = [];

    for (let i = 0; i < dogs.length; i+= 1)
        if (filter) {
            {
                const dogName = dogs[i].k9name.toLowerCase();
                if (dogName.includes(filter.trim().toLowerCase())) {
                    organizedDogs.push(dogs[i]);
                }
            }
        } else if (!filter) {
            organizedDogs.push(dogs[i]);
        }
        return organizedDogs.slice(0, 20);

}