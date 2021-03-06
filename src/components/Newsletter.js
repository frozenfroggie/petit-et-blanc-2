import React, { Component } from 'react';
import styled from "styled-components"
import { FaTimes } from 'react-icons/fa';
import { FacebookProvider, Group } from 'react-facebook';

// @include breakpoint(phoneHorizontal) {
//   width: 500px;
//   height: 330px;
// }

const NewsletterModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  .newsletter {
    position: relative;
    width: 344px;
    height: 530px;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: center;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
    padding: 20px;
    color: #339933;
    z-index: 0;
    span {
      font-weight: 600;
      font-size: 1.3em;
      letter-spacing: 1.1px;
      padding: 2px;
    }
    .discount {
      margin-bottom: 25px;
    }
    .email-container {
      display: flex;
      flex-direction: column;
      margin-top: 25px;
      label {
        text-indent: 4px;
      }
    }
    .caption {
      position: absolute;
      bottom: 10px;
      font-size: .8em;
    }
    .close-container {
      position: absolute;
      top: 3%;
      right: 3%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      color: #339933;
      &:hover {
        cursor: pointer;
        color: #99cc66;
      }
    }
    h2 {
      font-size: 1.6em;
      text-align: center;
      font-weight: 300;
      color: #339933;
      margin-top: 10px;
    }
    ul {
      padding-left: 0px;
      margin-top: -10px;
      list-style-type: none;
      li {
        line-height: 1.4em;
      }
    }
  }
`

const FacebookContainer = styled.div`
  min-height: 300px;
`

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoading: false,
      errorMessage: ''
    };
  }
  render() {
    return (
      <NewsletterModal style={this.props.isNewsletterOpen ? {zIndex: 1001} : {zIndex: 0}}>
        <div className="newsletter">
          <div className="close-container" onClick={this.props.toogleModal}>
            <FaTimes />
          </div>
          <h2>Do????cz go grupy Bichon Frise Poland. Znajdziesz tutaj pomoc i porady dotycz??ce rasy</h2>
          <br/>
          <FacebookContainer>
              <FacebookProvider appId="304797623776030">
                <Group
                  href="https://www.facebook.com/groups/195152164440499"
                  width="300"
                  showSocialContext={true}
                  showMetaData={false}
                  skin="light"
                />
              </FacebookProvider>
            </FacebookContainer>
        </div>
      </NewsletterModal>
    );
  }
}

export default Newsletter;
