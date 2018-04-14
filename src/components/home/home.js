import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'


{/*const src1 = '/src/public/img/desk.png'*/}


const Home = () => (
  <React.Fragment>
    <Container text style={{ marginTop: '7em' }}>
    <Image src="https://unsplash.com/photos/bKjHgo_Lbpo" />
     
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>A text container is used for the main container, which is useful for single column layouts.</p>
    </Container>
  </React.Fragment>
)

export default Home

