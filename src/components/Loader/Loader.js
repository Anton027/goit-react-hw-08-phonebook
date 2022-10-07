import { Box } from "components/Box";
// import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
    return (
        <Box
            marginBottom="5px"
            padding="3px"
        >
            <BarLoader color="#36d7b7" size={20}/>
        </Box>
    )
}

export default Loader;

// HashLoader