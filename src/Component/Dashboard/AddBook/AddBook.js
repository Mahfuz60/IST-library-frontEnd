import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBook.css";

const AddBook = () => {
  const [data, setData] = useState({});
  console.log(data);
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const getValue = (e) => {
    const getData = { ...data };
    getData[e.target.name] = e.target.value;
    setData(getData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://enigmatic-cliffs-56694.herokuapp.com/books`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.bookName,
        author: data.author,
        img: data.img,
        pdfBook: data.pdfBookLink,
        designation: data.designation,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Book is Added");
        }
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="py-5">
      <div className="form">
        <h3>Add Books</h3>

        <form onSubmit={handleSubmit} className="inputs">
          <input
            onBlur={getValue}
            type="text"
            name="bookName"
            placeholder="Book Name"
            {...register("bookName", { required: true })}
          />
          {errors.bookName && <span>Book Name is required</span>}

          <input
            type="text"
            onBlur={getValue}
            name="author"
            placeholder="Author"
            {...register("author", { required: true })}
          />
          {errors.author && <span>Author is required</span>}

          <input
            type="text"
            onBlur={getValue}
            name="img"
            placeholder="Image Link"
            {...register("img", { required: true })}
          />
          {errors.image && <span>Image URL is required</span>}
          <input
            type="text"
            onBlur={getValue}
            name="pdfBookLink"
            placeholder="pdfBook Link"
            {...register("pdfBookLink", { required: true })}
          />
          {errors.pdfBook && <span>PdfBook is required</span>}
          <input
            type="submit"
            value="Add Books"
            onClick={() => console.log("Click")}
          />
        </form>
      </div>
    </section>
  );
};

export default AddBook;
