

function choice(items) {
    let rand = Math.floor(Math.random() * items.length);

    return items[rand];
}

function remove(items, item) {

    const result = items.filter(i => i === item);
    if (result) {
        items.splice(items.indexOf(result), 1);
        return result[0];
    }
    return undefined;

};



export { choice, remove };