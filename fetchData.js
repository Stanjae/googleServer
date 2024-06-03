const axios = require('axios');
const { getJson } = require("serpapi")

const searchGoogle = async (query) => {
    const apiKey  = 'b442dad55237a34907cf109aa0402206d10428a8f1e23fd5f4920d47f5854901'
    
    try{
        const response = await getJson({
            engine: "google",
            api_key: apiKey, // Get your API_KEY first
            q: query, 
            location: "Austin, Texas",
        });
        return response;
    }catch(error){
        console.log(error)
        throw error;
    }
}

module.exports = searchGoogle;