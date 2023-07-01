import React from "react";
import hero_image from "../../images/hero_image.png";
import { Paper, Typography, Divider } from "@material-ui/core/";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography className={classes.heading} variant="h4" gutterBottom>
            <FormatListNumberedRoundedIcon
              className={classes.task_icon}
              fontSize="large"
            />
            Welcome to the Aspa Tasks
          </Typography>

          <Typography gutterBottom variant="body1" color="textSecondary">
            This application has been developed exclusively for Aspire users,
            enabling them to seamlessly generate, modify, and remove their
            tasks. Users are empowered to conveniently showcase their completed
            tasks as cards within the application, thereby facilitating
            visibility and engagement among other users.
          </Typography>

          <Divider className={classes.divider} />

          <Typography variant="body1" color="textSecondary">
            I hope that this application will be favorably received by the
            discerning members of Aspire, representing a valuable tool that
            offers significant advantages. With a focus on sophistication and
            user-centric design, our aim is to provide an elevated experience
            that addresses their specific requirements.
          </Typography>

          <Divider className={classes.divider} />

          <Typography className={classes.subtitle} gutterBottom variant="body1">
            You can now go to the apply page to publish your first task card.
          </Typography>

          <Divider className={classes.divider} />

          <Typography variant="body2">🔹 Created by: Hussam Odeh 🔹</Typography>
        </div>

        <div className={classes.media}>
          <img src={hero_image} alt="" />
        </div>
      </div>
    </Paper>
  );
};

export default Home;
