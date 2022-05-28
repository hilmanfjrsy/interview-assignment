import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ButtonIcon from "./ButtonIcon";

export default function TodoList({ tasks, deleteData }) {
  return (
    <li className="list-group-item">{tasks}&nbsp;&nbsp;&nbsp;
      <ButtonIcon
        type='outline-danger'
        icon={faTrash}
        onClick={() => { deleteData() }}
      />
    </li>
  );
}
