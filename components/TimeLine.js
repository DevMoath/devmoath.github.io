import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TimeLine = (props) => (
    <div className="d-flex mx-auto py-0">
        <div className="col-auto mr-0 pr-0 flex-column d-flex">
            <Row>
                <Col>&nbsp;</Col>
                <Col>&nbsp;</Col>
            </Row>
            <h4 className="mx-2 my-0">
                <Badge variant={props.variant ?? 'light'} pill>
                    &nbsp;
                </Badge>
            </h4>
            <Row>
                <Col>&nbsp;</Col>
                <Col>&nbsp;</Col>
            </Row>
        </div>
        <div className="col-auto flex-fill px-0 pb-4">
            <div className="card border-0 bg-transparent rounded">
                <Card className="bg-transparent border-0" body>
                    {props.children}
                </Card>
            </div>
        </div>
    </div>
);

export default TimeLine;
