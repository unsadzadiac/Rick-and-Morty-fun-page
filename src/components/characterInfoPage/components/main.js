import { Grid, LinearProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCharacterQuery } from "../../../api/characterApi";

export const Main = () => {
     let params = useParams();

     const { data: character, isFetching: isCharacterFetching } = useGetCharacterQuery(params.id);

     console.log(character);

     if (isCharacterFetching) {
          return <LinearProgress />;
     }

     return (
          
               <Grid container direction='row' justifyContent='center' alignItems='center' columnSpacing={5} marginTop='10%'>
                    <Grid
                         item
                         sx={{
                              width: "500px",
                              height: "450px",
                              padding: "0px",
                              overflow: "hidden",
                              position: "relative",
                              marginTop: "10px",
                              border: "2px solid black",
                         }}>
                         <img
                              src={character.image}
                              style={{
                                   width: "100%",
                                   height: "100%",
                                   objectFit: "cover",
                                   position: "absolute",
                                   top: "0px",
                                   left: "0px",
                              }}></img>
                    </Grid>
                    <Grid item>
                         <Grid container direction='column' rowSpacing={3}>
                              <Info info={'Name: '} text={character.name}></Info>
                              <Info info={'Status: '} text={character.status}></Info>
                              <Info info={'Species: '} text={character.species}></Info>
                              <Info info={'Gender: '} text={character.gender}></Info>
                              <Info info={'Location: '} text={character.location.name}></Info>
                              <Info info={'Number of episodes: '} text={character.episode.length}></Info>
                         </Grid>
                    </Grid>
               </Grid>
                   
          
     );
};

const Info = ({ text, info }) => {
     return (
          <Grid item>
               <Typography fontFamily="Shadows Into Light" fontSize="30px">
                    <b>{info}</b>{text}
               </Typography>
          </Grid>
     );
};
