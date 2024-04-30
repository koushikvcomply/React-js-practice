import {Link as RouterLink} from 'react-router-dom';
export default function Link() {
    return(
        <div>
            <RouterLink to="/home">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
    )
}