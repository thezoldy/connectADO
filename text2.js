// adjusting the url and importing axios 
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'
const Organization = 'EMIT-FLCIT'
const Project = 'Fuels%20IT'
const azureDevOpsURL = `https://analytics.dev.azure.com/${Organization}/${Project}`

// function consult to a query 
async function fetchData() {
/*   const param = "WorkItemType in ('User Story', 'Bug') and State in ('Ready to Release', 'Done', 'Closed') and Iteration/IterationLevel3 eq '2023 I2' and Iteration/IterationLevel2 eq '2023' and contains(Area/AreaPath, 'Fuels IT\\Trading\\CT\\Trading Americas'))/groupby((Iteration/IterationLevel4), aggregate(StoryPoints with sum as StoryPoints)" */
  const param = "AreaLevel1 eq 'Fuels IT' and AreaLevel2 eq 'Trading'"
  const method = 'Areas'
  const url = `${azureDevOpsURL}/_odata/v3.0/${method}?$apply=filter(${param})`
  const auth = {
    username: "",
    password: "" //putyourtokenherepls
  }
  try {
    if(auth.password==""){
        window.alert("Fill out the field 'accessToken' in text2.js")}
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