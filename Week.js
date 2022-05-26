import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const MyWeek = (props) => {
  const history = useHistory();

  const days = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };

  console.log(Object.keys(days).map((a, i) => days[a]));

  const day_of_week = Object.keys(days).map((a, i) => {
    let today = new Date().getDay();

    let b =
      today + parseInt(i) > 6 ? today + parseInt(i) - 7 : today + parseInt(i);

    return days[b];
  });

  let rate_sum = 0;

  const week_rates = day_of_week.map((c, i) => {
    const random = Math.floor(Math.random() * 5);
    rate_sum += random;

    return { date: c, rate: random };
  });

  console.log(rate_sum);

  const rate_avg = (rate_sum / week_rates.length + 1).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);

  return (
    <>
      <Container>
        <div>
          <h2>내 일주일은?</h2>

          {week_rates.map((c, idx) => {
            return (
              <Item key={`week_day_${idx}`}>
                <p>{c.date}</p>

                {Array.from({ length: 5 }, (item, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "30px",
                        margin: "5px",
                        backgroundColor: c.rate < idx ? "#ddd" : "#4cd9ff",
                      }}
                    ></div>
                  );
                })}

                <div
                  style={{
                    appearance: "none",
                    width: "0px",
                    height: "0px",
                    backgroundColor: "transparent",
                    borderColor: "#0776e487",
                    borderTop: "15px solid transparent",
                    borderLeft: "30px solid #0776e487",
                    borderBottom: "15px solid transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    history.push(`/Average/${c.date}`);
                  }}
                ></div>
              </Item>
            );
          })}
          <div>
            <AVG>
              평균 평점 {avg}
              <BTN
                onClick={() => {
                  setAvg(parseInt(0).toFixed(1));
                }}
              >
                <p>Reset</p>
              </BTN>
            </AVG>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;

  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 40px;
    color: #331f84cc;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const AVG = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #1836cfcf;
  margin-top: 50px;
  display: flex;
`;

const BTN = styled.div`
  width: 30%;
  height: 40px;
  background-color: #0776e4cc;
  border-radius: 6px;
  text-align: center;
  margin: 0 auto;
  line-height: 0px;
  &:hover {
    background-color: #0776e4;
  }
  p {
    color: white;
    font-size: 20px;
  }
`;
export default MyWeek;
