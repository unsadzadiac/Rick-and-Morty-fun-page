import { useState } from "react";
import { useGetCharacterQuery } from "../../../../api/characterApi";
import { Grid, LinearProgress, Typography } from "@mui/material";

export const RandomChar = () => {
     const [characterId, setCharacter] = useState(1);
     
     const { data: character, isFetching: isCharacterFetching } =
          useGetCharacterQuery(characterId);

          

     return (
          <Grid
               item
               container
               sx={{
                    marginTop: "30px",
                    border: "2px solid black",
                    height: "780px",
                    width: "30%",
                    justifyContent: "center",
                    borderRadius: "20px",
                    background: "#beeea6",
               }}>
               {isCharacterFetching ? (
                    <LinearProgress />
               ) : (
                    <>
                         <Grid
                              container
                              direction="column"
                              justifyContent="center"
                              alignItems="center"
                              rowSpacing={4}>
                              <Grid item>
                                   <Typography fontFamily="Shadows Into Light" fontSize="30px">
                                        <b>Random character</b>
                                   </Typography>
                              </Grid>
                              <Grid
                                   item
                                   sx={{
                                        padding: "0px",
                                        overflow: "hidden",
                                        position: "relative",
                                        width: "60%",
                                        height: "50%",
                                        border: "2px solid black",
                                        borderRadius: "25px",
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
                                   <Typography fontFamily="Shadows Into Light" fontSize="25px">
                                        <b>Name:</b> {character.name}
                                   </Typography>
                              </Grid>
                              <Grid item>
                                   <Typography fontFamily="Shadows Into Light" fontSize="25px">
                                        <b>Location:</b> {character.location.name}
                                   </Typography>
                              </Grid>
                              <Grid item>
                                   <Typography fontFamily="Shadows Into Light" fontSize="25px">
                                        <b>Status:</b> {character.status}
                                   </Typography>
                              </Grid>
                              <Grid item>
                                   <Grid
                                        container
                                        item
                                        sx={{
                                             borderRadius: "20px",
                                             border: "2px solid black",
                                             background: "#07afc5",
                                             height: "50px",
                                             width: "100px",
                                             justifyContent: "center",
                                             alignItems: "center",
                                             cursor: "pointer",
                                             "&:hover": {
                                                  transform: "scale(1.1)",
                                             },
                                             fontSize: "20px",
                                        }}
                                        onClick={() =>
                                             setCharacter(Math.floor(Math.random() * (826 - 1)) + 1)
                                        }>
                                        <Grid item>
                                             <Typography
                                                  fontFamily="Shadows Into Light"
                                                  fontSize="25px">
                                                  Try
                                             </Typography>
                                        </Grid>
                                   </Grid>
                              </Grid>
                         </Grid>
                    </>
               )}
          </Grid>
     );
};
