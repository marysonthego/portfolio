import React from 'react';

export const todoRow = (props) => (
  <tr className="table-row">
    <td className="table-todo">
      {props.position}
    </td>
    <td className="table-todo">
      {props.todo.title}
    </td>
    <td className="table-todo">
      {props.todo.description}
    </td>
    <td className="table-todo">
      {props.todo.createdDate}
    </td>
    <td className="table-todo">
      {props.todo.category}
    </td>
    <td className="table-todo">
      {props.todo.priority}
    </td>
    <td className="table-todo">
      {props.todo.dueDate}
    </td>
    <td className="table-todo">
      {props.todo.allDay}
    </td>
    <td className="table-todo">
      <button
        className="btn btn-remove"
        onClick={() => props.todoDelete(props.todo.id, props.todo.title)}>
        Delete
      </button>
    </td>
  </tr> );
