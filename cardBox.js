import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const LOAD = "box/LOAD";
const CREATE = "box/CREATE";
const UPDATE = "box/UPDATE";
const DELETE = "box/DELETE";

const initialState = {
  list: [],
};

export function loadBox(box_list) {
  return { type: LOAD, box_list };
}

export function createBox(box) {
  return { type: CREATE, box };
}

export function updateBox(box_index) {
  return { type: UPDATE, box_index };
}

export function deleteBox(box_index) {
  console.log("지울 버킷 인덱스", box_index);
  return { type: DELETE, box_index };
}

export const loadBoxFB = () => {
  return async function (dispatch) {
    const box_data = await getDocs(collection(db, "word_card_box"));

    let box_list = [];

    box_data.forEach((b) => {
      console.log(b.data());
      box_list.push({ id: b.id, ...b.data() });
    });
    //console.log(box_list);
    dispatch(loadBox(box_list));
  };
};

export const addBoxFB = (box) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "word_card_box"), box);
    const box_data = { id: docRef, ...box };
    console.log(box_data);

    dispatch(createBox(box_data));
  };
};

export const updateBoxFB = (box_id) => {
  return async function (dispatch, getState) {
    console.log(box_id);
    const docRef = doc(db, "word_card_box", box_id);
    await updateDoc(docRef, { completed: true });

    const _box_list = getState().box.list;
    const box_index = _box_list.findIndex((b) => {
      return b.id === box_id;
    });

    dispatch(updateBox(box_index));
  };
};

export const deleteBoxFB = (box_id) => {
  return async function (dispatch, getState) {
    if (!box_id) {
      window.alert("아이디가 없어요");
      return;
    }
    const docRef = doc(db, "word_card_box", box_id);
    await deleteDoc(docRef);

    const _box_list = getState().cardBox.list;
    console.log(_box_list);

    const box_index = _box_list.findIndex((b) => {
      return b.id == box_id;
    });

    dispatch(deleteBox(box_index));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "box/LOAD": {
      return { list: action.box_list };
    }
    case "box/CREATE": {
      console.log("이제 값을 바꿀거야!");
      const new_box_list = [...state.list, action.box];
      return { ...state, list: new_box_list };
    }

    /*     case "box/UPDATE": {
      const new_box_list = state.list.map((l, idx) => {
        if (parseInt(action.box_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { list: new_box_list };
    } */

    case "box/DELETE": {
      const new_box_list = state.list.filter((l, idx) => {
        return parseInt(action.box_index) !== idx;
      });

      return { ...state, list: new_box_list };
    }
    default:
      return state;
  }
}
