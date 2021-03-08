import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Breadcrumb, Icon, Row, Col, Layout, Card, Avatar, Divider} from 'antd';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';

const {Header, Content, Footer} = Layout;

const description = (
  <div>
    <Divider />
    <p>
      Hi! It's nice to see you here. I'm Kellie, and welcome to my website. Here, you can find details of (almost) all
      my life experiences. Feel free to take a look at all the different tabs! You can either click on the links in the
      header above, or in the boxes below. They all work!
    </p>
    <p>
      I am a self-motivated and conscientious learner with experience in engineering, programming and designing.
      I am a good team player with strong verbal and written communication skills, as well as excellent listening and
      {' '}
      interpreting abilities. I have excellent interpersonal skills with demonstrable ability to solve problems
      {' '}
      and remain results focused in a fast changing environment.
    </p>
    <p>
      Apart from that, I firmly believe that it is important to give back to society, and so I take part in community
      {' '}
      service events and volunteer regularly. To me, there is no point in designing tools or services if
      the community has no use for it, and the best way to find out if the community has any use for it is by interacting
      with them.
    </p>
    <p>
      I aspire to work in the healthcare or medical industry,
      where I want to combine knowledge and technology to help others while making an impactful difference to their lives.
    </p>
  </div>
);

const Home = () => {
    return (
      <Layout>
        <Header>
          <Row
            justify="center"
            type="flex"
            style={{backgroundColor: '#cce6ff'}}
          >
            <Col
              span={10}
              style={{
                textAlign: 'left',
                height: 50,
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              <span>
                Sim Yu Hui, Kellie {' '}| {' '}
                Looking to use my engineering skills to aid those in need
                {' '}
                {' '}
                <Icon type="bulb" theme="filled" />
              </span>
            </Col>
            <Router>
              <Col
                span={12}
                style={{
                  textAlign: 'left',
                  height: 50,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  textTransform: 'uppercase',
                }}
              >
                <div style={{width: 'fit-content', margin: 'auto 0px'}}>
                  <Link to="/home">
                    <a>
                      Home
                    </a>
                  </Link>
                </div>
                <div style={{width: 'fit-content', margin: 'auto 0px'}}>
                  <Link to="/about">
                    <a>
                      About
                    </a>
                  </Link>
                </div>
                <div style={{width: 'fit-content', margin: 'auto 0px'}}>
                  <Link to="/projects">
                    <a>
                      Projects
                    </a>
                  </Link>
                </div>
                <div style={{width: 'fit-content', margin: 'auto 0px'}}>
                  <Link to="/blog">
                    <a>
                      Blog
                    </a>
                  </Link>
                </div>
                <div style={{width: 'fit-content', margin: 'auto 0px'}}>
                  <Link to="/contact">
                    <a>
                      Contact
                    </a>
                  </Link>
                </div>
              </Col>
            </Router>
          </Row>
        </Header>
        <br />
        <Row justify="center" type="flex">
          <Col
            span={10}
            style={{
              width: 'fit-content',
              margin: 'auto 0px',
              justifyContent: 'left',
            }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="/home">
                <Icon type="home" />
                <span>Home</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row justify="space-around" type="flex">
          <Col
            span={20}
            style={{
              paddingTop: '30px',
              paddingBottom: '30px',
              minHeight: '500px',
            }}
          >
            <Content>
              <Row justify="center" type="flex">
                <Col span={1} />
                <Col span={22}>
                  <Card
                    actions={[
                      <Router>
                        <Link to="/about">
                          <a>
                            <Icon type="user" />
                            <br />
                            About Me
                          </a>
                        </Link>,
                        <Link to="/projects">
                          <a>
                            <Icon type="project" />
                            <br />
                            Past Projects
                          </a>
                        </Link>,
                        <Link to="/blog">
                          <a>
                            <Icon type="global" />
                            <br />
                            Blog Posts
                          </a>
                        </Link>,
                        <Link to="/contact">
                          <a>
                            <Icon type="phone" />
                            <br />
                            Contact Me
                          </a>
                        </Link>
                      </Router>,
                    ]}
                  >
                    <Card.Meta
                      avatar={<Avatar src="/static/images/avatar.jpg" />}
                      title="Sim Yu Hui, Kellie"
                      description={description}
                    />
                  </Card>
                </Col>
                <Col span={1} />
              </Row>
              <br /><br />
            </Content>
          </Col>
        </Row>

        <Footer>
          <br /><br /><br /><br /><br />
          <Row
            justify="space-around"
            align="middle"
            type="flex"
            style={{backgroundColor: '#ffd9cc'}}
          >
            <Col
              span={18}
              style={{height: '40px', display: 'flex', textAlign: 'left'}}
            >
              <div style={{margin: 'auto 0px'}}>
                &copy; 2019 <b>Sim Yu Hui, Kellie</b>. All rights reserved.
              </div>
            </Col>
            <Col
              span={4}
              style={{height: '40px', display: 'flex', textAlign: 'right'}}
            >
              <div style={{margin: 'auto 0px'}}>
                made with antd, react and nextjs
              </div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    );
}

export default Home;
