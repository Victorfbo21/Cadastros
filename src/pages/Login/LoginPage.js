import {
    Card,
    Checkbox,
    Grid,
    Box,
    Typography,
    FormControlLabel,
    FormGroup,
    styled,
    TextField,
    Button,
    CardContent,
    CardActions,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";


const GridContainer = styled(Grid)(({ theme }) => ({
    padding: "padding: 50px 50px 50px",
    minHeight: "100%",
    height: "100%",
    minWidth: "100%",
    width: "100%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#DEDDDC'
}));





const LoginPage = () => {
    const [mostraSenha, setmostraSenha] = useState(false)
    const clickSenha = () => setmostraSenha((show) => !show);
    return (
        <>
            <GridContainer container>
                <Card sx={{ borderRadius: '15px' }}>
                    <CardContent>
                        <Box justifyContent="center" display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" align="center" fontFamily="JetBrains Mono"> Entre  </Typography>
                        </Box>
                        <form>
                            <Box justifyContent="center" display="flex" flexDirection="column" gap={2}>

                                <TextField
                                    label="E-mail"
                                    type="email"
                                >
                                    Email
                                </TextField>

                                <OutlinedInput
                                    sx={{ marginTop: '20px' }}
                                    id="outlined-adornment-password"
                                    placeholder="Digite sua Senha"
                                    type={mostraSenha ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={clickSenha}
                                                edge="end"
                                            >
                                                {mostraSenha ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Box>
                        </form>

                    </CardContent>

                    <CardActions>
                        <Box alignItems="center" justifyContent="center" display="flex" minWidth="100%" flexDirection="column">
                            <Button type="submit" variant="outlined" sx={{ marginBottom: "10px", fontFamily: "JetBrains Mono" }} >
                                Entrar
                            </Button>
                            <FormGroup>
                                <FormControlLabel fontFamily="JetBrains Mono" control={<Checkbox defaultChecked />} label="Lembrar de mim?" />
                            </FormGroup>
                        </Box>
                    </CardActions>


                    <Box display="flex" alignItems="center" justifyContent="center" sx={{ m: 2 }} flexGrow={1}>
                        <Typography align="center" fontFamily="JetBrains Mono"> Não Possui Conta?</Typography>
                        <Button sx={{ marginLeft: "15px", fontFamily: "JetBrains Mono" }}> Criar Conta</Button>
                    </Box>
                </Card>
            </GridContainer>

        </>
    )
}

export default LoginPage