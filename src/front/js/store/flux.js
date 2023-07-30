const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			planets: [],
			people: [],
			vehicles: [],
			favorites: [],

		

			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},




		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			
			//function to add favorites
			addFavorite: (name, type, id) => {
				const store = getStore();
				if (store.favorites.filter((item) => item.name === name).length === 0) {
					const newObj = {
						name: name,
						type: type,
						id: id
					}
					const newArr = [...store.favorites, newObj]
					setStore({favorites: newArr})
				} else console.log("Hmm... seen that before")
			},
			//function to remove favorite
			removeFavorite: (obj) => {
				const store = getStore();
				const newArr = store.favorites.filter((item) => item.name != obj.name)
				setStore({favorites: newArr})
			},



			//fetch
			getData: (entity) => {
				//passing the swapi URL as an argument of the fetch method, we want to fetch from swapi,; call
				fetch(`https://swapi.dev/api/${entity}`)
					//below function validates the response, checks if status is 200s or throws error response
					.then((response) => {
						if (!response.ok) {
						throw Error(response.statusText)
						}
						//we want to read the response as json 
						//converts plain text from body into .js format 
						return response.json();
					})
					.then((responseAsJson) => {
						//below is what I want to do with the jsonified reponse, 
						//log the result which is the JSON data received from body of repsonse
						console.log("responseAsJson: ",responseAsJson.results);
						setStore({[entity]:responseAsJson.results});
					})
					.catch((error) => {
						console.log("problem:", error);
					})
			},
		}
	};
};

export default getState;

// getMessage: async () => {
// 	try {
// 		// fetching data from the backend
// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
// 		const data = await resp.json()
// 		setStore({ message: data.message })
// 		// don't forget to return something, that is how the async resolves
// 		return data;
// 	} catch (error) {
// 		console.log("Error loading message from backend", error)
// 	}
// },
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.demo.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// 	//reset the global store
// 	setStore({ demo: demo });
// }
