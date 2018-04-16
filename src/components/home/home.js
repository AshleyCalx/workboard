import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, List, Menu, Segment } from 'semantic-ui-react'
import { height } from 'window-size';
//import desk from './components/boxes.png'

//style={{ background:'cover', position:'50%' }}
//const desk = '/desk.jpg'

const Home = () => (
  <React.Fragment>
    <Container text style={{ marginTop: '7em', position:"relative" }}>
    {/*<img src={desk} alt="Desk" style={{position:'relative'}} />*/}
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      {/*<Image src={'/images/boxes.png'} >*/}
      <div className="boxContent" stle={{position:"absolute"}}>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts.</p>
      </div>
    </Container>
  </React.Fragment>
)

export default Home