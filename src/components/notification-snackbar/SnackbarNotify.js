import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarNotify = (props) => {

    return (
        <>
            {props.type == "success" &&
                <Snackbar
                    open={props.open}
                    autoHideDuration={6000}
                    onClose={props.close}
                >
                    <Alert onClose={props.close} severity="success" sx={{ width: '100%' }}>
                        This is a success message! Note Created
                    </Alert>
                    {/* <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Note Created !
        </Alert> */}
                </Snackbar>
            }
        </>
    )
}

export default SnackbarNotify;