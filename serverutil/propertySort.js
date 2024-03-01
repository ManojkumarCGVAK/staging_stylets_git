const propertySort = data => {
	const sortingArray = [
		'Studio',
		'Superior Studio',
		'One Bedroom',
		'Two Bedroom',
		'Three Bedroom',
		'Four Bedroom',
		'Five Bedroom',
		'Five Bed Apartment',
		'Six Bedroom'
	];

	const groupedProperties = {};

	data.forEach(property => {
		if (!groupedProperties[property.areaName]) {
			groupedProperties[property.areaName] = {
				[property.buildingName]: {
					[property.propertyTypeName]: [property],
				},
			};
		} else if (!groupedProperties[property.areaName][property.buildingName]) {
			groupedProperties[property.areaName][property.buildingName] = {
				[property.propertyTypeName]: [property],
			};
		} else if (!groupedProperties[property.areaName][property.buildingName][property.propertyTypeName]) {
			groupedProperties[property.areaName][property.buildingName][property.propertyTypeName] = [property];
		} else {
			groupedProperties[property.areaName][property.buildingName][property.propertyTypeName].push(property);
		}
	});

	const filteredProperties = [];

	const locationArray = Object.keys(groupedProperties);
	
	locationArray.forEach(location => {
		const buildingArray = Object.keys(groupedProperties[location]);
		
		buildingArray.forEach(building => {
			const propertyTypeKeys = Object.keys(groupedProperties[location][building]);
			propertyTypeKeys.sort((a, b) => sortingArray.indexOf(a) - sortingArray.indexOf(b));
			

			const locationProperties = {
				location,
				buildings: [],
			};
			
			const dataObject = {
				name: building,
				location,
				description: '',
				coordinates: {
					longitude: false,
					latitude: false,
				},
				details: [],
			};
			
			propertyTypeKeys.forEach(key => {
				if(groupedProperties[location][building][key][0].propertyTypeName.search(/SHUFFLE/i) === 0){

					return;
				} 
				const data = {
					type: groupedProperties[location][building][key][0].propertyTypeName,
					description: groupedProperties[location][building][key][0].propertyTypeDescription,
					featuredImage: groupedProperties[location][building][key][0].mainImage,
					maxOccupancy: groupedProperties[location][building][key][0].maxOccupancy,
					properties: groupedProperties[location][building][key],
				};
				data.properties.sort((a, b) => a.name.localeCompare(b.name));
				dataObject.description = groupedProperties[location][building][key][0].description;
				dataObject.coordinates.longitude = groupedProperties[location][building][key][0].longitude;
				dataObject.coordinates.latitude = groupedProperties[location][building][key][0].latitude;
				dataObject.details.push(data);
			});

			locationProperties.buildings.push(dataObject);
			
			filteredProperties.push(locationProperties);
		});
	});
	
	return filteredProperties.reduce((old,newkey)=>{
		
		const hasValue = old.findIndex((item)=>item.location===newkey.location)
			
		if(hasValue !== -1){

			old[hasValue]['buildings'].push(...newkey.buildings)
		
		}  else{

			old.push({location:newkey.location,buildings:newkey.buildings})
		
		}
		
		
		return old

	},[])

};

module.exports = propertySort;
