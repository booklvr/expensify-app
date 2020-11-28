import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  dispatch,
  history,
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

// connects state to props object in expense list from redux

export default ExpenseListItem;
