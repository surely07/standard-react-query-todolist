import { createSlice } from "@reduxjs/toolkit";
import { QUERY_KEYS } from "../../query/keys.constant";

const todosSlice = createSlice({
  name: QUERY_KEYS,
  initialState: {},
  reducers: {},
});

// export
export default todosSlice.reducer;
