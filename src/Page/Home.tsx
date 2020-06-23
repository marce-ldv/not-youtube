import React, {FunctionComponent} from 'react';
import {
  Avatar, Card, CardContent, CardHeader, Grid, IconButton
}                                 from '@material-ui/core';
import MoreVertIcon               from '@material-ui/icons/MoreVert';
import Paella                     from './paella.jpeg'
import Navbar
                                  from '../Components/Representation/Organism/Navbar';
import homePageTemplate
                                  from '../Components/Representation/Template/HomePageTemplate';


interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = () => {
  const {containerHome, card} = homePageTemplate();

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
      <Navbar/>
      <Grid item xs={12} className={containerHome}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((value, key) => (
          <React.Fragment key={key}>
            {renderCard()}
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
