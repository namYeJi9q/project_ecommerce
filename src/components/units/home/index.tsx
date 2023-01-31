import styled from "@emotion/styled";
import ProductItem from "../../commons/productItem";

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
  return (
    <Wrapper>
      <h2>New Arrival</h2>
      <section>
        <ProductItem />
      </section>
    </Wrapper>
  );
}
