import { Grid } from "@mui/material";
import { Header } from "../header/main";
import { CharList } from "./components/charList/charList";
import { RandomChar } from "./components/randomChar/randomChar";

export const CharacterPage = () => {
     return (
          <Grid container height={'100%'} >
               <Header />
               <Grid container direction="row" sx={{ background: "#beeea6" }}>
                    <CharList />
                    <RandomChar />
               </Grid>
          </Grid>
     );
};
