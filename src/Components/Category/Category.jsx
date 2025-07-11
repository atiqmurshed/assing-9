

const Category = () => {

  fetch('../Adventure.json')
  .then(response => response.json())
  .then(data => {
    // data নিয়ে কাজ
    console.log(data)
  })
  .catch(error => {
    // error handle
    console.log(error);
  });


    return (
        <div>
            category
        </div>
    );
};

export default Category;