import { Card, CardActions, CardContent, Typography } from "@mui/material"
import ListaEquipoIntegrantes from "./ListaEquipoIntegrantes"

const CardEquipo = (props) => {
    return <div>
    <Card variant="outlined">
        <CardContent>
            <Typography variant="h5" component="div">
                {props.nombreEquipo}
            </Typography>
            <ListaEquipoIntegrantes integrantes={props.listaIntegrantes}/>
        </CardContent>
        <CardActions></CardActions>
    </Card>
    </div>
}

export default CardEquipo