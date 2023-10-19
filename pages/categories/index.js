import CategoriesPage from "../../components/templates/CategoriesPage";
import React from "react";

const Categories = ({ data }) => {
  console.log(data);
  return <CategoriesPage data={data} />;
};
 
export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  const filteredData = data.filter((food) => {
    const difficultyResult = food.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = food.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");

      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      }
      if (time === "more" && timeDetail && +timeDetail > 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return food;
    } else if (!time && difficulty && difficultyResult.length) {
      return food;
    } else if (!difficulty && time && timeResult.length) {
      return food;
    }
  });

  return {
    props: { data: filteredData },
  };
}
