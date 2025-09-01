import { BeatLoader } from "react-spinners";

const Loader = ({ref}) => {
    return (
        <>
        <BeatLoader ref={ref}  color="green" size={9}/>
        </>
    )
}

export default Loader;