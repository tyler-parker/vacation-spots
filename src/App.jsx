import React from "react";
import vacationSpots from './vacationSpots'
import { CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import useStyles from './styles.js'
import GridItem from "./GridItem";
import Footer from './Footer'
import Title from './Title'
import ToolBar from './ToolBar'

const App = () => {
    const classes = useStyles();
    const spotComponent = vacationSpots.map(item => <GridItem key={item.id} item={item}></GridItem>)
    return (
        <div>
            <CssBaseline />
            <ToolBar />
            <main>
                <Title />
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {spotComponent}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default App