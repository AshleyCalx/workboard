import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import HeaderBar from '../components/header/header'
import Footer from '../components/footer/footer'

const FixedMenuLayout = () => (
  <div>
    <HeaderBar/>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>A text container is used for the main container, which is useful for single column layouts.</p>

      <Image src='/assets/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>

    <Footer/>
  </div>
)

export default FixedMenuLayout