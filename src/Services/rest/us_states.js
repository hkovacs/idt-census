
const GetUSStates = async () => {
    try {
        let response = await fetch(`http://pos.idtretailsolutions.com/countytest/states`);
        response = await response.json();
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default {
    GetUSStates
};