import React from "react";
import BookCard from "../../components/BookCard/BookCard";

function Home() {
  const books = [
    {
      _id: "66f132eb47aad0b49199d57f",
      name: "Aai",
      category: "social Book",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqGaDkL8rfLuLlx-Ew-VbCndW_HR2z2qE1w&s",
      author: "Sane Guruji",
      price: 150,
      description:
        "It was written by famous author and social activist Sane Guruji. Shyamchi Aai is an autobiography of Sane Guruji belonging to a Brahmin family in Konkan region of rural Maharashtra during British Raj.",
      createdAt: "2024-09-23T09:20:43.580Z",
      updatedAt: "2024-09-23T09:20:43.580Z",
      __v: 0,
    },
    {
      _id: "66f1315647aad0b49199d579",
      name: "bhagvat gita",
      category: "History",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/l3929ow0/regionalbooks",
      author: "Arjun",
      description: "bhagvat git is hindu book",
      createdAt: "2024-09-23T09:13:58.373Z",
      updatedAt: "2024-09-23T09:15:44.029Z",
      __v: 0,
      price: 120,
    },
    {
      _id: "66f11f3b4be906d8ef59398e",
      name: "Mahabharata",
      category: "History Book",
      image: "https://kapot.in/wp-content/uploads/2023/05/1625488943.webp",
      author: "pandav",
      price: 255,
      description:
        "The Mahābhārata is one of the two major Smriti texts and Sanskrit epics of ancient India revered in Hinduism, the other being the Rāmāyaṇa. It narrates the events and aftermath of the Kurukshetra War, a war of succession between two groups of princely cousins, the Kauravas and the Pāṇḍavas.",
      createdAt: "2024-09-23T07:56:43.249Z",
      updatedAt: "2024-09-23T08:40:25.585Z",
      __v: 0,
    },
  ];
  return (
    <div>
      <h1>Books</h1>
      <div className="bookcard-card-container">
        {books.map((book, i) => {
          const { _id, name, category, image, author, description, price } =
            book;
          return (
            <div>
              <BookCard
                key={i}
                _id={_id}
                name={name}
                category={category}
                image={image}
                author={author}
                price={price}
                description={description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
