import {useParams} from "react-router-dom";

export const useParamsId = () => {
    let id: any;
    ({id} = useParams());
    return {id}
}
