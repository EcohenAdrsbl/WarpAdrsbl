/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {

  return c.res({
    action: '/second',
    image : 'http://localhost:3000/Cover.jpg',
    intents: [
      <Button>Next</Button>,
      <Button.Link href = 'https://www.addressable.io/about'>About Us!</Button.Link>
    ],
  })
})

app.frame('/second', (c) => {
  return c.res({
    action: '/third',
    image: 'http://localhost:3000/Web3GrowthPlatform.png',
    intents: [
      <Button 
      action = "/"
      value = "Back"
      >

      Back</Button>,
      <Button.Link href = 'https://www.addressable.io/blog'>Web3 Growth!</Button.Link>,

      <Button
      action = "/third"
      value = "Next"
      >Next</Button>

  
    ],
  })
})

app.frame('/third', (c) => {

  return c.res({
    
    
    image: 'http://localhost:3000/Case_study.png',
    intents: [
      <Button.Link href = 'https://www.addressable.io/case-studies' >Real World Case Studies!</Button.Link>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
