const stock = {
    pencil: {
        name: 'natraj',
        type: ['HB', '2H', 'H'],
        rate: [3, 5, 5],
        available_stock: 250
    },
    note_book: {
        name: 'class mate',
        type: ['long size', 'king size'],
        rate: [35, 20],
        available_stock: 500
    }
};
const newObject = {
    rateUpdated: [6, 10],
    typeUpdated: ['small size', 'ruled', 'un ruled']
};
const { pencil, note_book } = stock;
const { rate } = pencil;
const { type } = note_book;
const { rateUpdated, typeUpdated } = newObject;
const pencilRate = [...rate, ...rateUpdated];
const notebookType = [...type, ...typeUpdated];
const newPencil = { ...pencil, rate: pencilRate };
const newNotebook = { ...note_book, type: notebookType };
const updatedStock = { newPencil, newNotebook };
console.log(updatedStock);