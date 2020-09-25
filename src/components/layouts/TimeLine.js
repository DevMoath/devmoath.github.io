import React from "react";
import {Badge, Card, Col, Row} from "react-bootstrap";

const TimeLine = props => (
    <div className="d-flex mx-auto py-0">
        {
            props.project ?
                <div className="col-auto mx-0 px-0 flex-column d-flex">
                    <h4 className="m-0">
                        <span className="badge badge-pill py-2 bg-light border">{props.index + 1}</span>
                    </h4>
                    <div className="row h-100">
                        <div className={`col ${props.isLast ? "" : "border-right"}`}>&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div> :
                <div className="col-auto mr-0 pr-0 flex-column d-flex">
                    <Row>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                    <h4 className="mx-2 my-0">
                        <Badge variant={props.variant ?? "light"}
                               pill>&nbsp;</Badge>
                    </h4>
                    <Row>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                </div>
        }
        <div className="col-auto flex-fill px-0">
            <div className="card border-0 bg-transparent rounded">
                <Card className="bg-transparent border-0"
                      body>
                    {props.children}
                </Card>
            </div>
        </div>
    </div>
);

export default TimeLine;
