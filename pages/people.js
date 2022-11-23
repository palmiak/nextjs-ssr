import { people } from '../data'

export default function About({ message }) {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}
    
export function getServerSideProps() {
    const data = people.filter((p) => p.id === id);
    return { props: { data } }
}