// adjusting the url and importing axios 
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'
const Organization = 'EMIT-FLCIT'
const Project = 'Fuels%20IT'
const azureDevOpsURL = `https://analytics.dev.azure.com/${Organization}/${Project}`

// function consult to a query 
async function fetchData() {
    /*  const params = [   //queryone
        'Depth eq 2 and StartDate ne null',
        'IterationName,StartDate,EndDate',
        'StartDate'
    ] */
    const params = [  //querytwo
        "IterationLevel3 eq '2023 I2' and IterationLevel2 eq '2023' and Depth eq 3 and StartDate ne null",
        'IterationLevel2,IterationName,StartDate,EndDate',
        'StartDate'
    ]
    const url = `${azureDevOpsURL}/_odata/v3.0/Iterations/?$filter=${params[0]}&$select=${params[1]}&$orderby=${params[2]}`
    const auth = {
        username: "",
        password: "" //putyourtokenherepls
    }

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Basic " + window.btoa(":" + auth.password)
            }
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error 401', error);
        throw error;
    }
}
// query for a post method
/* const query = {
    "$filter": "Depth eq 2 and StartDate ne null",
    "$select": "IterationName, StartDate, EndDate",
    "$orderby": "StartDate"
} */

// displaying the data in console.log
function displayData(data) {
    console.log('Database:')
    console.log(data)
}

async function fecthDataAndDisplay() {
    try {
        const data = await fetchData()
        displayData(data);
    } catch (error) {
        console.error('Error... conecting in ADO.', error)
    }
}

fecthDataAndDisplay()