import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Breadcrumb from 'assets/elements/Breadcumb/Breadcrumb';
import ArticleContent from 'Parts/Tutor/ArticleContent';
import Copyright from 'Parts/Copyright';
import SidebarDashboard from 'Parts/Dashboard/SidebarDashboard';
import { listSideBar } from './listSideBar';
import { useStyles } from './Stayle';

const breadcrumbPayload = [
  { pageTitle: `Artikel`, pageHref: `/tutor/beranda-artikel` },
  { pageTitle: `Kelas`, pageHref: `/tutor/beranda-kelas` },
];

export default function BerandaArtikel(props) {
  const { root, content, container, breadcrumb } = useStyles();
  console.log(props);
  return (
    <div className={root}>
      <SidebarDashboard ListItem={listSideBar}></SidebarDashboard>
      <main className={content}>
        <Container maxWidth="lg" className={container}>
          <br />
          <br />
          <br />
          <Breadcrumb
            data={breadcrumbPayload}
            className={breadcrumb}
          ></Breadcrumb>
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            {/* content */}
            <ArticleContent></ArticleContent>
            {/* content */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
