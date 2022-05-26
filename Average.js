import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Average = (props) => {
  const history = useHistory();

  const params = useParams();

  const [rate, setRate] = React.useState(0);

  React.useEffect(() => {
    const press = (e) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setRate(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);
    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <>
      <Title>
        <h3>
          <p>{params.week_day}요일</p>평점 남기기
        </h3>
        <Box>
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setRate(idx + 1);
                }}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "30px",
                  margin: "5px",
                  backgroundColor: rate < idx + 1 ? "#ddd" : "#4cd9ff",
                }}
              ></div>
            );
          })}
        </Box>

        <button
          onClick={() => {
            history.goBack();
          }}
        >
          <p>평점 남기기</p>
        </button>
      </Title>
    </>
  );
};

const Title = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;

  h3 {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: #331f84cc;

    p {
      color: #eee;
      font-weight: bold;
      padding: 2px 10px;
      border-radius: 10px;
      background-color: #1836cfcf;
      display: inline-block;
    }
  }

  button {
    margin: 10px 30%;
    width: 40%;
    background-color: #0776e4cc;
    border: none;
    border-radius: 6px;
    padding: 1rem;
    &:hover {
      background-color: #0776e4;
    }
    p {
      color: white;
      font-size: 20px;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
`;

export default Average;
