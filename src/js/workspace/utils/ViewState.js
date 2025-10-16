// src/js/workspace/utils/ViewState.js
const state = { currentView: null };
export function setCurrentView(viewId) { state.currentView = viewId; }
export function getCurrentView() { return state.currentView; }
export function isActive(viewId) { return state.currentView === viewId; }

