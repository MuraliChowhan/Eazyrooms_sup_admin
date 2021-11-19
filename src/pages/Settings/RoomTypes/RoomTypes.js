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

class RoomTypes extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const tablecolumns = [{
            roomName: "100",
            floorName: "2",
            blockName: "1",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        }, {
            roomName: "100",
            floorName: "2",
            blockName: "1",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        }, {
            roomName: "100",
            floorName: "2",
            blockName: "1",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            roomName: "100",
            floorName: "2",
            blockName: "1",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            roomName: "100",
            floorName: "2",
            blockName: "1",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            roomName: "100",
            floorName: "2",
            blockName: "1",
            status: "Active",
            createdBy: "12/02/2021",
            createdStatus: "12/02/2021",
            sort: true
        },
        {
            roomName: "100",
            floorName: "2",
            blockName: "1",
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
                                <div className="table-responsive">
                                    <Table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Room Type</th>
                                                <th>No of persons</th>
                                                <th>A/C</th>
                                                <th>Price</th>
                                                <th>Amenities Included</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tablecolumns.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{item.roomName}</td>
                                                        <td>{item.floorName}</td>
                                                        <td>{item.blockName}</td>
                                                        <td>{item.status}</td>
                                                        <td>{item.createdBy}</td>
                                                        <td>{item.createdStatus}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <i className="fas fa-pencil-alt edit-icons"></i>
                                                                <i className="fas fa-trash delete-icons" style={{ marginLeft:"4px" }}></i>
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

export default RoomTypes
