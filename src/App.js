import React from "react";
import logo from "./logo.png";
import "./App.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Button,
  Col,
  Avatar,
  Badge
} from "antd";
import home from "./home.png";
import box from "./box.png";
import avatar from "./avatar.png";
import bell from "./bell.png";
import search from "./search.png";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const cardData = [
  {
    title: "Blog/Article",
    price: "500"
  },
  {
    title: "Newsletter/Emailer",
    price: "1000"
  },
  {
    title: "Whitepaper",
    price: "2000"
  },
  {
    title: "e-Book",
    price: "1000"
  },
  {
    title: "Report/Guide",
    price: "1000"
  },
  {
    title: "Product Description",
    price: "₹500"
  },
  {
    title: "Website Content",
    price: "1000"
  },
  {
    title: "Video Script",
    price: "1000"
  },
  {
    title: "Company Brochure",
    price: "2000"
  },
  {
    title: "Press Release",
    price: "2000"
  }
];

function App() {
  return (
    <div className={"container"}>
      <Layout className={"layout"}>
        <Sider
          width={300}
          style={{
            background: "white",
            boxShadow: "0px 0px 6px -3px rgba(0,0,0,0.75)",
            height: "100vh",
            position: "fixed"
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, marginTop: 100 }}
          >
            <Menu.Item className={"rightAlign"} key="1">
              <img style={{ height: 30 }} alt="box" src={box}></img>
            </Menu.Item>
            <Menu.Item className={"rightAlign"} key="2">
              <img style={{ height: 30 }} alt="search" src={search}></img>
            </Menu.Item>
            <Menu.Item className={"rightAlign"} key="3">
              <img style={{ height: 30 }} alt="home" src={home}></img>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ marginLeft: "300px" }}>
          <Header
            style={{
              backgroundColor: "#fafafa",
              boxShadow: "0px 0px 6px -3px rgba(0,0,0,0.75)"
            }}
            className="header"
          >
            <div className="logo" />
            <Row type="flex" justify="space-between" align="middle">
              <Col>
                <div>
                  <img
                    style={{
                      verticalAlign: "middle",
                      marginBottom: 5,
                      marginLeft: 50
                    }}
                    height={25}
                    alt="White Panda"
                    src={logo}
                  />
                </div>
              </Col>
              <Col style={{ marginRight: 350, marginTop: 10 }}>
                <Badge count={999}>
                  <img style={{ height: 30 }} src={bell}></img>
                </Badge>
                <Avatar
                  style={{
                    marginLeft: 30,
                    transform: "translate(0px,-9px)",
                    background: "green"
                  }}
                  size={30}
                >
                  AB
                </Avatar>
              </Col>
            </Row>
          </Header>
          <Layout
            style={{
              padding: "0 24px 24px",
              marginTop: 10,
              backgroundColor: "#fafafa"
            }}
          >
            <Content
              style={{
                background: "#fafafa",
                padding: 24,
                margin: 0
              }}
            >
              <Row style={{ padding: 40, background: "#fafafa" }}>
                <h1 style={{ fontSize: "40px" }}>Content Store</h1>
              </Row>
              <Row>
                <p style={{ color: "#64b9c6", fontSize: 20, marginLeft: 60 }}>
                  Got bulk order or almost similar orders ? Fill the order brief
                  in excel sheet
                </p>
              </Row>
              <Row
                style={{
                  paddingRight: "35VW",
                  paddingLeft: 60,
                  marginBottom: 70
                }}
              >
                <p
                  style={{
                    color: "grey",
                    fontSize: 15
                  }}
                >
                  If you're wondering about an easy way to place orders in large
                  numbers, we provide a way customized just for that. Download
                  our excel sheet, and fill the order brief in the prescribed
                  format and submit. In case you need any help,{" "}
                  <u>
                    we are just a click away to assist you in placing your order
                  </u>
                </p>
                <Button style={{ color: "#64b9b2" }} size={"large"}>
                  Order Via Excel Sheet
                </Button>
              </Row>
              <Row
                type="flex"
                style={{ width: "70vw", marginLeft: 40 }}
                gutter={24}
              >
                {cardData.map(data => (
                  <Col
                    className="cardd"
                    style={{
                      margin: 20,
                      backgroundColor: "#fdfdfd",
                      width: 350,
                      height: 350,
                      padding: 30
                    }}
                    lg={24}
                  >
                    <Row>
                      <Col span={8}>
                        <Avatar
                          size={70}
                          src={
                            data.title !== "Newsletter/Emailer"
                              ? avatar
                              : undefined
                          }
                        />
                      </Col>
                      <Col span={12}>
                        <h1
                          style={{
                            marginBottom: 5,
                            fontSize: 17,
                            textOverflow: "",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {data.title}
                        </h1>
                        <p style={{ marginTop: 5, fontSize: 15 }}>
                          from ₹{data.price}
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                      <p style={{ color: "grey", textAlign: "justify" }}>
                        Typically 450-400 words, an e-book is perfect for your
                        target audience ranging from prospective customers to
                        users
                      </p>
                    </Row>
                    <Row>
                      <Button
                        style={{
                          color: "#64b9b2",
                          width: "120px",
                          marginTop: 20
                        }}
                        size={"medium"}
                      >
                        Order
                      </Button>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Content>
            <Layout.Footer
              style={{ backgroundColor: "#fafafa", textAlign: "center" }}
            >
              <Row>
                <Icon className="socialicon" type="twitter"></Icon>
                <Icon className="socialicon" type="linkedin"></Icon>
                <Icon className="socialicon" type="instagram"></Icon>
                <Icon className="socialicon" type="facebook"></Icon>
              </Row>
              <Row>
                <p style={{ marginTop: 15, marginBottom: 0, fontSize: 15 }}>
                  Copyright White Panda Media Pvt. Ltd.
                </p>
                <p style={{ margin: 0, fontSize: 15 }}>All Rights Reserved</p>
                <p style={{ marginTop: 15, fontSize: 15 }}>
                  <u>Privacy Policy</u> | <u>Terms of Service</u> |{"   "}
                  <u>Service Agreement</u> | <u>Contact us</u>
                </p>
              </Row>
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
