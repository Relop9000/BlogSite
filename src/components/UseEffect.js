const { useEffect } = require("react");

function DaraFetchingExample() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typecode.com/todos").then((response) =>
      response.json()
    ).then(data) => {setData(data);setLoading(false);};
  });
}
