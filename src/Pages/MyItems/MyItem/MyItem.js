import React from "react";

const MyItem = (props) => {
  const { _id, name, author, publisher, isbn, pages, quantity, price } =
    props.data;
  const handleDelete = props.button;
  return (
    <tr className="hover">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{name}</td>
      <td>{author}</td>
      <td>{publisher}</td>
      <td>{isbn}</td>
      <td>{pages}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleDelete(_id)}>
          <lord-icon
            src="https://cdn.lordicon.com/rivoakkk.json"
            trigger="click"
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </button>
      </td>
    </tr>
  );
};

export default MyItem;
