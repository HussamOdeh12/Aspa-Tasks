import React, { useState } from "react";
import Form from "../Form/Form";
import Cards from "../Cards/Cards";
import ElementSearch from "../ElementSearch/ElementSearch";
import { ToastContainer } from "react-toastify";
import { Grow, Grid } from "@material-ui/core";

const ApplyCards = () => {
  // currentId + setCurrentId in ( ApplyCards.js ) because it's the parent of form and cards.
  const [currentId, setCurrentId] = useState(null);

  return (
    <>
      <Grow in>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ElementSearch />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <Cards setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
      <ToastContainer newestOnTop={true} rtl={false} pauseOnFocusLoss={false} />
    </>
  );
};

export default ApplyCards;
