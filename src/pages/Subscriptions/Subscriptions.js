import React, { Component } from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags'

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
    PaginationProvider, PaginationListStandalone,
    SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../Bookings/bookings.scss";

// Table data
const products = [

    { "id": 1, "nameofpoc": "Airi Satou", "contact": "Accountant", "hotelname": "Tokyo", "noofrooms": "33", "plan": "2008/11/28", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$162,700" },

    { "id": 2, "nameofpoc": "Angelica Ramos", "contact": "Chief Executive Officer (CEO)", "hotelname": "London", "noofrooms": "47", "plan": "2009/10/09", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$1,200,000" },

    { "id": 3, "nameofpoc": "Ashton Cox", "contact": "Junior Technical Author", "hotelname": "San Francisco", "noofrooms": "66", "plan": "2009/01/12", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$86,000" },

    { "id": 4, "nameofpoc": "Bradley Greer", "contact": "Software Engineer", "hotelname": "London", "noofrooms": "41", "plan": "2012/10/13", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$132,000" },

    { "id": 5, "nameofpoc": "Brenden Wagner", "contact": "Software Engineer", "hotelname": "San Francisco", "noofrooms": "28", "plan": "2011/06/07", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$206,850" },

    { "id": 6, "nameofpoc": "Brielle Williamson", "contact": "Integration Specialist", "hotelname": "New York", "noofrooms": "61", "plan": "2012/12/02", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$372,000" },

    { "id": 7, "nameofpoc": "Bruno Nash", "contact": "Software Engineer", "hotelname": "London", "noofrooms": "38", "plan": "2011/05/03", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$163,500" },

    { "id": 8, "nameofpoc": "Caesar Vance", "contact": "Pre-Sales Support", "hotelname": "New York", "noofrooms": "21", "plan": "2011/12/12", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$106,450" },

    { "id": 9, "nameofpoc": "Cara Stevens", "contact": "Sales Assistant", "hotelname": "New York", "noofrooms": "46", "plan": "2011/12/06", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$145,600" },

    { "id": 10, "nameofpoc": "Cedric Kelly", "contact": "Senior Javascript Developer", "hotelname": "Edinburgh", "noofrooms": "22", "plan": "2012/03/29", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$433,060" },

    { "id": 11, "nameofpoc": "Marshall", "contact": "Regional Director", "hotelname": "San Francisco", "noofrooms": "36", "plan": "2008/10/16", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$470,600" },

    { "id": 12, "nameofpoc": "Hurst", "contact": "Javascript Developer", "hotelname": "San Francisco", "noofrooms": "39", "plan": "2009/09/15", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$205,500" },

    { "id": 13, "nameofpoc": "Rios", "contact": "Personnel Lead", "hotelname": "Edinburgh", "noofrooms": "35", "plan": "2012/09/26", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$217,500" },

    { "id": 14, "nameofpoc": "Snider", "contact": "Customer Support", "hotelname": "New York", "noofrooms": "27", "plan": "2011/01/25", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$112,000" },

    { "id": 15, "nameofpoc": "Wilder", "contact": "Sales Assistant", "hotelname": "Sidney", "noofrooms": "23", "plan": "2010/09/20", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$85,600" },

    { "id": 16, "nameofpoc": "Camacho", "contact": "Support Engineer", "hotelname": "San Francisco", "noofrooms": "47", "plan": "2009/07/07", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$87,500" },

    { "id": 17, "nameofpoc": "Green", "contact": "Chief Operating Officer (COO)", "hotelname": "San Francisco", "noofrooms": "48", "plan": "2010/03/11", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$850,000" },

    { "id": 18, "nameofpoc": "Winters", "contact": "Accountant", "hotelname": "Tokyo", "noofrooms": "63", "plan": "2011/07/25", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$170,750" },

    { "id": 19, "nameofpoc": "Cortez", "contact": "Team Leader", "hotelname": "San Francisco", "noofrooms": "22", "plan": "2008/10/26", "address": "Hyd Madhapur", "planstartdate": "12/09/2021", "status": "Active", "action": "$235,500" }

];

class Subscriptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            sizePerPage: 10,
            productData: products
        }
    }

    render() {
        const columns = [{
            dataField: 'id',
            text: 'Id',
            sort: true
        }, {
            dataField: 'nameofpoc',
            text: 'Name of Poc',
            sort: true
        }, {
            dataField: 'contact',
            text: 'contact',
            sort: true
        }, {
            dataField: 'hotelname',
            text: 'Hotel Name',
            sort: true
        }, {
            dataField: 'noofrooms',
            text: 'No Of Rooms',
            sort: true
        }, {
            dataField: 'plan',
            text: 'Plan',
            sort: true
        }, {
            dataField: 'address',
            text: 'Address',
            sort: true
        }, {
            dataField: 'planstartdate',
            text: 'Plan Start Date',
            sort: true
        }, {
            dataField: 'status',
            text: 'Status',
            sort: true
        }, {
            dataField: 'action',
            text: 'Action',
            sort: true
        }

        ];

        const defaultSorted = [{
            dataField: 'id',
            order: 'asc'
        }];

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

        const { SearchBar } = Search;

        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Subscriptions | EazyRooms - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <div className="container-fluid">
                        <Breadcrumbs title="Tables" breadcrumbItem="Subscriptions" />

                        <Row>
                            <Col className="col-12">
                                <Card>
                                    <CardBody>
                                        {/* <CardTitle className="h4">Default Datatable </CardTitle> */}
                                        {/* <p className="card-title-desc">
                                            react-bootstrap-table-next plugin has most features enabled by default,
                                            so all you need to do to use it with your own tables is to
                                            call the construction function:{" "}
                                            <code>react-bootstrap-table-next </code>.
                                        </p> */}
                                        <PaginationProvider
                                            pagination={paginationFactory(pageOptions)}
                                            keyField='id'
                                            columns={columns}
                                            data={this.state.productData}
                                        >
                                            {({ paginationProps, paginationTableProps }) => (
                                                <ToolkitProvider
                                                    keyField='id'
                                                    columns={columns}
                                                    data={this.state.productData}
                                                    search
                                                >
                                                    {toolkitProps => (
                                                        <React.Fragment>

                                                            <Row className="mb-2">
                                                                <Col md="4">
                                                                    <div className="search-box me-2 mb-2 d-inline-block">
                                                                        <div className="position-relative">
                                                                            <SearchBar
                                                                                {...toolkitProps.searchProps}
                                                                            />
                                                                            <i className="bx bx-search-alt search-icon" />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col xl="12">
                                                                    <div className="table-responsive">
                                                                        <BootstrapTable
                                                                            keyField={"id"}
                                                                            responsive
                                                                            bordered={false}
                                                                            striped={false}
                                                                            defaultSorted={defaultSorted}
                                                                            selectRow={selectRow}
                                                                            classes={
                                                                                "table align-middle table-nowrap"
                                                                            }
                                                                            headerWrapperClasses={"thead-light"}
                                                                            {...toolkitProps.baseProps}
                                                                            {...paginationTableProps}
                                                                        />

                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row className="align-items-md-center mt-30">
                                                                <Col className="inner-custom-pagination d-flex">
                                                                    <div className="d-inline">
                                                                        <SizePerPageDropdownStandalone
                                                                            {...paginationProps}
                                                                        />
                                                                    </div>
                                                                    <div className="text-md-right ms-auto">
                                                                        <PaginationListStandalone
                                                                            {...paginationProps}
                                                                        />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </React.Fragment>
                                                    )
                                                    }
                                                </ToolkitProvider>
                                            )
                                            }</PaginationProvider>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Subscriptions