// 액션 타입을 정해줍니다.
const LOAD = "task/LOAD";
const CREATE = "task/CREATE";
const UPDATE = "task/UPDATE";
const DELETE = "task/DELETE";

// 초기 상태값을 만들어줍니다.
const initialState = {
  list: [
    {
      image_url:
        "https://th.bing.com/th/id/R.521f5be993f45c4bfd92613d2af30992?rik=MTzqw96TkitI7Q&riu=http%3a%2f%2fpostfiles10.naver.net%2fMjAxNzA0MDJfMjk3%2fMDAxNDkxMDY5NDkzNTEz.fJ2vKWlLk_W6oWEK0KG9QLtdDdARCKQki588VUJT8sog.ohimYiC_FfyydD1BJOa0gaaxt66zRpklE3XVUypESdAg.PNG.qwer14732%2f13.png%3ftype%3dw773&ehk=4ttzEaP9Of478CE1ZbIxswLK12xrPH%2fw1DU4bgZwlcg%3d&risl=&pid=ImgRaw&r=0",
      contents: "눈물이 난다 눈물이 나..., 이게 맞나 싶네.",
      comment_cnt: 0,
      insert_dt: "2022-02-28 10:28:18",
    },
    {
      image_url:
        "https://image.onstove.com/850x0/d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/4825283c0edc42229c3ab3706ccfd913/dfdffe9994d44302a9c1727db9aaaef4_1572945740.png",
      contents: "이봐 자네, 자네는 어디서 부터가 문제인지 알겠나?",
      comment_cnt: 0,
      insert_dt: "2022-02-28 10:08:28",
    },
  ],
};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!
export function loadContent(content_list) {
  return { type: LOAD, content_list };
}

export function createContent(content) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, content };
}

export function updateContent(content_index, content_id, content_data) {
  return { type: UPDATE, content_index, content_id, content_data };
}

export function deleteContent(content_index) {
  console.log("지울 컨텐츠 인덱스", content_index);
  return { type: DELETE, content_index };
}

// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "tast/LOAD": {
      return { list: action.content_list };
    }
    case "task/CREATE": {
      console.log("이제 값을 바꿀거야!");
      const new_content_list = [...state.list, action.content];
      return { ...state, list: new_content_list };
    }

    case "bucket/UPDATE": {
      const new_content_list = state.list.map((l, idx) => {
        if (parseInt(action.content_index) === idx) {
          return {
            ...l,
            content: action.content_data.content,
            image: action.content_data.image,
          };
        } else {
          return l;
        }
      });
      return { list: new_content_list };
    }

    case "bucket/DELETE": {
      const new_content_list = state.list.filter((l, idx) => {
        return parseInt(action.content_index) !== idx;
      });

      return { ...state, list: new_content_list };
    }
    default:
      return state;
  }
}
