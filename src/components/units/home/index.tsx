import styled from "@emotion/styled";
import { useQueryFetchUseditems } from "../../commons/hooks/useQueries/useditem/useQueryFetchUseditems";
import ProductItem from "../../commons/productitem";

const Wrapper = styled.section`
  width: 100%;
  padding: 90px;
  h2 {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 98px;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: calc(200px / 3);
  }
`;

export default function Home() {
  const { data: ItemsData, refetch, fetchMore } = useQueryFetchUseditems();

  const newArr = new Array(8).fill(1).map((arr, i) => {
    return ItemsData?.fetchUseditems[i];
  });
  console.log(newArr);
  return (
    <Wrapper>
      <h2>New Arrival</h2>
      <section>
        {newArr.map((el) => (
          <ProductItem key={el._id} data={el} />
        ))}
      </section>
    </Wrapper>
  );
}
