import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  loading: false,
  error: {},
  smallMenu: false,
  activeMenu: null,
  removeName: "",
  selectedMenu: [],
  menuList: [
    { name: "DashBoard", to: "/admin/dashboard", icon: "home" },
    { name: "Author", to: "/admin/list", icon: "user" },
    { name: "Page", to: "/admin/list-Page", icon: "home" },
  ],
  tabs: [
    {
      name: "DashBoard",
      path: "/admin/dashboard",
      pathname: "/admin/dashboard",
    },
  ],
};

const systemSlice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    toggleMenu: (state = initialState.smallMenu, action) => {
      return { ...state, ...action.payload };
    },
    loadingAction: (state = initialState, { payload }) => {
      return { ...state, loading: payload };
    },
    addToTab: (state = initialState, { payload }) => {
      let tabs = [...state.tabs];
      !tabs.find((tab) => tab.name === payload.name) && tabs.push(payload);

      let updatedTabs = tabs.map((tab) => {
        if (tab.name === payload.name) {
          return Object.assign({}, tab, { path: payload.path });
        }
        return tab;
      });
      let remainTabs = updatedTabs.filter((t) => state.removeName !== t.name);
      return { ...state, tabs: [...remainTabs] };
    },
    removeTab: (state = initialState, { payload }) => {
      let tabs = [...state.tabs];
      let remainTabs = tabs.filter((t) => t.name !== payload.name);
      return {
        ...state,
        removeName: payload.name,
        tabs:
          remainTabs.length > 0
            ? [...remainTabs]
            : [{ name: "Dashboard", path: "/admin/dashboard" }],
      };
    },
    clearTab: (state = initialState, { payload }) => {
      return {
        ...state,
        removeName: payload.name,
      };
    },
    activateMenu: (state = initialState, { payload }) => {
      return {
        ...state,
        activeMenu: payload,
      };
    },
  },
  extraReducers: {},
});

export const system = (state) => state.system;
export const {
  toggleMenu,
  loadingAction,
  clearTab,
  removeTab,
  addToTab,
  activateMenu,
} = systemSlice.actions;
export default systemSlice.reducer;
