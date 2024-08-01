import express from 'express'
import Book from "path"

const app = express();
app.use(express.json())

const books = [
    {
        "id": 196,
        "name": "bhagvat gita",
        "category": "History",
        "image": "https://rukminim2.flixcart.com/image/850/1000/l3929ow0/regionalbooks/b/a/f/shreemad-bhagwat-geeta-original-imageeufsk4ds57y.jpeg?q=90&crop=false",
        "description": "All the verses of the Bhagavad Gita are accurately translated from the original Sanskrit texts. The translations are presented in their authentic form, free from any sectarian bias. The translations are kept simple without sacrificing accuracy, essence, and spirit."
    },
    {
        "id": 581,
        "name": "The Black Bird Oracle",
        "category": "History",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39iNAhwv7QkpUN4lZPOvpPhrAVL-5caZXSQ&s",
        "description": "THE BLACK BIRD ORACLE, which publishes on July 16, 2024, is the fifth book in the series."
    },
    {
        "id": 324,
        "name": "Mahabharata",
        "category": "History",
        "image": "https://m.media-amazon.com/images/I/81bFUI2Sd4L._AC_UF350,350_QL80_.jpg",
        "description": "Mahaprasthanika Parva (Sanskrit: महाप्रस्थानिक पर्व), or the 'Book of the Great Journey', is the seventeenth of eighteen books of the Indian epic Mahabharata. It traditionally has three chapters, as does the critical edition. It is the shortest book in the epic"
    },
    {
        "id": 434,
        "name": "Ramayana",
        "category": "History",
        "image": "https://images.herzindagi.info/image/2023/Dec/Valmiki-Ramayana-Hindi.jpg",
        "description": "The oldest version is generally recognized to be the Sanskrit version attributed to the sage Narada, the Mula Ramayana. Narada passed on the knowledge to Valmiki, who authored Valmiki Ramayana, the present oldest available version of Ramayana"
    }

]


app.post("/book", (req, res) => {
    const {
        name,
        category,
        image,
        description
    } = req.body

    const randomId = Math.round(Math.random() * 1000);

    const newBook = {
        id: randomId,
        name: name,
        category: category,
        image: image,
        description: description
    }
    books.push(newBook)

    res.json({
        success: true,
        data: newBook,
        message: "New Book Added succesfully"
    })
})

app.get("/books", (req, res) => {
    res.json({
        success: true,
        data: books,
        message: `All Books show in successfully `
    })
})

app.get("/book/:id", (req, res) => {
    const { id } = req.params

    const book = books.find((b) => b.id == id)

    res.json({
        success: book ? true : false,
        data: book || null,
        message: book ? "Book is shown in successfull" : "Book is not found"
    })
})

app.put("/book/:id", (req, res) => {
    const {
        name,
        category,
        image,
        description
    } = req.body

    const { id } = req.params

    let index = -1

    books.forEach((book, i) => {
        if (book.id == id) {
            index = i
        }
    })

    const newbookOject = {
        name,
        category,
        image,
        description
    }
    if (index == -1) {
        return res.json({
            success: false,
            message: `Book not found for id ${id}`,
            data: null
        })
    }
    else {
        books[index] = newbookOject

        res.json({
            success: true,
            message: "book updated successfull",
            data: newbookOject,
        })
    }


})

app.delete("/book/:id", (req, res) => {
    const { id } = req.params

    const book = Book.deleteOne({ id: id })

    res.json({
        success: true,
        message: "Book Remove Successfully",
        data: book
    })
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
})





