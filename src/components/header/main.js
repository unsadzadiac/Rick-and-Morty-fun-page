
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../../image/logo-rick-morty.jpg";

export const Header = () => {
     let navigate = useNavigate();

     const navigateCharactersPage = () => {
          navigate("/characters");
     };
     return (
          <Grid
          container
               item
               sx={{
                    width: "100%",
                    height: "8%",
                    boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.2)"
               }}>
               <Grid
                    container
                    columnSpacing={5}
                    sx={{ justifyContent: "center", alignItems: "center", direction: "row" }}>
                    <Grid item>
                         <img src={image}></img>
                    </Grid>
                    <Grid item>
                         <Grid container columnSpacing={5}>
                              <HedaerTypography onClickHandler={navigateCharactersPage} text={"Сharacters"} />
                         </Grid>
                    </Grid>
               </Grid>
          </Grid>
     );
};

const HedaerTypography = ({ text, onClickHandler }) => {
     return (
          <Grid item onClick={onClickHandler}>
               <Typography fontFamily="Shadows Into Light" fontSize="35px" sx={{cursor:'pointer',"&:hover":{borderBottom:'1px solid black'}}}>
                    {text}
               </Typography>
          </Grid>
     );
};
