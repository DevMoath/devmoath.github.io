const TimeLine = (props) => (
    <div className="d-flex mx-auto py-0">
        <div className="col-auto mr-0 pr-0 flex-column d-flex">
            <div className="row">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h4 className="mx-2 my-0">
                <span className="badge badge-light badge-pill">&nbsp;</span>
            </h4>
            <div className="row">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
        <div className="col-auto flex-fill px-0 pb-4">
            <div className="card border-0 bg-transparent rounded">
                <div className="card card-body bg-transparent border-0">{props.children}</div>
            </div>
        </div>
    </div>
);

export default TimeLine;
