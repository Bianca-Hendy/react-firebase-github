import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { getTarefasFirebase } from '../../servicos/TarefaService';

function Home() {

    const [listaObjetos, setListaObjetos] = useState([
        
    ]);

    useEffect(() => {
        getTarefasFirebase(setListaObjetos);
    }, []);
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h5" component="div">
                Trabalho LPE
            </Typography>
            {listaObjetos.length === 0 && <Typography variant="h5" component="div">
                Nenhum registro encontrado
            </Typography>}

            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}

            <Grid container spacing={2}>
                {listaObjetos.length > 0 && (
                    listaObjetos.map(objeto => (
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}
                            key={objeto.id}>
                            <Card sx={{ minWidth: 50 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {objeto.Nome}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {objeto.Local}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {objeto.Status}
                                    </Typography>
                                    <Typography variant="h7" component="div">
                                        {objeto.usuario}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {objeto.email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))

                )}
            </Grid>

        </div>
    )
}

export default Home;