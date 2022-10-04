import { Box } from "components/Box";
// import { useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = () => {
    return (
        <Box
            marginBottom="5px"
            padding="3px"
        >
            <PacmanLoader color="#36d7b7" size={20}/>
        </Box>
    )
}

export default Loader;