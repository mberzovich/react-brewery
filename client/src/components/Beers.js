import React, { Component } from 'react'
import { Header, Segment, Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
import pic from '../images/funny-cat.jpg';


class Beers extends Component {
    state = { beers: [] }

    componentDidMount() {
      axios.get('http://localhost:3000/api/all_beers')
      .then(res => {
      this.setState({ beers: res.data.entries })
    })
  }

  displayBeers = () => (
   this.state.beers.map( beer => {
      return(
          <Card Link >
            <Image src={beer.labels? beer.labels.icon : pic} />
            <Card.Content>
              <Card.Header>
                {beer.name}
              </Card.Header>
              <Card.Description>
                {beer.description}
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
            <Card.Group stackable textAlign='center' itemsPerRow={3}>
              { this.displayBeers() }
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



export default Beers;
