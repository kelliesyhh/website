import {
  Card,
  Layout,
  Row,
  Col,
  Breadcrumb,
  Icon,
  Divider,
  BackTop,
  Tabs,
} from 'antd';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import React from 'react';

const {Header, Content, Footer} = Layout;
const {TabPane} = Tabs;

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
          <Breadcrumb.Item href="/about">
            <Icon type="user" />
            <span>About</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>

    <Row type="flex"><p><p /></p></Row>

    <Content>
      <Row>
        <Col span={1} />
        <Col span={22}>
          <Tabs defaultActiveKey="1">
            {/* <TabPane tab="Summary" key="1">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <div>
                    <p>
                      I am a self-motivated and conscientious learner. I am a good team player with strong verbal
                      {' '}
                      and written communication skills, as well as excellent listening and interpreting abilities.

                      I have excellent interpersonal skills with demonstrable ability
                      {' '}
                      to solve problems and remain results focused in a fast changing environment.
                      {' '}
                      I possess experience in MS Office and have completed
                      {' '}
                      6 online courses related to data science and calculus.
                      {' '}
                      Apart from my engineering knowledge, I am also able to code Android and web applications.
                    </p>
                    <p>
                      I aspire to work in the healthcare or medical industry, where I want to combine knowledge and
                      {' '}
                      technology to help others while making an impactful difference to their lives.
                    </p>
                    {' '}
                  </div>
                </Col>
              </Row>
            </TabPane> */}
            <TabPane tab="Education" key="1">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col
                  span={15}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                >
                  <Row>
                    Ngee Ann Polytechnic | Diploma in Engineering Science
                  </Row>
                </Col>
                <Col span={8} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  April 2017 - February 2020
                </Col>
              </Row>
              <Row>
                <p />
                <Col span={20}>
                  <p>Cumulative GPA: 3.94</p>
                  <p>
                    4 Module Prizes - Innovation Toolkit: Acquiring the Skills, Engineering Mathematics 3A,
                    {' '}
                    Fundamentals of Object Oriented Programming, Engineering Design
                  </p>
                  <p>
                    12 Distinctions - Innovation Toolkit: Acquiring the Skills, Engineering Mechanics, Engineering Mathematics 3A,
                    {' '}
                    Fundamentals of Object Oriented Programming, Innovation Toolkit: Applying the Skills, Strength of Materials,
                    {' '}
                    China: The Global Game Changer, Analogue Circuit Design & Applications, Engaging the Dragon: An Immersion Trip,
                    {' '}
                    Engineering Design, Complex Numbers, Matrices and Linear Spaces, Polar Coordinates and Real World Mathematics
                  </p>
                  <p>1 Pass with Merit - Sports & Wellness</p>
                  <p>
                    3 Additional Certificates - Diploma Plus Certificate in Advanced Engineering Mathematics, Certificate in China Readiness,
                    Certificate in Business Mandarin
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col
                  span={15}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                >
                  <Row>
                    School of Science and Technology, Singapore | GCE 'O' Levels
                  </Row>
                </Col>
                <Col span={8} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  January 2013 - November 2016
                </Col>
              </Row>
              <p />
              <Row>
                <Col span={20}>
                  <p>L1R5: 8 points (raw), 6 points (net)</p>
                  <p>L1R4/ELR2B2: 6 points (raw), 4 points (net)</p>
                  <p>
                    7 Distinctions - A1 (Chinese, Chemistry, Additional Mathematics, Combined Humanities),
                    A2 (English, Physics, Mathematics)
                  </p>
                  <p>1 Merit - B3 (Fundamentals of Electronics)</p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col
                  span={15}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                >
                  <Row>
                    Zhenghua Primary School | Primary School Leaving Examination (PSLE)
                  </Row>
                </Col>
                <Col span={8} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  January 2007 - November 2012
                </Col>
              </Row>
              <p />
              <Row>
                <Col span={20}>
                  <p>T-Score: 245</p>
                  <p>1A* - English</p>
                  <p>3As - Chinese, Mathematics, Science</p>
                </Col>
              </Row>
              <br /><br />
            </TabPane>

            <TabPane tab="Work Experience" key="2">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col
                  span={15}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                >
                  <Row>
                    Changi General Hospital, Otorhinolaryngology Department | Student Attachment
                  </Row>
                </Col>
                <Col span={8} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  September 2019
                </Col>
              </Row>
              <p />
              <Row>
                <Col span={20}>
                  <p>
                    Completed a 3 day attachment at the otorhinolaryngology department.
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col
                  span={15}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                >
                  <Row>
                    A*STAR, Institute for Infocomm Research, Deep Learning in Healthcare | Research Attachment
                  </Row>
                </Col>
                <Col span={8} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  May 2019 - October 2019
                </Col>
              </Row>
              <p />
              <Row>
                <Col span={20}>
                  <p>
                    Developed a web application to enable evaluations of novel language technologies for
                    {' '}
                    improving workflow efficiencies in a hospital telehealth setting
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col
                  span={15}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                >
                  <Row>
                    Pacific Bookstores Pte Ltd | Assistant Bookkeeper
                  </Row>
                </Col>
                <Col span={8} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  December 2017
                </Col>
              </Row>
              <p />
              <Row>
                <Col span={20}>
                  <p>Handled customer service and books inventory</p>
                </Col>
              </Row>
              <br /><br />
            </TabPane>

            <TabPane tab="Co-Curricular Activities" key="3">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Ngee Ann Polytechnic
                </Col>
              </Row>
              <p />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    FoodAID Club | Student Advisor
                  </Row>
                </Col>
                <Col span={9}>
                  January 2019 - January 2020
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <Row>
                    <p>
                      As student advisor, I provided assistance and guidance to the team of main committee members
                      {' '}
                      where needed.
                    </p>
                  </Row>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Leo Club | Member
                  </Row>
                </Col>
                <Col span={9}>
                  April 2018 - January 2020
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <Row>
                    <p>
                      As a member, I actively volunteered for events such as Project 100=50 and events for elderly homes.
                      I also assisted the execution of Leo Wave and Inauguration 2018 as a crew and group leader
                      respectively. Through both events, we welcomed new members of the club.
                      I was awarded the Leo Club Bronze Award for active participation in events.
                    </p>
                  </Row>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Engineering Science Academic Club | President
                  </Row>
                </Col>
                <Col span={9}>
                  April 2018 - May 2019
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As president, I led the club in organising events for all Engineering Science students
                    {' '}
                    also events in collaboration with the School of Engineering (SOE) Society.
                    {' '}
                    I created the club mission and vision and implemented the overall direction for the club.
                    {' '}
                    Together with the other main committee members, I organised the annual Freshmen Bonding Day to welcome
                    and bond the new Year 1 students to the course. I served as the Admin and Publicity Head.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    FoodAID Club | Events Coordinator
                  </Row>
                </Col>
                <Col span={9}>
                  January 2018 - January 2019
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As events coordinator, I contacted volunteer-based organisations
                    {' '}
                    (eg: Food from the Heart, Young Women’s Christian Association, TOUCH Community Services)
                    {' '}
                    to organise and coordinate events for all students of Ngee Ann Polytechnic. My committee and I also
                    planned and executed FoodAID's Annual Bonding Camp (Survivor Camp III), where I served as crew head
                    and led the crews in leading various games and camp activities.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    The Christieara Programme
                  </Row>
                </Col>
                <Col span={9}>
                  August 2017 - February 2020
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I joined The Christieara Programme as I was a recipient of a scholarship.
                    Through this programme, I took part in a Youth Expedition Project, where students from
                    Ngee Ann Polytechnic and Chiang Mai University Demonstration School
                    aided villagers at Pakia Village, Chiangmai in building 8 water tanks and taught
                    them basic English. I also actively took part in other events, such as the Christieara Summit in
                    2018, and represented NP to attend lectures such as S Rajaratnam Lectures and Ho Rih Hwa Lectures.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    FoodAID Club | Subcommittee Member
                  </Row>
                </Col>
                <Col span={9}>
                  June 2017 - January 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As a subcommittee member, I Contacted volunteer-based organisations,
                    {' '}
                    namely Jamiyah Children's Home to plan and execute events for all students of Ngee Ann Polytechnic.
                    My team of subcommittee members organised a sushi making workshop in collaboration with
                    {' '}
                    Jamiyah Children's Home and an ice-cream making workshop for all students of Ngee Ann Polytechnic.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Institute of Engineers, Singapore - Ngee Ann Poly Chapter | Secretary
                  </Row>
                </Col>
                <Col span={9}>
                  May 2017 - May 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As secretary, I took detailed minutes for meetings and kept the team on track.
                    My committee and I organised a bonding day cum recruitment event for the chapter.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Engineering Science Society | Subcommittee Member
                  </Row>
                </Col>
                <Col span={9}>
                  May 2017 - April 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As a subcommitee member, I took detailed minutes for meetings and kept the team on track.
                    My team of subcommittee members planned and executed events such as
                    {' '}
                    Movie Night and Bowling Day for all Engineering Science students.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Rotaract Club | Member
                  </Row>
                </Col>
                <Col span={9}>
                  April 2017 - January 2019
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I assisted the execution of Rotaract Fellowship Camp 2018 as a group leader, where we welcomed new members.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Yoga Club | Member
                  </Row>
                </Col>
                <Col span={9}>
                  April 2017 - March 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I actively took part in weekly trainings to improve my spiritual awareness and fitness.
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  School of Science and Technology, Singapore
                </Col>
              </Row>
              <p />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Global Citizenship Programme | Student Leader
                  </Row>
                </Col>
                <Col span={9}>
                  May 2015 - June 2015
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I visited Beijing, China as a student leader in 2015. I learnt about the culture and ways of life of
                    {' '}
                    the citizens, and also made an iBook about the hutongs (胡同) in China, which we conducted site visits at.
                    {' '}
                    In the iBook, we also compared the similarities and differences between Singapore and China
                    {' '}
                    in terms of residential areas. The iBook my group made was shared at the iSummit in Beijing.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Class Exco | Chairperson
                  </Row>
                </Col>
                <Col span={9}>
                  January 2015 - December 2015
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As the chairperson of my class, I served as the direct line of communication with the teachers.
                    {' '}
                    Together with the other exco members, I organised class parties and outings to bond the class.
                    {' '}
                    We also led class decoration efforts.
                    {' '}
                    I led the creation and subsequent implementation of the class mission, vision and goals.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Class Exco | Vice-Chairperson
                  </Row>
                </Col>
                <Col span={9}>
                  January 2013 - December 2013
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As vice-chairperson of my class, I assisted the chairperson in her duties. We served as the direct
                    line of communication with the teachers. Together with the other exco members, I organised
                    class parties and outings to bond the class. We also led class decoration efforts.
                    I aided the chairperson in leading the creation and subsequent implementation of the class mission, vision and goals.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Robotics@ APEX | Member
                  </Row>
                </Col>
                <Col span={9}>
                  January 2013 - December 2016
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I represented SST in various competitions such as Bull's Eye Competition, FIRST Lego League
                    {' '}
                    and FIRST Tech Challenge. My team won 1st place in Bull's Eye Competition 2013 - Category B and
                    won Best Presentation Award in FIRST Lego League 2015.
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Zhenghua Primary School
                </Col>
              </Row>
              <p />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Prefect
                  </Row>
                </Col>
                <Col span={9}>
                  January 2012 - December 2012
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As a prefect, I did duties during recess breaks at least twice a week, honing my leadership skills.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Councillor
                  </Row>
                </Col>
                <Col span={9}>
                  January 2011 - December 2011
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As a councillor, I did duties during recess breaks at least twice a week, honing my leadership skills.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Infocomm Club | Member
                  </Row>
                </Col>
                <Col span={9}>
                  January 2009 - December 2012
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    As a member of Infocomm Club, I acquired photography, basic photoshop and animation skills.
                  </p>
                </Col>
              </Row>
              <br />
              <BackTop visibilityHeight={700} />
            </TabPane>

            <TabPane tab="Achievements" key="4">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Ngee Ann Polytechnic
                </Col>
              </Row>
              <p />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    A*STAR Science Award (Poly) AY19/20
                  </Row>
                </Col>
                <Col span={9}>
                  June 2019
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    The A*STAR Science Award (Polytechnic) I was awarded in AY18/19 was renewed for AY19/20.
                    {' '}
                    This award was issued to Singaporean Polytechnic Year 2 and 3 students who had outstanding academic
                    {' '}
                    performance in science and mathematics subjects and displayed a passion for science and research.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    School of Engineering Outstanding Student Award
                  </Row>
                </Col>
                <Col span={9}>
                  May 2019
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was nominated and subsequently awarded the School of Engineering Outstanding Student Award in
                    {' '}
                    recognition of my exemplary conduct in demonstrating the polytechnic's core values of Respect, Resilience,
                    {' '}
                    Responsibility, Integrity, Compassion and Gratitude. This award was issued to one student throughout
                    {' '}
                    Ngee Ann Polytechnic's School of Engineering for the October Semester of AY18/19.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Module Prize (Level 2.2 - Engineering Design)
                  </Row>
                </Col>
                <Col span={9}>
                  May 2019
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded 1 module prize for the October Semester of AY18/19
                    {' '}
                    as I had performed the best in my course and level for the module Engineering Design.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    International Seminar on Technology for Sustainability 2018 - Lomprayah Award
                  </Row>
                </Col>
                <Col span={9}>
                  October 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    My team received the Lomprayah Award for Best Solution amongst the 5 teams working on Lomprayah's case study.
                    We were tasked to improve the user experience for Lomprayah.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    A*STAR Science Award (Poly) AY18/19
                  </Row>
                </Col>
                <Col span={9}>
                  October 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was nominated for and subsequently awarded the A*STAR Science Award (Polytechnic) for AY18/19.
                    {' '}
                    This award was issued to Singaporean Polytechnic Year 2 and 3 students who had outstanding academic
                    {' '}
                    performance in science and mathematics subjects and displayed a passion for science and research.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Ngee Ann Polytechnic Scholarship AY18/19
                  </Row>
                </Col>
                <Col span={9}>
                  October 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    The Ngee Ann Polytechnic Scholarship I was awarded in AY17/18 was renewed for AY18/19.
                    {' '}
                    This scholarship was awarded to all-rounded students with
                    outstanding academic results, strong core values and leadership qualities.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Director’s List (Level 1.2)
                  </Row>
                </Col>
                <Col span={9}>
                  May 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was placed on the Director’s List for the October Semester of AY17/18.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Most Outstanding Performance (Level 1.2)
                  </Row>
                </Col>
                <Col span={9}>
                  May 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the most outstanding performance in the
                    October Semester of AY17/18 and topped my course with a semestral GPA of 4.0.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Module Prize (Level 1.2 - Engineering Mathematics 3A)
                  </Row>
                </Col>
                <Col span={9}>
                  May 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded 1 module prize for the October Semester of AY17/18
                    {' '}
                    as I had performed the best in my course and level for the module Engineering Mathematics 3A.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Module Prize (Level 1.2 - Fundamentals of Object-Oriented Programming)
                  </Row>
                </Col>
                <Col span={9}>
                  May 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded 1 module prize for the October Semester of AY17/18
                    {' '}
                    as I had performed the best in my course and level for the module Fundamentals of Object-Oriented Programming.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Module Prize (Level 1.1 - Innovation Toolkit: Acquiring the Skills)
                  </Row>
                </Col>
                <Col span={9}>
                  November 2017
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded 1 module prize for the April Semester of AY17/18
                    {' '}
                    as I had performed the best in my course and level for the module Innovation Toolkit: Acquiring the Skills.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Ngee Ann Polytechnic Engineering Scholarship AY17/18
                  </Row>
                </Col>
                <Col span={9}>
                  August 2017
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the Ngee Ann Polytechnic Engineering Scholarship for AY17/18. This scholarship was
                    {' '}
                    awarded to Singaporean or Singapore PR engineering students who had outstanding 'O’ Level results
                    {' '}
                    and CCA achievements, strong leadership qualities and potential,
                    {' '}
                    good whole person qualities and disposition and a passion for engineering.
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  School of Science and Technology, Singapore
                </Col>
              </Row>
              <p />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Top GCE O-Level Performer for 2016
                  </Row>
                </Col>
                <Col span={9}>
                  March 2017
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I was awarded this prize as I was one of the top GCE O-Level Performers in my school,
                  {' '}
                  the School of Science and Technology, Singapore, for the class of 2016. I obtained 5 or more
                  distinctions and was within the top 10% of the cohort.{' '}
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Singapore Junior Chemistry Olympiad (Merit)
                  </Row>
                </Col>
                <Col span={9}>
                  May 2016
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the Merit Award for the Singapore Junior Chemistry Olympiad (SJChO).
                    SJChO provides a platform for all upper secondary (or equivalent levels)
                    {' '}
                    students to challenge themselves in their chemical knowledge and skills.
                    {' '}
                    It also seeks to promote the excitement in learning and doing Chemistry as well as to
                    {' '}
                    identify and develop chemistry talents.{' '}
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Young Engineers Award (Silver)
                  </Row>
                </Col>
                <Col span={9}>
                  March 2015
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I completed Tier 1 - Level 2 of STEM Inc Applied Learning Programme (ALP)
                    {' '}
                    and met the minimum attendance or assessment criteria.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    FIRST LEGO League 2014-2015 (Presentation - Champion)
                  </Row>
                </Col>
                <Col span={9}>
                  February 2015
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    My team was awarded the Champion for the Presentation category in FIRST LEGO Leauge 2014-2015.
                    We were required to research a real-world problem such as food safety, recycling, energy, etc.,
                    {' '}
                    and were challenged to develop a solution. In our case, we researched on dyscalculia, which is
                    {' '}
                    defined as the severe difficulty in making arithmetical calculations, as a result of brain disorder.
                    We also designed, built and programmed a robot using LEGO
                    {' '}
                    MINDSTORMS technology, which was used to compete on a table-top playing field.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Young Engineers Award (Bronze)
                  </Row>
                </Col>
                <Col span={9}>
                  November 2014
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I completed Tier 1 - Level 1 of STEM Inc Applied Learning Programme (ALP) and
                    {' '}
                    met the minimum attendance or assessment criteria.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Bull’s Eye Robotics Competition 2013 (Category B - Champion)
                  </Row>
                </Col>
                <Col span={9}>
                  October 2013
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    My team and I won the Bull’s Eye Robotics Competition in Category B.
                    Using strategy, teamwork and creativity, we designed and built a sophisticated robot to accomplish a mission.
                    {' '}
                    In the process, we learnt about automation and mechatronic systems.
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Zhenghua Primary School
                </Col>
              </Row>
              <p />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    UNSW Global ICAS Science 2012: Distinction
                  </Row>
                </Col>
                <Col span={9}>
                  2012 (?)
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I took part in UNSW Global's ICAS Assessment for Science and received the Distinction award for being
                  in the top 11% of all participants.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    UNSW Global ICAS Science 2011: Distinction
                  </Row>
                </Col>
                <Col span={9}>
                  2011 (?)
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I took part in UNSW Global's ICAS Assessment for Science and received the Distinction award for being
                  in the top 11% of all participants.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    UNSW Global ICAS Science 2010: Distinction
                  </Row>
                </Col>
                <Col span={9}>
                  2010 (?)
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I took part in UNSW Global's ICAS Assessment for Science and received the Distinction award for being
                  in the top 11% of all participants.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    UNSW Global ICAS English 2008: Distinction
                  </Row>
                </Col>
                <Col span={9}>
                  2010 (?)
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I took part in UNSW Global's ICAS Assessment for English and received the Distinction award for being
                  in the top 11% of all participants.
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Others
                </Col>
              </Row>
              <p />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Python for Data Science and Machine Learning Bootcamp
                  </Row>
                </Col>
                <Col span={9}>
                  July 2019
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I completed an online course, Python for Data Science and Machine Learning Bootcamp, on Udemy.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Python Level 1
                  </Row>
                </Col>
                <Col span={9}>
                  December 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I took a test by the Cambridge Certification Authority to certify my
                  {' '}
                  knowledge of Python and software development basics with this beginner certification.
                  I was awarded the Python Level 1 Certificate.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Java Level 1
                  </Row>
                </Col>
                <Col span={9}>
                  December 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I took a test by the Cambridge Certification Authority which
                  tested basic Java and Android concepts such as buttons, textViews and arrays, maps, if statements and loops.
                  I was awarded the Java Level 1 Certificate.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Android Development: Concurrent Programming
                  </Row>
                </Col>
                <Col span={9}>
                  December 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  {' '}
                  I completed an online course, Android Development: Concurrent Programming, on LinkedIn Learning.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Leading with Emotional Intelligence (2013)
                  </Row>
                </Col>
                <Col span={9}>
                  December 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I completed an online course, Leading with Emotional Intelligence (2013), on LinkedIn Learning.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Delegating Tasks to Your Team (2013)
                  </Row>
                </Col>
                <Col span={9}>
                  December 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I completed an online course, Delegating Tasks to Your Team (2013), on LinkedIn Learning.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Calc001x: Pre-University Calculus by DelftX
                  </Row>
                </Col>
                <Col span={9}>
                  November 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  I completed an online course, Calc001x: Pre-University Calculus by DelftX, on edX.
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Edusave Certificate of Academic Achievement 2018
                  </Row>
                </Col>
                <Col span={9}>
                  August 2018
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the Edusave Certificate of Academic Achievement in 2018 and was invited to apply for the
                    {' '}
                    Edusave Merit Bursary (if applicable). I was placed within the top 25% of my level and course in AY17/18
                    {' '}
                    in terms of academic performance and demonstrated good conduct.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Edusave Certificate of Academic Achievement 2016
                  </Row>
                </Col>
                <Col span={9}>
                  December 2016
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the Edusave Certificate of Academic Achievement in 2016 and was invited to apply for the
                    {' '}
                    Edusave Merit Bursary (if applicable). I was placed within the top 25% of my level and course in terms of academic
                    {' '}
                    performance and demonstrated good conduct.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Edusave Good Progress Award 2016
                  </Row>
                </Col>
                <Col span={9}>
                  December 2016
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the Edusave Good Progress Award 2016 as I was placed within the top 10% of my
                    {' '}
                    level and course terms of improvement in academic performance and demonstrated good conduct.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Edusave Scholarship 2012
                  </Row>
                </Col>
                <Col span={9}>
                  December 2012
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the prestigious Edusave Scholarship in 2012.
                    I was placed within the top 10% of my level and course in terms of academic performance and demonstrated good conduct.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Edusave Scholarship 2011
                  </Row>
                </Col>
                <Col span={9}>
                  December 2011
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the prestigious Edusave Scholarship in 2011.
                    I was placed within the top 10% of my level and course in terms of academic performance and demonstrated good conduct.
                  </p>
                </Col>
              </Row>
              <br />
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={11}>
                  <Row>
                    Edusave Award for Achievement, Good Leadership and Service (EAGLES) 2011
                  </Row>
                </Col>
                <Col span={9}>
                  December 2011
                </Col>
              </Row>
              <Row align="middle" style={{textAlign: 'left'}}>
                <Col span={14}>
                  <p>
                    I was awarded the Edusave Award for Achievement, Good Leadership and Service (EAGLES) in 2011 as I
                    {' '}
                    was one of the 10% of students who have demonstrated leadership qualities, service to community and
                    {' '}
                    schools, excellence in non-academic activities, and good conduct.
                  </p>
                </Col>
              </Row>
              <BackTop visibilityHeight={700} />
            </TabPane>

            <TabPane tab="Skills" key="5">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Technical
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <p>
                    Milling, Turning, Sheet Metal Work, Electrical & Electronic Measurement and Test Instrumentation,
                    {' '}
                    Breadboard Fabrication and Testing, Microcontroller Programming and Interfacing,
                    {' '}
                    Printed Circuit Board Fabrication, Wiring, Assembly and Testing
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Software
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <p>
                    Microsoft Office, AutoCAD, Tina10, Adobe Photoshop, iMovie, Android Studio
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Programming
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <p>C, C#, C++ , Java (intermediate)</p>
                  <p>Python, HTML, Arduino, JavaScript, CSS (basic)</p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Languages
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <p>
                    English (native), Chinese (fluent), Hokkien (basic)
                  </p>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={11} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Others
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <p>
                    Swimming (up till SwimSafer Bronze), First Aid Certified
                  </p>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Interests" key="6">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <Row>
                    I enjoy watching Korean Dramas, listening to Korean music, baking, iceskating, and travelling.
                    I intend to pick up either Figure Skating or Speed Skating in the near future.
                    Recently, I made my own Milk Tea with Pearls, Brown Sugar Boba Milk and Cheese Foam Milk Tea.
                  </Row>
                  <br />
                  <Row>
                    <iframe
                      src="https://drive.google.com/file/d/1KhVeu7CsoGiq8IPJmGsrdY44xwvkJT3V/preview"
                      width="640"
                      height="480"
                    />
                  </Row>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={1} />
      </Row>
    </Content>

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
