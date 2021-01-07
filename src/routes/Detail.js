import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (!location.state) {
      return null;
    }
    return (
      <div className="detail">
        <div className="detail__image">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
        </div>
        <h1>{location.state.title}</h1>
        <span>{location.state.genres}</span>
        <span>{location.state.year}</span>
        <p>{location.state.summary}</p>
      </div>
    );
  }
}

export default Detail;
