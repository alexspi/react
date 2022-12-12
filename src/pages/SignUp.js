import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import firebase from "../service/firebase";
import {Error} from "@material-ui/icons";

const SignUP = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (e) {
            console.log(e);
            setError(error.message);
        }

    }

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: "wrap",
            '&> :not(style)': {
                m: 1,
                width: 500,
                height: 500
            }
        }}>
            <form onSubmit={handleSubmit}>
                <Typography variant="h4">SignUp</Typography>
                <p>Insert email and password</p>
                <Paper>
                    <TextField
                        type="email"
                        placeholder="email"
                        name={"email"}
                        value={email}
                        onChange={handleEmailChange}

                    />
                    <br/>
                    <br/>
                    <TextField
                        type="password"
                        placeholder="password"
                        name={"password"}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <br/>
                    <br/>
                    <div>
                        {error && <Error>{error}</Error>}
                        <Button type={"submit"} variant="contained">Login</Button>
                    </div>
                </Paper>
            </form>
        </Box>
    )


};

export default SignUP;