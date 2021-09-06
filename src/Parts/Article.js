import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Button } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    // borderBottom: 'none',
    borderStyle: 'none',
  },
});

function createData(name, data) {
  return { name, data };
}

const rows = [
  createData('Jenis Kelas', 'Gratis'),
  createData('Topik Pembelajaran', 'IT & DATA'),
  createData('Judul Kelas', 'Programing with python'),
  createData('Jadwal Kelas', '17 Juli 2021, 10.00 WIB'),
  createData(
    'Deskripsi Kelas',
    'Pythona adalah bahasa yang banyak digunakan untuk pengolahan data yang sangat  besar karna kemampuan nya yang sangat bagus'
  ),
];

export default function Article() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} lg={12}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableBody style={{ borderStyle: 'none' }}>
            {rows.map((row) => (
              <TableRow key={row.name} style={{ borderStyle: 'none' }}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ borderStyle: 'none' }}
                >
                  {row.name}
                </TableCell>
                <TableCell style={{ borderStyle: 'none' }}>:</TableCell>
                <TableCell align="left" style={{ borderStyle: 'none' }}>
                  {row.data}
                </TableCell>
              </TableRow>
            ))}
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10, marginBottom: 10, marginLeft: 10 }}
            >
              Join Class
            </Button>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
