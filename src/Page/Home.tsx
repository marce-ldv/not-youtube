import {makeStyles, Styles} from '@material-ui/styles';

import React, {FunctionComponent} from 'react';
import homePageTemplate
                                  from '../Components/Representation/Template/HomePageTemplate';
import {
  Avatar, Card, CardContent, CardHeader, Grid, IconButton, Paper
}                                 from '@material-ui/core';
import MoreVertIcon               from '@material-ui/icons/MoreVert';
import CardMedia                  from '@material-ui/core/CardMedia';
import Paella                     from './paella.jpeg'
import Navbar
                                  from '../Components/Representation/Organism/Navbar';

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(homePageTemplate);

const Home: FunctionComponent<Props> = (props) => {
  const {containerHome, card} = useStyles();

  const renderCard = () => {
    return (
      <Card className={card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              YT
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon/>
            </IconButton>
          }
          title="Titulo del video"
          subheader="1.234.762 views - 5 hours ago"
        />
        <img src={Paella} alt={'img'}/>

        <CardContent>
          asdasd
        </CardContent>
      </Card>
    );
  }

  return (
    <Grid container>

      <Navbar />

      <Grid item xs={12} className={containerHome} spacing={4}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
          <>
            {renderCard()}
          </>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
