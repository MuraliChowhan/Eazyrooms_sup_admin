import React, { Component } from "react"
import MetaTags from 'react-meta-tags'
import { Card, CardBody, Table } from "reactstrap"
import { Button, Modal } from "react-bootstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../Bookings/bookings.scss";
import './Plan.css';
// Table data
const products = [

    { "id": 1, "name": "Airi Satou", "roomnumber": "Accountant", "request": "Tokyo", "status": "33", "requestdate": "2008/11/28", "action": "$162,700" },

    { "id": 2, "name": "Angelica Ramos", "roomnumber": "Chief Executive Officer (CEO)", "request": "London", "status": "47", "requestdate": "2009/10/09", "action": "$1,200,000" },

    { "id": 3, "name": "Ashton Cox", "roomnumber": "Junior Technical Author", "request": "San Francisco", "status": "66", "requestdate": "2009/01/12", "action": "$86,000" },

    { "id": 4, "name": "Bradley Greer", "roomnumber": "Software Engineer", "request": "London", "status": "41", "requestdate": "2012/10/13", "action": "$132,000" },

    { "id": 5, "name": "Brenden Wagner", "roomnumber": "Software Engineer", "request": "San Francisco", "status": "28", "requestdate": "2011/06/07", "action": "$206,850" },

    { "id": 6, "name": "Brielle Williamson", "roomnumber": "Integration Specialist", "request": "New York", "status": "61", "requestdate": "2012/12/02", "action": "$372,000" },

    { "id": 7, "name": "Bruno Nash", "roomnumber": "Software Engineer", "request": "London", "status": "38", "requestdate": "2011/05/03", "action": "$163,500" },

    { "id": 8, "name": "Caesar Vance", "roomnumber": "Pre-Sales Support", "request": "New York", "status": "21", "requestdate": "2011/12/12", "action": "$106,450" },

    { "id": 9, "name": "Cara Stevens", "roomnumber": "Sales Assistant", "request": "New York", "status": "46", "requestdate": "2011/12/06", "action": "$145,600" },

    { "id": 10, "name": "Cedric Kelly", "roomnumber": "Senior Javascript Developer", "request": "Edinburgh", "status": "22", "requestdate": "2012/03/29", "action": "$433,060" },

    { "id": 11, "name": "Marshall", "roomnumber": "Regional Director", "request": "San Francisco", "status": "36", "requestdate": "2008/10/16", "action": "$470,600" },

    { "id": 12, "name": "Hurst", "roomnumber": "Javascript Developer", "request": "San Francisco", "status": "39", "requestdate": "2009/09/15", "action": "$205,500" },

    { "id": 13, "name": "Rios", "roomnumber": "Personnel Lead", "request": "Edinburgh", "status": "35", "requestdate": "2012/09/26", "action": "$217,500" },

    { "id": 14, "name": "Snider", "roomnumber": "Customer Support", "request": "New York", "status": "27", "requestdate": "2011/01/25", "action": "$112,000" },

    { "id": 15, "name": "Wilder", "roomnumber": "Sales Assistant", "request": "Sidney", "status": "23", "requestdate": "2010/09/20", "action": "$85,600" },

    { "id": 16, "name": "Camacho", "roomnumber": "Support Engineer", "request": "San Francisco", "status": "47", "requestdate": "2009/07/07", "action": "$87,500" },

    { "id": 17, "name": "Green", "roomnumber": "Chief Operating Officer (COO)", "request": "San Francisco", "status": "48", "requestdate": "2010/03/11", "action": "$850,000" },

    { "id": 18, "name": "Winters", "roomnumber": "Accountant", "request": "Tokyo", "status": "63", "requestdate": "2011/07/25", "action": "$170,750" },

    { "id": 19, "name": "Cortez", "roomnumber": "Team Leader", "request": "San Francisco", "status": "22", "requestdate": "2008/10/26", "action": "$235,500" }

];

