import React, { Component } from 'react';
import { connect } from 'react-redux';

import { search } from '../../actions';
import './Search.css';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      q: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      q: e.target.value
    });
  }

  search = (e) => {
    e.preventDefault();
    return this.props.dispatch(search(this.state.q));
  }

  render () {
    const { isFetching } = this.props;
    const { q } = this.state;
    
    return (
      <form className="youtube-search" onSubmit={this.search}>
        <input type="text" className="youtube-search__input" onChange={this.handleChange} value={q} placeholder="Search..."/>
        {isFetching ? null : <input type="submit" className="youtube-search__submit" value="&#128269;" />}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching
});

export default connect(mapStateToProps)(Search)