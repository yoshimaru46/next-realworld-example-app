import React from "react";

const ListErrors = ({ errors }) => {
  if (!errors || errors.length === 0) return null;
  return (
    <ul className="error-messages">
      {Object.keys(errors).map((key) => {
        return (
          <li key={key}>
            {key} {errors[key]}
          </li>
        );
      })}
    </ul>
  );
};

export default ListErrors;
