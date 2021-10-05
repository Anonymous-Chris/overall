import React from 'react'
import styled from "styled-components";
import LazyImage from "./LazyImage";

const Grid = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  grid-auto-rows: minmax(48vh, auto);

`;

const LazyLoading = () => {
    return (
        <Grid>
        {[...Array(50).keys()].map(i => (
          <LazyImage
            key={i}
            src={`https://picsum.photos/932/455?random=${i}`}
            alt={`Random image ${i}`}
          />
        ))}
      </Grid>
    )
}

export default LazyLoading
