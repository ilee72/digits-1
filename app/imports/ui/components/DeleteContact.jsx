import React from 'react';
import Contacts from '/imports/api/contact/contact';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders the Page for adding a document. */
class DeleteContact extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    const contact = this.props;
    Contacts.remove(contact._id, this.deleteCallback);
  }
}


export default DeleteContact;
