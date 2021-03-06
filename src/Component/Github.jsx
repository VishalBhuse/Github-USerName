import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { FetchUSer } from "../Action/action";
import { Githubreducer } from "../Reducer/Reducer";

const init = {
  isLoading: false,
  isError: false,
  data: [],
};

export const Github = () => {
  const [state, dispatch] = useReducer(Githubreducer, init);
  const [text, settext] = useState("masai");

  return (
    <div>
      <img height={'100px'} src="data:image/png;base64,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" alt="" />
      <h2>Github Username Search: {text}</h2>
      <input
        style={{ padding: "5px 15px", outline: "none" }}
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
        placeholder="enter your username"
        required
      />
      <button
        style={{ padding: "5px 15px", cursor: "pointer" }}
        onClick={() => 
          // {            
            !settext==="" ?  "" :FetchUSer(dispatch, text)}
          // }
      >
        Search
      </button>

      <div style={{ textAlign: "left" }}>
        {state.data.map((name, i = 1) => (
          <p key={name.login}>{i + 1 + ". " + name.login}</p>
        ))}
      </div>
    </div>
  );
};
