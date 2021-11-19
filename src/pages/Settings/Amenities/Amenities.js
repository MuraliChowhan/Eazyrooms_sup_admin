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

class Amenities extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const tablecolumns = [{
            image: "./cam.jpg",
            name: "xyz",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        }, {
            image: "./cam.jpg",
            name: "yzx",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        }, {
            image: "./cam.jpg",
            name: "zxy",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            image: "./cam.jpg",
            name: "yxz",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            image: "./cam.jpg",
            name: "yzx",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            image: "./cam.jpg",
            name: "yxz",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            image: "./cam.jpg",
            name: "xyz",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
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
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary" style={{ background: "#556ee6" }}>
                                        <i className="bx bx-plus" />
                                    </button>
                                </div>
                                <div className="table-responsive">
                                    <Table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Status</th>
                                                <th>Created By</th>
                                                <th>Created Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tablecolumns.map((item, index) =>
                                                    <tr key={index}>
                                                        <td><img src={item.image} className="rounded" width="40" height="30" /></td>
                                                        <td>{item.name}</td>
                                                        <td>{item.status}</td>
                                                        <td>{item.createdBy}</td>
                                                        <td>{item.createdStatus}</td>
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

export default Amenities
