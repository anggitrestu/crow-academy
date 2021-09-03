import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Button } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>:</TableCell>
              <TableCell align="left">{row.data}</TableCell>
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
  );
}
