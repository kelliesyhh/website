import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Breadcrumb,
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Avatar,
  Divider,
} from 'antd';


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

export default () => (
  <Layout>
    <Header>
      <Row justify="center" type="flex" style={{backgroundColor: '#cce6ff'}}>
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
            <link href="/home">
              <a>
                Home
              </a>
            </link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <link href="/about">
              <a>
                About
              </a>
            </link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <link href="/projects">
              <a>
                Projects
              </a>
            </link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <link href="/blog">
              <a>
                Blog
              </a>
            </link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <link href="/contact">
              <a>
                Contact
              </a>
            </link>
          </div>
        </Col>
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
        style={{paddingTop: '30px', paddingBottom: '30px', minHeight: '500px'}}
      >
        <Content>
          <Row justify="center" type="flex">
            <Col span={1} />
            <Col span={22}>
              <Card
                actions={[
                  <link href="/about">
                    <a>
                      <Icon type="user" />
                      <br />
                      About Me
                    </a>
                  </link>,
                  <link href="/projects">
                    <a>
                      <Icon type="project" />
                      <br />
                      Past Projects
                    </a>
                  </link>,
                  <link href="/blog">
                    <a>
                      <Icon type="global" />
                      <br />
                      Blog Posts
                    </a>
                  </link>,
                  <link href="/contact">
                    <a>
                      <Icon type="phone" />
                      <br />
                      Contact Me
                    </a>
                  </link>
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