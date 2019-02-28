import React from 'react';

import axios from 'axios';
import PDF from 'react-pdf-js';
import AudioPlayer from 'react-h5-audio-player';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import Errors from '../../components/forms/Errors';
import Modal from '../../components/Modal';

import pdf01 from '../../doc/G_Minor_Bach.pdf';
import pdf02 from '../../doc/Fear_Of_The_Dark.pdf';
import sound1 from '../../doc/Adele_-_Skyfall.mp3';
import sound2 from '../../doc/Fear_of_the_Dark.mp3';

class MusicList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openModal: false,
      activeItemName: '', //state property to hold item name
      activeItemId: null, //state property to hold item id
      activeItemSheet: [],
      items: [],
      loading: false,
      pdfData: [
        {
          id: 1,
          name: 'Bach',
          sheets: pdf01,
          soundUrl: sound1
        },
        {
          id: 2,
          name: 'Fear Of The Dark',
          sheets: pdf02,
          soundUrl: sound2
        }
      ],
      data: {},
      errors: {},
      password: '',
      username: ''
    };
  }

  // for pdf
  onDocumentComplete = pages => {
    this.setState({ page: 1, pages });
  };

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };

  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="previous" onClick={this.handlePrevious}>
        <a>
          <i className="fa fa-arrow-left" /> Previous
        </a>
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="previous disabled">
          <a>
            <i className="fa fa-arrow-left" /> Previous
          </a>
        </li>
      );
    }
    let nextButton = (
      <li className="next" onClick={this.handleNext}>
        <a>
          Next <i className="fa fa-arrow-right" />
        </a>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="next disabled">
          <a>
            Next <i className="fa fa-arrow-right" />
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };
  openModalWithItem(pdfItem) {
    this.setState({
      openModal: true,
      activeItemName: pdfItem.name,
      activeItemId: pdfItem.id,
      activeItemSheet: pdfItem.sheets,
      activeItemSound: pdfItem.soundUrl
    });
  }

  // save in localstorage
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('items', JSON.stringify(nextState.items));
  }
  // onChange = e =>
  //   this.setState({
  //     data: { ...this.state.data, [e.target.name]: e.target.value }
  //   });
  // onSubmit = () => {

  //   const errors = this.validate(this.state.data);
  //   this.setState({ errors });
  // };

  // validate = data => {
  //   const errors = {};

  //   if (!data.username) errors.username = 'Username Can not be blank';
  //   if (!data.password) errors.password = 'Can not be blank';
  //   return errors;
  // };
  render() {
    const { errors, data, items, pdfData, loading } = this.state;
    let pagination = null;

    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    const displaySheets =
      pdfData && pdfData.length > 0 ? (
        pdfData.map((pdfItem, index) => {
          return (
            <div key={pdfItem.name + index}>
              {pdfItem.name}
              <button onClick={() => this.openModalWithItem(pdfItem)}>
                {pdfItem.name}
              </button>
              {/* <PDF
                file={pdfItem.sheets}
                onDocumentComplete={this.onDocumentComplete}
                page={this.state.page}
              />
              {pagination}
              <AudioPlayer
                autoPlay={false}
                src={pdfItem.soundUrl}
                onPlay={e => console.log('onPlay')}
              /> */}
            </div>
          );
        })
      ) : (
        <div>null text</div>
      );

    return (
      <div>
        Music list
        {/* <Form onSubmit={this.onSubmit}>
          <Form.Field error={!!errors.username}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={data.username || ''}
              onChange={this.onChange}
            />
            {errors.username && <Errors text={errors.username} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              value={data.password || ''} 
              onChange={this.onChange}
            />
            {errors.password && <Errors text={errors.password} />}
          </Form.Field>
          <Button primary>Login</Button>
        </Form> */}
        <div className={`content ${loading}? 'is-loading': ''`} />
        <div>
          <div>
            {displaySheets}
            <div
              className={`modal-content ${
                this.state.openModal ? 'display-block' : 'display-none'
              }`}
            >
              <Modal
                itemId={this.state.activeItemId}
                itemName={this.state.activeItemName}
                itemSheet={this.state.activeItemSheet}
              >
                <object
                  width="600"
                  height="400"
                  data={this.state.activeItemSheet}
                  type="application/pdf"
                />

                {/* <PDF
               file={this.state.activeItemSheet}
               onDocumentComplete={this.onDocumentComplete}
               page={this.state.page}
             /> */}
                {/* {pagination} */}
                <AudioPlayer
                  autoPlay={false}
                  src={this.state.activeItemSound}
                  onPlay={e => console.log('onPlay')}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MusicList;
