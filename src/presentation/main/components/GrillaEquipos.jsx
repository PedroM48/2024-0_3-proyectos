import { Grid } from "@mui/material"
import CardEquipo from "./CardEquipo";

const GrillaEquipos = (props) => {
    return <Grid container spacing={2}>
        {
            props.listaEquipos.map((equipo)=>{
                return <Grid xs={4}>
                    <CardEquipo nombreEquipo={equipo.nombre}
                        listaIntegrantes={equipo.integrantes} />
                </Grid>
            })
        }
    </Grid>
}

export default GrillaEquipos