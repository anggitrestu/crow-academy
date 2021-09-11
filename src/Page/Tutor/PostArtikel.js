import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { listSideBar } from './listSideBar';
import Copyright from 'Parts/Copyright';
import SidebarDashboard from 'Parts/Dashboard/SidebarDashboard';
import PostArtikelContent from 'Parts/Tutor/PostArtikelContent';
import { useStyles } from './Stayle';

export default function PostArtikel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SidebarDashboard ListItem={listSideBar}></SidebarDashboard>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            {/* Content */}
            <PostArtikelContent></PostArtikelContent>
            {/* Content */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
