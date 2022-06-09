import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
/* import { auth, db, storage } from "./shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
 */
const Signup = () => {
  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const repw_ref = React.useRef(null);

  const navigate = useNavigate();

  //  const signupFB = async () => {
  /* //값이 존재하지 않은데 firebase에 요청을 할 수있으니 확인 필요 --> 벨리데이션
    벨리데이션이 필요하나 이번에는 사용하지 않음.
    if (id_ref.current.value === "") {
      return false;
    } */

  /*     const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);

    const user_doc = await addDoc(collection(db, "users"), {
      user_id: user.user.email,
      name: name_ref.current?.value,
      imge_url: file_link_ref.current?.url,
    });
    console.log(user_doc.id);
  };

 */

  return (
    <>
      <div>
        <h3>아이디(이메일)</h3>
        <input placeholder="아이디를 적어주세요." ref={id_ref} />
        <br />
        <h3>이름</h3>
        <input placeholder="이름" ref={name_ref} />
        <br />
        <h3>비밀번호</h3>
        <input
          placeholder="비밀번호를 입력하세요."
          ref={pw_ref}
          type="password"
        />
        <br />
        <h3>비밀번호 확인</h3>
        <input placeholder="비밀번호를 다시 입력해주세요!" ref={repw_ref} />
        <br />
        <Button
          /* onClick={signupFB} */
          onClick={() => {
            navigate("/Login");
          }}
        >
          회원가입
        </Button>
      </div>
    </>
  );
};

const Button = styled.button`
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  margin-top: 50px;
  height: 30px;
  font-size: 20px;
  background-color: white;
  &:hover {
    background-color: lightgrey;
  }
`;
export default Signup;
