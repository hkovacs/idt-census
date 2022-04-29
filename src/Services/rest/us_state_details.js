
const GetUSStateDetails = async (url) => {
    try {
        // let response = await fetch(`http://pos.idtretailsolutions.com/countytest/states`);
        let response = await fetch(url);
        response = await response.json();
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default {
    GetUSStateDetails
};