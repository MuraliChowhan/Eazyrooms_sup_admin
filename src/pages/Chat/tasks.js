import React, { Component } from "react"
import { Card, CardBody, Col, Input, Label, Nav, NavItem, NavLink, Table } from "reactstrap";
import classnames from "classnames"
//Simple bar
import SimpleBar from "simplebar-react"
import './chat.css';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1"
    }
    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {

    const roomsData = [
      {
        icon: "fas fa-sms",
        chat_date: "20/02/2021",
        id: "ID3920",
        desc: "Hello, hi how are you.?",
        status: "vacaned",
        rooms: [
          {
            roomNo: "101"
          },
          {
            roomNo: "102"
          },
          {
            roomNo: "103"
          },
          {
            roomNo: "104"
          },
          {
            roomNo: "105"
          }

        ]
      },
      {
        icon: "fas fa-sms",
        chat_date: "20/02/2021",
        id: "ID3920",
        desc: "Hello, this is kmc.?",
        status: "cleaned",
        rooms: [
          {
            roomNo: "201"
          },
          {
            roomNo: "202"
          },
          {
            roomNo: "203"
          },
          {
            roomNo: "204"
          },
          {
            roomNo: "205"
          }

        ]
      },
      {
        icon: "fas fa-sms",
        chat_date: "20/02/2021",
        id: "ID3920",
        desc: "Hello, hi how are you.?",
        status: "occupied",
        rooms: [
          {
            roomNo: "301"
          },
          {
            roomNo: "302"
          },
          {
            roomNo: "303"
          },
          {
            roomNo: "304"
          },
          {
            roomNo: "305"
          }

        ]
      },
      {
        icon: "fas fa-sms",
        chat_date: "20/02/2021",
        id: "ID3920",
        desc: "Hello, hi how are you.?",
        status: "All",
        rooms: [
          {
            roomNo: "401",
            sender: "Hello",
            receiver: "How are you.?"
          },
          {
            roomNo: "402",
            sender: "Hello",
            receiver: "How are you.?"
          },
          {
            roomNo: "403",
            sender: "Hello",
            receiver: "How are you.?"
          },
          {
            roomNo: "404",
            sender: "Hello",
            receiver: "How are you.?"
          },
          {
            roomNo: "405",
            sender: "Hello",
            receiver: "How are you.?"
          }
        ]
      }

    ]
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            {/* <Nav pills className="bg-light d-flex justify-content-between mb-3 rounded">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "5"
                  })}
                  onClick={() => {
                    this.toggleTab("5")
                  }}
                >
                  <i className="fas fa-comment-alt"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "6"
                  })}
                  onClick={() => {
                    this.toggleTab("6")
                  }}
                >
                  <i className="fas fa-user-friends" ></i>
                </NavLink>
              </NavItem>
            </Nav> */}
            <h4 className="card-title mb-4">Tasks</h4>
            <Nav pills className="bg-light d-flex justify-content-between rounded">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggleTab("1")
                  }}
                >
                  <i className="fas fa-comments"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggleTab("2")
                  }}
                >
                  <i className="fas fa-user" ></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggleTab("3")
                  }}
                >
                  <i className="fas fa-clock" ></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggleTab("4")
                  }}
                >
                  <i className="fas fa-check" ></i>
                </NavLink>
              </NavItem>
            </Nav>

            <div className="mt-4">
              <SimpleBar style={{ maxHeight: "250px" }}>
                <div className="table-responsive">
                  <div className="d-flex justify-content-between my-4">
                    {
                      roomsData?.length > 0 && roomsData?.map((doc, index) =>
                        <div key={index} className={index === 0 ? "col-sm-12 col-md-3 custom-beep col-lg-3 mb-3 py-3 chatrooms" : "cursor-pointer col-sm-12 col-md-3 col-lg-3 mb-3 py-3"}>
                          {
                            <div className="text-center" style={{ fontSize: "15px", fontWeight: "bold" }}>
                              102
                            </div>
                          }
                        </div>
                      )
                    }
                  </div>
                </div>
              </SimpleBar>
            </div>
          </CardBody>

          {/* <div className="card-footer bg-transparent border-top">
            <div className="text-center">
              <Link
                to="#"
                className="btn btn-primary"
              >
                {" "}
                Add new Task
              </Link>
            </div>
          </div> */}
        </Card>
      </React.Fragment>
    )
  }
}

export default Tasks
