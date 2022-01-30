import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "components/styles/scss/bootstrap.scss";
import 'components/styles/formstyles.css';

export const TodoFormModal = ({
  show,
  toggleModal,
  handleModalAddtodo
  }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [category, setCategory] = useState("Home");
  const [priority, setPriority] = useState(3);
  const [dueDate, setDueDate] = useState('');
  const [allDay, setAllDay] = useState(false);

  let todo = {
    title: title,
    description: description,
    createdDate: new Date(),
    category: category,
    priority: priority,
    dueDate: dueDate,
    allDay: allDay
  };

  const handleSubmit = () => {
    if (title.length > 0)
    {
      todo = {
        title: title,
        description: description,
        createdDate: createdDate,
        category: category,
        priority: priority,
        dueDate: dueDate,
        allDay: allDay
      };
      handleModalAddtodo(todo);
      handleInputsReset();
      toggleModal();
    };
  };

  // Reset all input fields
  const handleInputsReset = () => {
    setTitle('');
    setDescription('');
    setCreatedDate('');
    setCategory('');
    setPriority(3);
    setDueDate('');
    setAllDay(false);
  }

  return (
    <Modal show={show}>
      <Modal.Header style={{color: '#e5e5e5', background: '#5d5d5f'}}>new todo</Modal.Header>
      <Modal.Body>
        <div className="todo-list-wrapper">
          <div className="todo-list-form">
            <div className="form-wrapper" onSubmit={handleSubmit}>
              <div className="form-row">
                <fieldset>
                  <label className="form-label" htmlFor="title">Title:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)} />
                </fieldset>

                <fieldset>
                  <label className="form-label" htmlFor="description">Description:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)} />
                </fieldset>
              </div>

              <div className="form-row">
                <fieldset>
                  <label className="form-label" htmlFor="category">Category:</label>
                  <select
                    className="form-input"
                    type="text"
                    id="category"
                    name="category"
                    defaultValue={category}
                    onClick={(e) => setCategory(e.currentTarget.value)}>
                    <option value="Home">Home</option>
                    <option value=" Work"> Work</option>
                  </select>
                </fieldset>

                <fieldset>
                  <label className="form-label" htmlFor="priority">Priority:</label>
                  <select
                    className="form-input"
                    type="text"
                    id="priority"
                    name="priority"
                    defaultValue={priority}
                    onClick={(e) => setPriority(e.currentTarget.value)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button onClick={handleSubmit}
          className="btn btn-add">
          Add
        </button>
        <button onClick={toggleModal}
          className="btn btn-delete">
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};
