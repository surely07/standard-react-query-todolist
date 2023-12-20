import { createSlice } from "@reduxjs/toolkit";
import { QUERY_KEY } from "../../query/keys.constant";

const todosSlice = createSlice({
  name: QUERY_KEY,
  initialState: {},
  reducers: {},
});

// export
export default todosSlice.reducer;
