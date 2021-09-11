import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Breadcrumb from 'assets/elements/Breadcumb/Breadcrumb';
import ArticleContent from 'Parts/Tutor/ArticleContent';
import Copyright from 'Parts/Copyright';
import SidebarDashboard from 'Parts/Dashboard/SidebarDashboard';
import { useLocation } from 'react-router-dom';
import KelasContent from 'Parts/Tutor/KelasContent';
import { listSideBar } from './listSideBar';
import { useStyles } from './Stayle';

const breadcrumb = [
  { pageTitle: `Artikel`, pageHref: `/tutor/beranda-artikel` },
  { pageTitle: `Kelas`, pageHref: `/tutor/beranda-kelas` },
];

export default function Beranda() {
  let location = useLocation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SidebarDashboard ListItem={listSideBar}></SidebarDashboard>
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
              <ArticleContent></ArticleContent>
            ) : (
              <KelasContent></KelasContent>
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
