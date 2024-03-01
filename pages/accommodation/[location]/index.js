import BuildingList from "../../../components/accommodation/BuildingList"

 function BuildingListwrapper() {
  return (
    <>
      <BuildingList />
    </>
  );
}
export async function getServerSideProps(context) {
 
  
  const res = await fetch('https://www.staylets.co.uk/api/properties')
  const data = await res.json()
  return { props: { all:data } }
}
export default BuildingListwrapper