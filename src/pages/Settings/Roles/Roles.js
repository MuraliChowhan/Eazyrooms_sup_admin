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
import './Roles.css';

class Roles extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const roleAndPermissionBody = [
            {
                id: "EZY210",
                roleName: "Employee",
                permissions: [
                    {
                        perName: "Update profile",
                    },
                    {
                        perName: "Change password",
                    },
                    {
                        perName: "Manage Lead",
                    },
                    {
                        perName: "Create Lead",
                    },
                    {
                        perName: "Delete Lead",
                    },
                    {
                        perName: "View Lead",
                    },
                    {
                        perName: "Delete product",
                    },
                    {
                        perName: "Edit Product",
                    },
                    {
                        perName: "Edit MDF",
                    },
                    {
                        perName: "Add MDF",
                    },
                    {
                        perName: "View MDF",
                    },
                    {
                        perName: "Create Invoice",
                    },
                    {
                        perName: "Delete Invoice",
                    },
                    {
                        perName: "Update Invoice",
                    },
                    {
                        perName: "Add Tax",
                    },
                    {
                        perName: "Edit Tax",
                    },
                    {
                        perName: "Delete Tax",
                    },
                    {
                        perName: "Create Deal",
                    },
                    {
                        perName: "Edit Deal",
                    },
                    {
                        perName: "Delet Deal",
                    },
                    {
                        perName: "Move MDF",
                    },
                    {
                        perName: "Create inovice payment",
                    },
                    {
                        perName: "Manage Invoice payment",
                    },
                ],
                edit: "far fa-edit",
                delete: "far fa-trash-alt",
            }

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
                                                <th>Roles</th>
                                                <th>Permissions</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                roleAndPermissionBody.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>
                                                            <ul className="list-unstyled" style={{ width: "100%" }}>
                                                                <div className="row">
                                                                    {item?.permissions?.map((item, index) => (
                                                                        <div key={index} className="custom-columns col-sm-12 col-md-2 col-lg-2" style={{ marginRight: "12px" }}>
                                                                            {
                                                                                <li
                                                                                    className="permissionTypes text-truncate mt-2 mb-2"
                                                                                    style={{ marginRight: "3px" }}
                                                                                    key={index} >
                                                                                    {" "}
                                                                                    {item?.perName}
                                                                                </li>
                                                                            }
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </ul>
                                                        </td>
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

export default Roles
