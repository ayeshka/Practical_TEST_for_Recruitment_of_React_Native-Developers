
export const FETCH_ADDRESS = 'FETCH_ADDRESS';

export const getAddresses = (postelCode) => {
    return async (dispatch) => {
        const response = await fetch(`https://api.ideal-postcodes.co.uk/v1/postcodes/${postelCode}?api_key=iddqd`);
        if(!response.ok) {
            throw new Error("Adrress details cannot be fetched");
        }

        const redData = await response.json();
        dispatch({
            type: FETCH_ADDRESS,
            address: redData
        });
    }
}