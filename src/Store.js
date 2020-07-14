import { Store } from "pullstate";

export const APP = new Store({
	state: {},
	user: { id: "", name: "", projects: [] },
	projects: [],
	reducers: {},
	actions: {},
});
