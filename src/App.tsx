import { Grid, GlobalStyles } from "@mui/material";
import { MediaCard } from "./components/Card.jsx";
import { Header } from "./components/Header.jsx";

export default function App() {
    return (
        <>
            {/* 隙間を埋める */}
            <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />

            {/* ヘッダー */}
            <Header />

            {/* 中身 */}
            <Grid
                sx={{ mt: "auto", mb: "auto", p: 1 }}
                container
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        title="C"
                        code={'#include<stdio.h>\n\nint main(void){\n\tprintf("Hello World");\n\treturn 0;\n}'}
                        url="#" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        title="C++"
                        code={'#include<iostream>\n\nint main(void){\n\tstd::cout << "Hello World" << std::endl;\n\treturn 0;\n}'}
                        url="#" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        title="Rust"
                        code={'fn main() {\n\tprintln!("Hello World");\n}'}
                        url="#" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        title="Go"
                        code={'package main\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World")\n}'}
                        url="#" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        title="Java"
                        code={'public class Main {\n\tpublic static void main(String[] args) {\n\tSystem.out.println("Hello World");\n\t}\n}'}
                        url="#" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        title="JavaScript"
                        code={'console.log("Hello World");'}
                        url="#" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        title="Python"
                        code={'print("Hello World")'}
                        url="#" />
                </Grid>
            </Grid>
        </>
    );
}
