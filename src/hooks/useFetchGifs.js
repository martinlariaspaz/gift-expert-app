import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

const useFetchGifs = (category) => 
{
    const [state, setState] = useState(
    {
        data: [],
        loading: true,
    });
    useEffect(() => 
    {
        getGif(category).then(imgs => 
            setTimeout(() => {
                console.log(imgs);
                setState({
                    data:imgs,
                    loading: false,
                })
                }, 3000));
    },[category]) 
    return state; // [data:[],loading true ]
}
export default useFetchGifs
