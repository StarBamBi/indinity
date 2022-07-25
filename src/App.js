import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CalculateIcon from "@mui/icons-material/Calculate";
import SummarizeIcon from "@mui/icons-material/Summarize";
import "./App.css";
import { useState } from "react";

function App() {
  let [inputBtnValue, setInputBtnValue] = useState(""); // 계산기 버튼 값 입력
  let [result, setResult] = useState(0); // 결과값
  let [history, setHistory] = useState([]); // 계산 과정 기록

  function addInput(num) {
    // 계산 과정 함수
    let input = inputBtnValue + num;
    setInputBtnValue(input);
    history.push(input);
    setHistory(history);
  }
  function removeInput() {
    // 계산 결과 지우기
    setInputBtnValue(inputBtnValue.slice(0, -1));
    history.push(inputBtnValue.slice(0, -1));
    setHistory(history);
  }

  return (
    <div>
      <div className="container">
        <div>
          <Typography variant="h4" gutterBottom component="div">
            계산기
          </Typography>
          <Divider sx={{ mt: 2, mb: 5 }} />
        </div>
        <div>
          <div
            className="result-section"
            style={{ textAlign: "right", width: "285px" }}
          >
            <div style={{ fontSize: "16px", color: "rgb(187 186 186)" }}>
              {inputBtnValue}
            </div>
            <div style={{ fontSize: "45px", color: "#f34f4f" }}>{result}</div>
          </div>
          <div>
            <Stack direction="row" spacing={2} sx={{ my: 1 }}>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => setInputBtnValue("")}
              >
                C
              </button>
              <button className="cal-btn" style={{ background: "#b9b8b8" }}>
                %
              </button>
              <button className="cal-btn" style={{ background: "#b9b8b8" }}>
                ÷
              </button>
              <button
                className="cal-btn"
                style={{ background: "rgb(251 172 172)" }}
              >
                X
              </button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ my: 1 }}>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("7")}
              >
                7
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("8")}
              >
                8
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("9")}
              >
                9
              </button>
              <button
                className="cal-btn"
                style={{ background: "rgb(251 172 172)" }}
                onClick={() => addInput("-")}
              >
                ㅡ
              </button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ my: 1 }}>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("4")}
              >
                4
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("5")}
              >
                5
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("6")}
              >
                6
              </button>
              <button
                className="cal-btn"
                style={{ background: "rgb(251 172 172)" }}
                onClick={() => addInput("+")}
              >
                +
              </button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ my: 1 }}>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("1")}
              >
                1
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("2")}
              >
                2
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("3")}
              >
                3
              </button>
              <button
                className="cal-btn"
                style={{ background: "red", color: "white" }}
                onClick={() => addInput("3")}
              >
                =
              </button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ my: 1 }}>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => removeInput()}
              >
                &lt;
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput("0")}
              >
                0
              </button>
              <button
                className="cal-btn"
                style={{ background: "#b9b8b8" }}
                onClick={() => addInput(".")}
              >
                .
              </button>
            </Stack>
          </div>
          <div>
            <CalculateIcon />
            <SummarizeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalBtn(props) {
  return (
    <div>
      <button
        className="cal-btn"
        style={{ background: props.bcolor, color: props.fcolor }}
        onClick={() => props.onClick}
      >
        {props.btn1}
      </button>
    </div>
  );
}

export default App;
