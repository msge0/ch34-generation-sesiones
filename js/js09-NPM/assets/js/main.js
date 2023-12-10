console.log("js-09");

const url = "https://fakestoreapi.com/users";

const getUsersFetch = async (url) => {
    try {
        const response = await fetch(url);
        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.log(error);
    }
}


const getUsersAxios = async (url) => {
    try {
        const users = await axios.get(url);
        console.log(users.data );
    } catch (error) {
        console.log(error);
    }
}

const postAxios = async ( ) =>{
    const url = "";
    const user = {
        name: "aldo",
        job: "dev"
    }

     const response = await axios.post(url, user);
}

getUsersFetch(url);
getUsersAxios(url);

postAxios();