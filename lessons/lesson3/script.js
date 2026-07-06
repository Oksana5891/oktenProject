let blocks = [
    {id: 1, title: "Welcome to my website."},
    {id: 2, title: "earning JavaScript is fun."},
    {id: 3, title: "This is the second block."},
    {id: 4, title: "Practice makes perfect."},
    {id: 5, title: "Every day is a new opportunity."},
    {id: 6, title: "Keep your code clean and simple"},
    {id: 7, title: "Web development is an exciting journey."},
    {id: 8, title: "Never stop learning new skills."},
    {id: 9, title: "Success comes with consistency."},
    {id: 10, title: "Have a great day and happy coding!"}
]

// for (let xxx of blocks) {
//     console.log(xxx)
// }

// for (let i = 0; i < blocks.length; i++) {
//     console.log(i)
// }

for (let xxx of blocks) {
    document.write(`<div class="block-class"> <h4>${xxx.title}</h4></div>`)
}