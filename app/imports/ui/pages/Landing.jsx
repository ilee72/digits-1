import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='img-background'>
          <Grid center stackable columns='3' container>

            <Grid.Column textAlign='center'>
              <Icon inverted color='white' name='users' size='massive' />
              <h1>
                Multiple Users
              </h1>
              <h3>
                This address book enables any number of users to register and save their business contacts.
                You can only see the contacts you have created.
              </h3>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted color='white' name='file' size='massive' />
              <h1>
                Contact Details
              </h1>
              <h3>
                For each contact, you can save their name, address, and phone number.
              </h3>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted color='white' name='calendar check' size='massive' />
              <h1>
                Timestamped Notes
              </h1>
              <h3>
                Each time you make contact with a contact, you can write a note that summarizes the conversation.
                This note is saved along with a timestamp with the contact.
              </h3>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
