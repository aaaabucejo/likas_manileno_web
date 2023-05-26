import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "./alertdialog.scss"

function AlertDialog() {
  return (
    <div className='AlertDIalog'>
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert variant="filled" severity="error">
    incorrect credentials
    </Alert>
  </Stack>
  </div>
  );
}

export default AlertDialog