import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Breadcrumb from 'assets/elements/Breadcumb/Breadcrumb';
import Article from 'Parts/Article';
import Copyright from 'Parts/Copyright';
import SidebarDashboard from 'Parts/Dashboard/SidebarDashboard';

const breadcrumb = [
  { pageTitle: 'Artikel', pageHref: '' },
  { pageTitle: 'Kelas', pageHref: '' },
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

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SidebarDashboard ListItem={ListItem}></SidebarDashboard>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Breadcrumb data={breadcrumb}></Breadcrumb>
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            <Article></Article>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
