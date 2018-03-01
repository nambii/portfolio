import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Popup1 from './popup1.js';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// <Button color="danger" onClick={this.toggle}>{this.state.modal+' '}</Button>
// <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-open" id="portfolio-modal-1">
//   <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//   <ModalBody>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//   </ModalBody>
//   <ModalFooter>
//     <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//   </ModalFooter>
// </Modal>
export default class Grid extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modal: false,
        image: null,
        text: null
      };

      this.toggle = this.toggle.bind(this);
      this.imageClick = this.imageClick.bind(this);
    }

    toggle(param,txt,e) {
      console.log('Click!!!!'+ param);
      this.setState({
        modal: !this.state.modal,
        image: param,
        text: txt
      });
    }
      imageClick() {
           console.log('Click!!!!');
         }


  render() {
    var div1= <div>As the part of the capstone project, I developed new features into a prestigious project started by Mr. Elyas Khan called 'Wakul' which is a web application designated to collect twitter data, articles, and blogs related to or by indigenous Australians and showcase it. I developed following seven software modules.
<br/>
<br/>
1) Sentiment analysis over articles (Language : Python,Packages used: Keras, Theano, NLTK, GloVe,pandas)
<br/>
2) Sentiment analysis over tweets(Language : Python,Packages used: Keras, Theano, NLTK, GloVe,pandas
<br/>
3) Topic modeling on the articles(Language : Python,Packages used: Keras, Theano, NLTK, Lda, pandas)
<br/>
4) Automated Australian Indigenous user finder in Twitter(Language : Python,Packages used: Tweepy)
<br/>
5) Gender classification of the users(Language : Python, Packages used: Sklearn,NLTK)
<br/>
6) Detect capitalization in articles over Indigenous people(Language : Python)
<br/>
7) Program a hypervisor/head node that can instantiate and control worker nodes(VMs) to do various sub-tasks.(Language : Python,Packages used : Ansible,Boto)
<br/>
<br/>
Apart from these tasks I also added more visualizations to Wakul web application(Chart.js) and brought more data to front-end of the application, which is created using Django.
<br/>
See project Wakul App</div>;

var div2=<div>The objective of the project was to develop character classifiers for several historical documents, each produced shortly after the advent of the printing press. These documents were in different languages, use different fonts, and have other idiosyncrasies specific to their author and printer. My team’s job was to identify for a given bitmap image of a character the identity of that character using various machine learning techniques. The accuracy of the classifiers was evaluated using Kaggle in-class competition and were made to compete against other teams.</div>
var div3=<div>The objective was to harvest as many tweets as possible from across the cities of Australia on the
NeCTAR Research Cloud and undertake a variety of social media data analytics scenarios that tell
interesting stories of life in cities of Australia and importantly how the Twitter data can be used
alongside/compared with/augment the data available within the AURIN(Australian Urban Research Infrastructure Network) platform to improve our knowledge of life in the cities of Australia.
We as a team had to develop Cloud-based solution that exploits a multitude of virtual machines
(VMs) across the NeCTAR Research Cloud for harvesting tweets through the Twitter APIs (using
both the Streaming and the Search API interfaces) and a front end application for visualising the data sets/scenarios.
<br/><br/>
Analytics: Sentiment Analysis,Gender Classification <br/>
Creating VM’s and deployment of applications: Boto and Ansible<br/>
Harvester: Twitter API tweepy<br/>
Database: CouchDB<br/>
Front End: nodeJS with ejs</div>
var div4=<div>The aim of the project was to implement an iOS native mobile application similar to Snapchat. The application had all the features that are currently on the actual Snapchat application. As the application was supposed to be native to a mobile platform, the app was developed, using the language Swift, on IDE Xcode. The application was integrated with Firebase for storage.</div>
var div6=<div>Developed in Microsoft ASP.NET 2.0 with C# as front end and SQL server 2005 as backend.</div>
var div5=<div>The objective of the project was to create a multi-server system to broadcast activity objects between a number of clients in the system. The multi-server system will load balance client requests over the servers, using a redirection mechanism to ask clients to reconnect to another server. It will also allow clients to register a username and a secret, that can act as an authentication mechanism. Clients can login and logout as either anonymous or using a username/secret pair. Clients are allowed to broadcast an activity object to all other clients connected at the time.</div>
    return (
  <Element name="test3" className="element " >
  <br/>
  <br/>
      <section className="portfolio" id="portfolio">
  <div className="container">
    <h2 className="text-center text-uppercase text-secondary mb-0">Projects</h2>
    <hr className="star-dark mb-5"></hr>
    <div className="row">
      <div className="col-md-6 col-lg-4" >
        <a className="portfolio-item d-block mx-auto " href="#portfolio-modal-1" onClick={this.toggle.bind(this,'assets/Wakul.jpg',div1)} >
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100 " >
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white " >
              <i className="mx-auto text-center">A cloud based web application.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/Wakul.jpg"  />
        </a>
        <div>


      </div>
      </div>
      <Popup1 ButtonLabel={this.state.modal+' '} show={this.state.modal} tog={this.toggle} image={this.state.image} text={this.state.text}/>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2" onClick={this.toggle.bind(this,'assets/OCR.jpg',div2)}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i className="mx-auto text-center">Character Recognition from Historic Documents</i>
            </div>
          </div>
          <img className="img-fluid mx-auto text-center" src="assets/OCR.jpg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3" onClick={this.toggle.bind(this,'assets/analytics.jpeg',div3)}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i className="mx-auto text-center">Undertook variety of analytics on tweets harvested.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/analytics.jpeg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4" onClick={this.toggle.bind(this,'assets/snapchat.jpeg',div4)}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i className="mx-auto text-center">An iOS native mobile application similar to Snapchat.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/snapchat.jpeg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5" onClick={this.toggle.bind(this,'assets/multi.jpeg',div5)}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
            <i className="mx-auto text-center">A multi-server system to broadcast activity objects between a number of clients in the system.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/multi.jpeg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6" onClick={this.toggle.bind(this,'assets/feedback.jpeg',div6)}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="mx-auto text-center">An online customer feedback system built using ASP.Net.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/feedback.jpeg" alt=""></img>
        </a>
      </div>
    </div>

  </div>
</section>
</Element>
    );
  }
}
