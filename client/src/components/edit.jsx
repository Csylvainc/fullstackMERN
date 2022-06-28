import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/toys/${params.name}`);
      const record = await response.json()
      setForm(record)

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
    }

    fetchData();

    return;
  }, [params, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedToy = {
      name: form.name,
      description: form.description,
      price: form.price,
      category: form.category,
    };
    console.log(editedToy);

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/toys/${params.name}`, {
      method: "PUT",
      body: JSON.stringify(editedToy),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Modification d'un jouet</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description: </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Prix: </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={form.price}
            onChange={(e) => updateForm({ price: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Catégorie: </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={form.category}
            onChange={(e) => updateForm({ category: e.currentTarget.value })}
          />
        </div>

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}