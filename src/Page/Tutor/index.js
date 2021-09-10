import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Breadcrumb from 'assets/elements/Breadcumb/Breadcrumb';
import Article from 'Page/Tutor/Article';
import Copyright from 'Parts/Copyright';
import SidebarDashboard from 'Parts/Dashboard/SidebarDashboard';
import { useLocation } from 'react-router-dom';
import Kelas from './Kelas';

const breadcrumb = [
  { pageTitle: `Artikel`, pageHref: `/tutor/beranda-artikel` },
  { pageTitle: `Kelas`, pageHref: `/tutor/beranda-kelas` },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  breadcrumb: {
    marginTop: '20px',
  },
}));

const ListItem = [
  { pageTitle: 'Beranda', pageHref: '', icon: '' },
  { pageTitle: 'Profil Saya', pageHref: '', icon: '' },
  { pageTitle: 'Buat Kelas Baru', pageHref: '', icon: '' },
  { pageTitle: 'Kelas Ajar Saya', pageHref: '', icon: '' },
  { pageTitle: 'Post Artikel', pageHref: '', icon: '' },
  { pageTitle: 'Artikel Saya', pageHref: '', icon: '' },
  { pageTitle: 'Sign Out', pageHref: '', icon: '' },
];

export default function Tutor() {
  let location = useLocation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SidebarDashboard ListItem={ListItem}></SidebarDashboard>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <br />
          <br />
          <br />
          <Breadcrumb
            data={breadcrumb}
            className={classes.breadcrumb}
          ></Breadcrumb>
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            {location.pathname === `/tutor/beranda-artikel` ? (
              <Article></Article>
            ) : (
              <Kelas></Kelas>
            )}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
