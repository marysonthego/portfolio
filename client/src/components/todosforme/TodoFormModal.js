import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

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
  const [allDay, setAllDay] = useState(0);

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
    setAllDay(0);
  }

  return (
    <Modal show={show}>
      <Modal.Header className="modal-header">new todo</Modal.Header>
      <Modal.Body>
          <div className="list-form-modal">
            <div className="list-wrapper-modal" onSubmit={handleSubmit}>
              <div className="form-row">
                <fieldset >
                  <label className="form-label-modal" htmlFor="title">Title:</label>
                  <input
                    className="form-input-modal"
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)} />
                </fieldset>

                <fieldset className="fieldset-modal">
                  <label className="form-label-modal" htmlFor="description">Description:</label>
                  <input
                    className="form-input-modal"
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)} />
                </fieldset>
              </div>

              <div className="form-row">
                <fieldset>
                  <label className="form-label-modal" htmlFor="category">Category:</label>
                  <select
                    className="form-input-modal"
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
                  <label className="form-label-modal" htmlFor="priority">Priority:</label>
                  <select
                    className="form-input-modal"
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
      </Modal.Body>

      <Modal.Footer>
        <button onClick={handleSubmit}
          className="btn btn-primary">
          Add
        </button>
        <button onClick={toggleModal}
          className="btn btn-primary">
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};
