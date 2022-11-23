export default function About({ message, res }) {
  res.status(200).json( 'plum' );
}
  
export function getServerSideProps() {
  return {
      props: { message: "Welcome to the About Page" },
  };
}