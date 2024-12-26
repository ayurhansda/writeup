import WriteupCard from "./WriteupCard";
import Pagination from "./Pagination";
import PageCategory from "./PageCategory";

export default function writeupArticles() {
  return(
    <>
      <div><h1 className="text-center mt-3">WriteUps</h1></div>
      <PageCategory />
      <WriteupCard />
      <Pagination />
    </>
  );
}
