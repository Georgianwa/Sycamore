//Task 3
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Restricted access"));
    }, 3000);
  });
};

fetchData()
  .then((data) => {
     console.log(data);
   })
  .catch((error) => {
     console.log("Error: ", error.message);
  });
  