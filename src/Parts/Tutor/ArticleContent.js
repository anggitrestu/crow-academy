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

function createData(name, data) {
  return { name, data };
}

const rows = [
  createData('Kategori', 'IT & DATA'),
  createData('Judul', 'Intro to machine learning'),
  createData('Posting Date', '17 Juli 2021, 10.00 WIB'),
  createData(
    'Isi Artikel',
    'Di era revolusi industri 4.0 ini sangat banyak menggunakan metode machine learning dalam pengolahan data'
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    '& TableBody': {
      '& TableRow': {
        '& TableCell': {
          borderStyle: 'none',
        },
      },
    },
  },
  tableRow: {
    borderStyle: 'none',
  },
});
export default function ArticleContent() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} lg={12}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
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
              Read Article
            </Button>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
