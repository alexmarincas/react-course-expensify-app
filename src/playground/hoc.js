import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>This is the info: {props.info}</p>
    </div>
);

const WithAdminInfo = (WrapperComponent) => {
    return(props) => (
        <div>
            {props.isAdmin && <p>Admin</p>}
            <WrapperComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props)=>(
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Nu ai suficiente privilegii pentru a vedea aceste informatii</p>
            )}
        </div>
    );
}

// const AdminInfo = WithAdminInfo(Info);
const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAuthenticated={false} info="test info" />, document.getElementById('app'));