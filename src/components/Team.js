import React, { Component } from 'react';
import Card from './Card';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=4&count=6')
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.users,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <p>
          Error
          {error.message}
        </p>
      );
    }

    if (!isLoaded) {
      return <p>Loading..</p>;
    }

    return (
      <div className="team">
        <h1>Working with GET request</h1>
        <div className="cards-wrapper">
          {items.map((item) => (
            <Card
              key={item.id}
              photo={item.photo}
              name={item.name}
              position={item.position}
              phone={item.phone}
              email={item.email}
            />
          ))}
        </div>
        <button type="button" className="Team-btn">Show more</button>
      </div>
    );
  }
}
export default Team;
