import React from "react";
import FilterButton from "./FilterButton";



function handleSubmit(e) {
    e.preventDefault();
    alert('Handling form submission');
}

function Form(props) {
    return (
        <form  onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Report any incidence here
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <FilterButton onClick={() => alert('Hi')}/>
      </form>
    );
};

export default Form;