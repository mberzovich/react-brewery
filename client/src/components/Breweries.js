import React, { Component } from 'react'
import { Header, Segment, Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
import pic from '../images/funny-cat.jpg';


class Breweries extends Component {
    state = { breweries: [], hasMore: true }

    componentDidMount() {
      axios.get('http://localhost:3000/api/all_breweries')
      .then(res => {
      this.setState({ breweries: res.data.entries })
    })
  }

  displayBreweries = () => (
   this.state.breweries.map( brewery => {
      return(
          <Card Link >
            <Image src={brewery.images? brewery.images.large : pic} />
            <Card.Content>
              <Card.Header>
                {brewery.name}
              </Card.Header>
              <Card.Description>
                {brewery.description}
              </Card.Description>
            </Card.Content>
          </Card>
        )
    })
  )

  render() {

    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Beers</Header>
            <Card.Group stackable textAlign='center' itemsPerRow={5}>
              { this.displayBreweries() }
            </Card.Group>
      </Segment>

      )
}
}
const styles = {
  background: {
    backgroundColor: 'cadetblue',
  },
}



export default Breweries;
