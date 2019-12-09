import React from 'react';
import Assets from '../assets';
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

console.log('Assets');
console.log(Assets);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
            <Heading size={1} fit caps>Communicating With Postman</Heading>
        </Slide>

        <Slide>
            <Layout>
                <Fill>
                    <Image src={Assets.images.profilePic} width={500}/>
                </Fill>
                <Fill>
                    <Heading size={4}>Eric Credeur</Heading>
                    <Text style='padding-top: 50px;' textColor="secondary">Senior Product Dev</Text>
                    <Text textColor="tertiary">Online Shopper</Text>
                </Fill>
            </Layout>
        </Slide>
        
        <Slide>
            <Heading size={6}>Best way to improve developer efficiency is to teach them to <span style={{"text-transform": "uppercase"}}>communicate</span>!</Heading>
            <Notes>
                <li>I firmly believe this to be true</li>
                <li>If any of you know me, then you'll know that I like to "document all the things"</li>
                <li>Technical skills come easily and are inherent in what a dev does</li>
                <li>So, with that in mind, I'd say that my official title is: Communication Ambassador for all Developer-kind #slide #joke </li>
                <li>With that in mind, I needed to find tools that would allow for better communication.</li>
            </Notes>
        </Slide>

        <Slide>
            <Image src={Assets.images.postmanLogo} width={600}/>
            <Notes>
                <li>And . . . Postman is one of those tools</li>
                <li>Before we get into the details, let me breifly share with you how I came understand the power of Postman</li>
            </Notes>
        </Slide>

	<CodeSlide bgColor='tertiary'
	    transition={[]}
	    lang="js"
	    ranges={[
		{"loc": [0,1], "title": "cURL"},
		{"loc": [1,3],},
		{"loc": [3,7],},
		{"loc": [7,13],}
	    ]}
	    showLineNumbers={false}
	    code={Assets.code.curlExample}
	>
	    <Notes>
                <li>The tool for TRUE CLI junkies</li>
                <li>Works great at first</li>
                <li>Then you decide to make a POST request</li>
                <li>Then you need some headers</li>
                <li>Then a request body</li>
                <li>Oh, and don't forget the silence options</li>
                <li>Then there's formatting</li>
            </Notes>
	</CodeSlide>

        <Slide>
            <Image src={Assets.screenShots.postman.empty} width={1443}/>
            <Notes>
                <li>I created some requests, saving them here and there and that's where I stayed for a long, long time</li>
            </Notes>
        </Slide>


        <Slide>
            <Image src={Assets.screenShots.postman.envVars} width={1443}/>
            <Notes>
                <li>Somehow I was bestowed with the wisdom of environment variables</li>
                <li>Then, one day I chose to write a test . . . because, ya know, I got tired of clicking</li>
            </Notes>
        </Slide>

	
        <Slide>
            <Image src={Assets.images.jmeterLogo} width={1443}/>
            <Notes>
		<li>Proved to be overkill</li>
		<li>Worked wonderfully for multi-host</li>
		<li>Key: Showed the true power of running tests</li>
		<li>Then, I was asked to do a code challenge and that's where I discovered the documentation capabilities of Postman</li>
            </Notes>
        </Slide>

        <Slide>
            <Image src={Assets.screenShots.postman.callouts.viewInWeb} width={1443}/>
            <Notes>
	       <li>It made it really easy to show the API</li>
	       <li>Looked just like my favorite Stripe, which is my favorite documentation example</li>
	       <li>Allowed me to type in Markdown, which . . . everyone loves (except Atlassian)</li>
	       <li>But, that's where the wheels started to fall off for me</li>
	       <li>There were so many options that I couldn't figure out what I should put where </li>
            </Notes>
        </Slide>

	<Slide>
	    <Image src={Assets.images.postconDoor} width={500}/>
            <Notes>
	       <li>So, I hopped on a plane to learn something new</li>
	       <li>Two days, fours hours later </li>
	       <li>I learned a "design pattern"</li>
	       <li>Is there a better way to wrangle power and complexity than with a design pattern? #joke</li>
            </Notes>
        </Slide>


        <Slide>
	    <Heading size={6}>Blueprints</Heading>
	    <Heading>&</Heading>
	    <Heading size={6}>Contracts</Heading>
            <Notes>
	       <li>Contracts AND Blueprints</li>
	       <li>They work together to transition an API from concept into reality</li>
            </Notes>
        </Slide>


        <Slide>
	    <Heading>Blueprints</Heading>
	    <List>
	    	<ListItem>Definition, definition, definition</ListItem>
		<ListItem>Collaboration</ListItem>
		<ListItem>Single source of truth</ListItem>
		<ListItem>Pencil & Paper</ListItem>
	    </List>
            <Notes>
	    	<li>Define how the service will behave</li>
		<li>What does the request body look like</li>
		<li>What headers are we expecting</li>
		<li>What headers are returned</li>
		<li>What does the response body look like</li>
		<li>Document all the things</li>
		<li>-- Purpose</li>
		<li>-- Intended audience</li>
		<li>-- Additional context</li>
		<li>Response examples (all of them!)</li>
		<li>-- Success</li>
		<li>-- Failure</li>
		<li>-- Edge cases</li>
		<li>-- Alternatives</li>
		<li>#joke Because no one has ever written the same endpoint twice</li>
            </Notes>
        </Slide>

        <Slide>
	    <Heading>Contracts</Heading>
	    <List>
	    	<ListItem>Validation</ListItem>
		<ListItem>Consistency</ListItem>
		<ListItem>Test BEFORE creation</ListItem>
	    </List>
            <Notes>
	    	<li>Stick to the design</li>
	    	<li>Make all the assertions</li>
	    	<li>Are the response codes correct</li>
		<li>Did the body have the correct response</li>
		<li>-- Headers</li>
		<li>-- Data</li>
		<li>-- Length</li>
		<li>Did it fulfill the request in a reasonable timeframe</li>
		<li>Do the response fields match their expected type</li>
		<li>Did the request perform the intended modification of the ___ object</li>
		<li>-- Yes, that means you can have contracts that actually use the API to validate an object's state</li>
		<li>Did  the endpoint fail gracefully</li>
		<li>What happens when we encounter that wonky edge case</li>
		<li>Basically, did you live up to the expectations you set forth in the blueprint you defined previously</li>
		<li>-- it also helps you validate all of your design assumptions</li>
		<li>-- #joke Oh ya, now I remember why we needed that other endpoint!?!</li>
	    </Notes>
        </Slide>

        <Slide>
	    <Heading size={6}>Blueprints</Heading>
	    <Heading>&</Heading>
	    <Heading size={6}>Contracts</Heading>
            <Notes>
	       <li>Together, these two components form a **very clear** picture of what the API will do and how it will behave</li>
	       <li>no more re-programming on either the front, or backend because of a misunderstanding</li>
	       <li>all documentation is now clear as day and has been tested for validity</li>
	       <li>#joke And, the best part, no more Slack questions about things already discussed in design meetings</li>
            </Notes>
        </Slide>


        <Slide>
	    <Heading size={2}>Demo Time</Heading>
            <Notes>
	       <li>Not an exhaustive example, just intended to give you some context</li>
            </Notes>
        </Slide>


	<Slide>
	    <Heading>Create Workspace</Heading>
            <Image src={Assets.screenShots.postman.setup.addWorkspace} width={1443}/>
            <Notes>
            </Notes>
        </Slide>

	<Slide>
	    <Heading>Create Collection</Heading>
            <Image src={Assets.screenShots.postman.setup.addCollection} width={1443}/>
            <Notes>
	    	<li>Notice the tag, that's not special, it's just there for visibility</li>
            </Notes>
        </Slide>

	<Slide>
	    <Heading>Create Request</Heading>
            <Image src={Assets.screenShots.postman.setup.addRequest} width={1443}/>
            <Notes>
            </Notes>
        </Slide>

	
	<Slide>
	    <Heading>Add Header</Heading>
            <Image src={Assets.screenShots.postman.setup.addHeader} width={1443}/>
            <Notes>
            </Notes>
        </Slide>

	<Slide>
	    <Heading>Add Example</Heading>
            <Image src={Assets.screenShots.postman.setup.addExample} width={1443}/>
            <Notes>
	         <li>This is where the true power of creating a blueprint comes into play</li>
            </Notes>
        </Slide>

	<Slide>
	    <Heading>Mock Server</Heading>
            <Notes>
	         <li>Before we can write our contract we need something to test against and that's where the mocking service comes into play</li>
            </Notes>
        </Slide>

	<Slide>
	    <Heading>Create Mock</Heading>
            <Image src={Assets.screenShots.postman.mocking.createServer} width={1443}/>
            <Notes>
	         <li>It's offered by Postman and uses the examples we created as part of the blueprint</li>
            </Notes>
        </Slide>

	<Slide>
	    <Heading>Mocks List</Heading>
            <Image src={Assets.screenShots.postman.mocking.mocksList} width={1443}/>
            <Notes>
	         <li>You have to hover to see the URL</li>
            </Notes>
        </Slide>

	
	<Slide>
	    <Heading>Contracts</Heading>
            <Notes>
	         <li>Now that everyone agrees on the design and we have a working endpoint to interact with, it's time to test it so we know that our design makes sense</li>
            </Notes>
        </Slide>


	<Slide>
	    <Heading>Create Collection</Heading>
            <Image src={Assets.screenShots.postman.contracts.createCollection} width={1443}/>
            <Notes>
	         <li>Again, we're tagging the collection to keep our collections organized</li>
	     </Notes>
        </Slide>

	<Slide>
	    <Heading>Create Request</Heading>
            <Image src={Assets.screenShots.postman.contracts.createRequest} width={1443}/>
            <Notes>
	         <li></li>
	     </Notes>
        </Slide>


	<Slide>
	    <Heading>Add Tests</Heading>
            <Image src={Assets.screenShots.postman.contracts.addTests} width={1443}/>
            <Notes>
	         <li></li>
	     </Notes>
        </Slide>

	<Slide>
	    <Heading>Test Results</Heading>
            <Image src={Assets.screenShots.postman.contracts.testSuccess} width={1443}/>
            <Notes>
	         <li></li>
	     </Notes>
        </Slide>

	<Slide>
	    <Heading>Testing</Heading>
	    <List>
	    	<ListItem>Scripts everywhere</ListItem>
	    	<ListItem>Variables</ListItem>
	    	<ListItem>Dynamic Data</ListItem>
	    	<ListItem>Assertions</ListItem>
	    </List>
            <Notes>
	         <li>Link to faker library: https://learning.getpostman.com/docs/postman/scripts/postman-sandbox-api-reference/#dynamic-variables</li>
	     </Notes>
        </Slide>

	<CodeSlide bgColor="tertiary"
	    transition={[]}
	    lang="js"
	    ranges={[
		{"loc": [0,3], "title": "Assertions"},
		{"loc": [4,9], "note": "Chai Assertions"},
		{"loc": [10,14]}
	    ]}
	    code={Assets.code.postmanTestExample}
	/>

	<CodeSlide bgColor="tertiary"
	    transition={[]}
	    lang="js"
	    ranges={[
		{"loc": [0,1], "title": "Flow Control"},
		{"loc": [2,5]},
		{"loc": [6,9]}
	    ]}
	    code={Assets.code.changeSettleExample}
	/>

        <Slide>
	    <Heading>Code Time</Heading>
	    <List>
	    	<ListItem>Client Side Development</ListItem>
	    	<ListItem>Server Side Development</ListItem>
	    	<ListItem>Release Testing</ListItem>
	    </List>
            <Notes>
	       <li>See Outline</li>
            </Notes>
        </Slide>

        <Slide>
	    <Heading>Benefits</Heading>
	    <List>
	    	<ListItem>Rapid prototying</ListItem>
		<ListItem>Validation of the endpoint</ListItem>
		<ListItem>Reduces rework</ListItem>
		<ListItem>Single source of truth</ListItem>
	    </List>
            <Notes>
		<li>"this is how it changed the way I work"</li>
		<li>pencil and paper</li>
	       <li>See Outline</li>
            </Notes>
        </Slide>

        <Slide>
	    <Heading size={6} textColor="tertiary">Twitter</Heading>
	    <Heading size={5}> @eric321</Heading>
	    <Heading size={6} style="padding-top: 70px" textColor="tertiary">Github</Heading>
	    <Heading size={5} >proff321/comm-with-postman</Heading>
        </Slide>
      </Deck>
    );
  }
}
