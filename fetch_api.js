using asynchronous function

fetch("https:/fake.com/todo")
  .then(response => response.json())
  .then(json => console.log(json));

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

fetchData.then(data => console.log(data))
