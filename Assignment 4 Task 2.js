//Task 2
const fetchData = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      reject(new Error("Your internet connection sucks"));
    }, 3000);
  });
};

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
getData();
