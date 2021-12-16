import React from "react";
import { useForm } from "react-hook-form";
import "./AddBook.css";
//  import useAuth from "../../hooks/useAuth";

const AddBook = (data) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const { user } = useAuth();
  const onSubmit = (data) => {
    // console.log("Click");
    const url = `https://enigmatic-cliffs-56694.herokuapp.com//books`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          alert("Book is added successfully.");
          reset();
        }
      });
    // console.log(data);
  };

  return (
    <section className="py-5">
      <div className="form">
        <h3>Add Books</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="inputs">
          <input
            type="text"
            placeholder="Department Name"
            {...register("dept", { required: true })}
          />
          {/* {errors.dept && <span>Department Name is required</span>} */}

          <input
            type="text"
            placeholder="Book Name"
            {...register("bookName", { required: true })}
          />
          {/* {errors.bookName && <span>Book Name is required</span>} */}

          <input
            type="text"
            placeholder="Author"
            {...register("author", { required: true })}
          />
          {/* {errors.author && <span>Author is required</span>} */}

          <input
            type="text"
            placeholder="Image Link"
            {...register("image", { required: true })}
          />
          {/* {errors.image && <span>Image URL is required</span>} */}

          <input
            type="text"
            placeholder="pdfBook Link"
            {...register("pdfBook", { required: true })}
          />
          {/* {errors.pdfBook && <span>PdfBook is required</span>} */}

          <input type="submit" value="Add Books" />
        </form>
      </div>
    </section>
  );
};

export default AddBook;
