import { getServerSideSitemap } from "next-sitemap";
import axios from 'axios'
const keys = require('../../config/keys');
const propertySort = require('../../serverutil/propertySort')
import slugify from "../../util/slugify";

export const getServerSideProps = async (ctx) => {
  const allPages = [];
    const { data } = await axios.get(`${keys.API}/properties`, { params:{  pageSize: 1000}})
    const filteredProperties = propertySort(data.results);
    
    filteredProperties?.map(items=>{
        allPages.push({
            loc: `${process.env.SITE_URL}accommodation/${items.location.toString().toLowerCase()}`,
            lastmod: new Date().toISOString(),
          })
          items?.buildings?.map((singlebuilding)=>{
            allPages.push({
              loc: `${process.env.SITE_URL}accommodation/${items.location.toString().toLowerCase()}/${slugify(singlebuilding.name)}`,
              lastmod: new Date().toISOString(),
            })
            singlebuilding?.details.map((detail)=>{
              allPages.push({
                loc: `${process.env.SITE_URL}property/${items.location.toString().toLowerCase()}/${slugify(singlebuilding.name)}/${slugify(detail.type)}`,
                lastmod: new Date().toISOString(),
              })
            })
           
          })


    })
  
  const fields = [...allPages];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}