class Plan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            sizePerPage: 10,
            productData: products,
            show: false
        }
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal() {
        this.setState({ show: !this.state.show });
    }

    render() {

        const planData = [
            {
                header: "Title",
                title: "Large",
                price: "30",
                billngType: "One time",
                feature: [
                    {
                        storage: "Storage",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Projects",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Tasks",
                        unlimited: "Unlimited"
                    }
                ],
                module: [
                    {
                        moduleName: "Project",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Tasks",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Gantt",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "TimeSheet",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Team members",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Clients",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Invoices",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "Payments",
                        checkIcon: "far fa-times-circle"
                    }
                ],
                edit: "far fa-edit",
                delete: "fas fa-trash",
                serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
            },
            {
                header: "Price (USD)-USD",
                title: "Large",
                price: "30",
                billngType: "One time",
                feature: [
                    {
                        storage: "Storage",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Projects",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Tasks",
                        unlimited: "Unlimited"
                    }
                ],
                module: [
                    {
                        moduleName: "Project",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Tasks",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Gantt",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "TimeSheet",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Team members",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Clients",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Invoices",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "Payments",
                        checkIcon: "far fa-times-circle"
                    }
                ],
                edit: "far fa-edit",
                delete: "fas fa-trash",
                serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
            },
            {
                header: "Billing Type",
                title: "Large",
                price: "30",
                billngType: "One time",
                feature: [
                    {
                        storage: "Storage",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Projects",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Tasks",
                        unlimited: "Unlimited"
                    }
                ],
                module: [
                    {
                        moduleName: "Project",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Tasks",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Gantt",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "TimeSheet",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Team members",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Clients",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Invoices",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "Payments",
                        checkIcon: "far fa-times-circle"
                    }
                ],
                edit: "far fa-edit",
                delete: "fas fa-trash",
                serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
            },
            {
                header: "Feature",
                title: "Large",
                price: "30",
                billngType: "One time",
                feature: [
                    {
                        storage: "Storage",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Projects",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Tasks",
                        unlimited: "Unlimited"
                    }
                ],
                module: [
                    {
                        moduleName: "Project",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Tasks",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Gantt",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "TimeSheet",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Team members",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Clients",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Invoices",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "Payments",
                        checkIcon: "far fa-times-circle"
                    }
                ],
                edit: "far fa-edit",
                delete: "fas fa-trash",
                serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
            },
            {
                header: "Modules",
                title: "Large",
                price: "30",
                billngType: "One time",
                feature: [
                    {
                        storage: "Storage",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Projects",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Tasks",
                        unlimited: "Unlimited"
                    }
                ],
                module: [
                    {
                        moduleName: "Project",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Tasks",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Gantt",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "TimeSheet",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Team members",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Clients",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Invoices",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "Payments",
                        checkIcon: "far fa-times-circle"
                    }
                ],
                edit: "far fa-edit",
                delete: "fas fa-trash",
                serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
            },
            {
                header: "Action",
                title: "Large",
                price: "30",
                billngType: "One time",
                feature: [
                    {
                        storage: "Storage",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Projects",
                        unlimited: "Unlimited"
                    },
                    {
                        storage: "Tasks",
                        unlimited: "Unlimited"
                    }
                ],
                module: [
                    {
                        moduleName: "Project",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Tasks",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Gantt",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "TimeSheet",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Team members",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Clients",
                        checkIcon: "fas fa-check-circle"
                    },
                    {
                        moduleName: "Invoices",
                        checkIcon: "far fa-times-circle",
                    },
                    {
                        moduleName: "Payments",
                        checkIcon: "far fa-times-circle"
                    }
                ],
                edit: "far fa-edit",
                delete: "fas fa-trash",
                serviceTypes: ["Alexa", "whatsapp", "VIP Support"]
            },

        ];

        const pageOptions = {
            sizePerPage: 10,
            totalSize: products.length, // replace later with size(customers),
            custom: true,
        }

        // Custom Pagination Toggle
        const sizePerPageList = [
            { text: '5', value: 5 },
            { text: '10', value: 10 },
            { text: '15', value: 15 },
            { text: '20', value: 20 },
            { text: '25', value: 25 },
            { text: 'All', value: (this.state.productData).length }];

        // Select All Button operation
        const selectRow = {
            mode: 'checkbox'
        }

        // const { SearchBar } = Search;

        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Plan </title>
                    </MetaTags>
                    <div className="container-fluid">
                        <Breadcrumbs title="Tables" breadcrumbItem="Requests" />
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Price (USD)-USD</th>
                                                <th>Billing Type</th>
                                                <th>Feature</th>
                                                <th>Modules</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                planData.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.billngType}</td>
                                                        <td style={{ paddingBottom: "100px" }}>{item?.feature?.map((doc, index) =>
                                                            <div key={index}>
                                                                <div className="storage-text">{doc.storage}</div>
                                                                <div className="limited-text">{doc.unlimited}</div>
                                                            </div>
                                                        )}</td>
                                                        <td>{item?.module?.map((doc, index) =>
                                                            <div key={index}>
                                                                <div className="my-1">
                                                                    {
                                                                        doc.checkIcon === "far fa-times-circle" ?
                                                                            <><i className={doc.checkIcon} style={{ color: "red", fontSize: "20px", marginRight: "4px" }}></i>  {doc.moduleName}</>
                                                                            :
                                                                            <><i className={doc.checkIcon} style={{ color: "#63ed7a", fontSize: "20px", marginRight: "4px" }}></i>
                                                                                {doc.moduleName}</>
                                                                    }

                                                                </div>
                                                            </div>
                                                        )}</td>

                                                        <td>
                                                            <div className="d-flex">
                                                                <i className="fas fa-pencil-alt edit-icons"></i>
                                                                <i className="fas fa-trash delete-icons" style={{ marginLeft: "4px" }}
                                                                    onClick={this.handleModal}
                                                                ></i>

                                                                <Modal show={this.state.show} onHide={() => this.handleModal}>
                                                                    <Modal.Header>
                                                                      Delete
                                                                    </Modal.Header>

                                                                    <Modal.Body>
                                                                        <div className="d-flex justify-content-center text-center">
                                                                            {/* <div className="delete-icon-bg text-center mb-3">
              <i className="fas fa-trash text-white w-100"></i>
            </div> */}
                                                                            <i className="fas fa-exclamation deleteIcon"></i>
                                                                            {/* <i className="fas fa-exclamation-circle" style={{ fontSize: "80px", color: "#ce2837" }}></i> */}
                                                                        </div>
                                                                        <div className="text-center delete-text mb-3">
                                                                            Are you sure.?
                                                                        </div>

                                                                        <div className="delete-text-desc">
                                                                            You want to delete this Plan? All users under this plan will be added to the Default Plan.
                                                                        </div>
                                                                    </Modal.Body>

                                                                    <Modal.Footer>
                                                                        <Button className="btn danger-button" onClick={() => this.handleModal()}>Close</Button>
                                                                    </Modal.Footer>
                                                                </Modal>
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
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Plan