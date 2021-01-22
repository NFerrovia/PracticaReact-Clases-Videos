import React from 'react';
import App from './App';

class SearchBar extends React.Component {
  state = { term: '' };

  // evento que maneja el ingreso de un nuevo término de busqueda y actualiza el State con el mismo.

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div
        className="search-bar ui segment"
        style={{ backgroundColor: 'lavender' }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Ingrese un término de busqueda</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
