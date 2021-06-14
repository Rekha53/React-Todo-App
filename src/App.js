import { Component } from "react";
import "./App.css";
// create CLASS base component
class App extends Component {
  // first run constructor after component creation
  constructor(props) {
    // add to access properties and method of this component from another component
    super(props);
    // state object
    this.state = {
      newItem: "",
      list: [],
      addedItem: false,
    };
  }
  // to assign a unique id to each todo
  idItem = 0;
  // method of app (class based component)
  addItem() {
    this.idItem += 1;
    const newItem = {
      id: this.idItem,
      value: this.state.newItem,
    };
    const list = [...this.state.list];

    list.push(newItem);
    // to update state property values
    this.setState({
      list,
      newItem: "",
      addedItem: true,
    });
    console.log(list);
  }
  // to change value of state using setState(Key-new item)
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="todo-app-content">
            <h1 className="app-title text-center">TODO APP</h1>
            <div className="input-wrapper">
              <input
                type="text"
                className="input-field"
                placeholder="Add Todo..."
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
              />
              <div className="btn-wrapper">
                <button
                  className="add-btn"
                  onClick={() => this.addItem()}
                  disabled={!this.state.newItem.length}
                >
                  Add Todo
                </button>
              </div>
            </div>
          </div>
          <div className="all-card-wrapper">
            <h4 className="all-task">
              {this.state.addedItem ? "List of all Todo's" : ""}
            </h4>
            <div className="row">
              {this.state.list.map((item) => {
                return (
                  <div
                    className="col-xl-3 p-2 col-md-4 col-sm-12 text-center "
                    key={item.id}
                  >
                    <div className="each-card">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
