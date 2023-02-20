import { Grid, LinearProgress, Typography } from "@mui/material";
import { useGetCharactersQuery } from "../../../../api/characterApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CharList = () => {
     let navigate = useNavigate();

     const [currentPage, setCurrentPage] = useState(1);

     const { data: characters, isFetching: isCharactersFetching } =
          useGetCharactersQuery(currentPage);

     const navigateItemsPage = (id) => {
          navigate("/character_page/" + id);
     };

     return (
          <Grid
               item
               sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "65%",
               }}>
               {isCharactersFetching ? (
                    <LinearProgress />
               ) : (
                    <>
                         {characters?.results.map((i) => (
                              <Grid
                                   onClick={() => navigateItemsPage(i.id)}
                                   container
                                   item
                                   id={i.id}
                                   direction="column"
                                   justifyContent="center"
                                   alignItems="center"
                                   sx={{
                                        border: "2px solid black",
                                        width: "220px",
                                        height: "260px",
                                        margin: "30px 35px 30px 35px",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        background: "#eea15a",
                                        "&:hover": {
                                             transform: "scale(1.1)",
                                        },
                                   }}>
                                   <Grid
                                        item
                                        sx={{
                                             width: "180px",
                                             height: "180px",
                                             padding: "0px",
                                             overflow: "hidden",
                                             position: "relative",
                                             marginTop: "10px",
                                             border: "2px solid black",
                                             borderRadius: "10px",
                                        }}>
                                        <img
                                             src={i.image}
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
                                        <Typography
                                             fontFamily="Shadows Into Light"
                                             fontSize="20px"
                                             textAlign="center">
                                             {i.name}
                                        </Typography>
                                   </Grid>
                              </Grid>
                         ))}
                         <Grid container justifyContent="center" columnSpacing={3}>
                              <Grid item>
                                   {currentPage !== 1 && (
                                        <Grid onClick={() => setCurrentPage(currentPage - 1)}>
                                             <Typography
                                                  sx={{
                                                       fontSize: "20px",
                                                       fontFamily: "Shadows Into Light",
                                                       cursor: "pointer",
                                                       "&:hover": {
                                                            borderBottom: "1px solid black",
                                                       },
                                                  }}>
                                                  Prev page
                                             </Typography>
                                        </Grid>
                                   )}
                              </Grid>
                              <Grid item fontFamily="Shadows Into Light" fontSize="25px">
                                   {currentPage} of {characters.info.pages}
                              </Grid>
                              <Grid item onClick={() => setCurrentPage(currentPage + 1)}>
                                   <Typography
                                        sx={{
                                             fontSize: "20px",
                                             fontFamily: "Shadows Into Light",
                                             cursor: "pointer",
                                             "&:hover": { borderBottom: "1px solid black" },
                                        }}>
                                        Next page
                                   </Typography>
                              </Grid>
                         </Grid>
                    </>
               )}
          </Grid>
     );
};
