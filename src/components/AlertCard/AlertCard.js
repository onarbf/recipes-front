import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertCard = function(props){
    let alertMessage = props.alertMessage || 'Whoops, something went wrong...';
        let alertVariant = props.alertVariant || 'warning';
        return <Alert variant={alertVariant}>
            {alertMessage}
        </Alert>
}

export default AlertCard;