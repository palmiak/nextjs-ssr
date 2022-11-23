import { people } from '../../data'

export default function About({ data }) {
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
}
    
export async function getServerSideProps( context ) {
    const res = await fetch(`https://swapi.dev/api/people/` + context.params.id )
    const data = await res.json()
    return { props: { data } }
}