import PropertyTypeList from "../../../../components/accommodation/PropertyTypeList"
import slugify from "../../../../util/slugify";
 function PropertyTypeListwrapper(props) {
  return (
    <>
      <PropertyTypeList {...props}/>
    </>
  );
}
export async function getServerSideProps(context) {
 
  const { location, building } = context.query 
 
  const res = await fetch('https://www.staylets.co.uk/api/properties')
  const data = await res.json();
  
  const buildings = data?.filter(item => slugify(item.location) === location)[0];
  const propertyTypes =  buildings?.buildings?.filter(buildingitem =>slugify(buildingitem.name) === building)[0].details;
  

  return { props: { propertyTypes,location, building } }
}
export default PropertyTypeListwrapper