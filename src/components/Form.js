import React from "react";
import { Form } from "react-bootstrap";
import FilterButton from "./FilterButton";

function Form() {
    return (
        <form>
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
        <FilterButton />
      </form>
    );
};

export default Form;