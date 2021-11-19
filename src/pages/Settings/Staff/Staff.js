import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
    Table,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import '../../../index.css';

class Staff extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const tablecolumns = [{
            id: "001",
            profileImage: "./cam.jpg",
            staffname: "100",
            email: "as2@gmail.com",
            mobileNumber: "9133638759",
            requites: "10",
            dept: "Food and safety",
            role: "Order taker",
            status: "Active",
            sort: true
        }, {
            id: "002",
            profileImage: "./cam.jpg",
            staffname: "100",
            email: "gnk@gmail.com",
            mobileNumber: "9133638759",
            requites: "10",
            dept: "Food and safety",
            role: "Order taker",
            status: "Active",
            sort: true
        }, {
            id: "003",
            profileImage: "./cam.jpg",
            staffname: "100",
            email: "murali@gmail.com",
            mobileNumber: "9133638759",
            requites: "10",
            dept: "Food and safety",
            role: "Order taker",
            status: "Active",
            sort: true
        },
        {
            id: "004",
            profileImage: "./cam.jpg",
            staffname: "100",
            email: "kmc222@gmail.com",
            mobileNumber: "9133638759",
            requites: "10",
            dept: "Food and safety",
            role: "Order taker",
            status: "Active",
            sort: true
        },
        {
            id: "005",
            profileImage: "./cam.jpg",
            staffname: "100",
            email: "chow@gmail.com",
            mobileNumber: "9133638759",
            requites: "10",
            dept: "Food and safety",
            role: "Order taker",
            status: "Active",
            sort: true
        },
        {
            id: "006",
            profileImage: "./cam.jpg",
            staffname: "100",
            email: "sdsd2@gmail.com",
            mobileNumber: "9133638759",
            requites: "10",
            dept: "Food and safety",
            role: "Order taker",
            status: "Active",
            sort: true
        },
        {
            id: "007",
            profileImage: "./cam.jpg",
            staffname: "100",
            email: "plsd@gmail.com",
            mobileNumber: "9133638759",
            requites: "10",
            dept: "Food and safety",
            role: "Order taker",
            status: "Active",
            sort: true
        },
        ];

        return (
            <React.Fragment>
                <MetaTags>
                    <title>Blocks | EazyRooms - React Admin & Dashboard Template</title>
                </MetaTags>

                <Row>
                    <Col md={12}>
                        <Card>
                            <CardBody className="p-0">
                                <div className="table-responsive">
                                    <Table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Profile</th>
                                                <th>Staff Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                                <th>No of requisites</th>
                                                <th>Departments</th>
                                                <th>Role Assigned</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tablecolumns.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td><img src={item.floorName} width="40" heigh="35" /></td>
                                                        <td>{item.staffname}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.mobileNumber}</td>
                                                        <td>{item.requites}</td>
                                                        <td>{item.dept}</td>
                                                        <td>{item.role}</td>
                                                        <td>{item.status}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <i className="fas fa-pencil-alt edit-icons"></i>
                                                                <i className="fas fa-trash delete-icons" style={{ marginLeft: "4px" }}></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}

export default Staff
